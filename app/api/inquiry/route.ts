import { NextResponse } from "next/server";

type Inquiry = {
  name?: string;
  email?: string;
  whatsapp?: string;
  product?: string;
  request?: string;
  requirement?: string;
  page?: string;
  source?: string;
  website?: string;
};

const clean = (value: unknown, max = 800) => String(value || "").trim().slice(0, max);
const deliveryTimeoutMs = 8000;

type CleanInquiry = {
  name: string;
  email: string;
  whatsapp: string;
  product: string;
  request: string;
  requirement: string;
  page: string;
  source: string;
};

async function deliverWebhook(webhook: string, inquiry: CleanInquiry, submittedAt: string) {
  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...inquiry, submittedAt }),
      signal: AbortSignal.timeout(deliveryTimeoutMs),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function deliverEmail(resendKey: string, toEmail: string, fromEmail: string, inquiry: CleanInquiry) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "content-type": "application/json" },
      signal: AbortSignal.timeout(deliveryTimeoutMs),
      body: JSON.stringify({
        from: fromEmail, to: [toEmail], reply_to: inquiry.email,
        subject: `[Velora Lace] ${inquiry.request || "Wholesale inquiry"} - ${inquiry.product}`,
        text: [`Name: ${inquiry.name}`, `Email: ${inquiry.email}`, `WhatsApp: ${inquiry.whatsapp}`, `Product: ${inquiry.product}`, `Request: ${inquiry.request}`, `Requirement: ${inquiry.requirement}`, `Page: ${inquiry.page}`, `Source: ${inquiry.source}`].join("\n"),
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Inquiry;
    if (body.website) return NextResponse.json({ ok: true, delivered: true });

    const inquiry = {
      name: clean(body.name, 100), email: clean(body.email, 160), whatsapp: clean(body.whatsapp, 80),
      product: clean(body.product, 120), request: clean(body.request, 120), requirement: clean(body.requirement, 1600),
      page: clean(body.page, 300), source: clean(body.source, 200),
    };
    if (!inquiry.name || !inquiry.email || !inquiry.product || !inquiry.requirement || !/^\S+@\S+\.\S+$/.test(inquiry.email)) {
      return NextResponse.json({ ok: false, error: "Please complete the required inquiry fields." }, { status: 400 });
    }

    const webhook = process.env.INQUIRY_WEBHOOK_URL;
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL;
    const fromEmail = process.env.INQUIRY_FROM_EMAIL;
    const submittedAt = new Date().toISOString();
    const [webhookDelivered, emailDelivered] = await Promise.all([
      webhook ? deliverWebhook(webhook, inquiry, submittedAt) : Promise.resolve(false),
      resendKey && toEmail && fromEmail ? deliverEmail(resendKey, toEmail, fromEmail, inquiry) : Promise.resolve(false),
    ]);
    const delivered = webhookDelivered || emailDelivered;
    return NextResponse.json({ ok: true, delivered, fallback: delivered ? undefined : "whatsapp" }, { status: delivered ? 200 : 202 });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process the inquiry." }, { status: 500 });
  }
}
