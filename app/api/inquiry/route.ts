import { NextResponse } from "next/server";

type Inquiry = {
  name?: string;
  email?: string;
  whatsapp?: string;
  product?: string;
  productName?: string;
  sku?: string;
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
  productName: string;
  sku: string;
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
        subject: `[VELORACE LACE] ${inquiry.request || "Wholesale inquiry"} - ${inquiry.sku || inquiry.product}`,
        text: [`Name: ${inquiry.name}`, `Email: ${inquiry.email}`, `WhatsApp: ${inquiry.whatsapp}`, `Product: ${inquiry.productName || inquiry.product}`, inquiry.sku ? `SKU: ${inquiry.sku}` : "", `Category: ${inquiry.product}`, `Request: ${inquiry.request}`, `Requirement: ${inquiry.requirement}`, `Page: ${inquiry.page}`, `Source: ${inquiry.source}`].filter(Boolean).join("\n"),
      }),
    });
    if (response.ok) return { delivered: true, status: "sent" };

    const error = (await response.text()).slice(0, 500);
    console.error("Resend inquiry delivery failed", { status: response.status, error });
    return { delivered: false, status: `resend_http_${response.status}` };
  } catch (error) {
    console.error("Resend inquiry request failed", error instanceof Error ? error.message : "Unknown error");
    return { delivered: false, status: "resend_request_failed" };
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Inquiry;
    if (body.website) return NextResponse.json({ ok: true, delivered: true });

    const inquiry = {
      name: clean(body.name, 100), email: clean(body.email, 160), whatsapp: clean(body.whatsapp, 80),
      product: clean(body.product, 120), productName: clean(body.productName, 180), sku: clean(body.sku, 60), request: clean(body.request, 120), requirement: clean(body.requirement, 1600),
      page: clean(body.page, 300), source: clean(body.source, 200),
    };
    if (!inquiry.name || !inquiry.email || !inquiry.product || !inquiry.requirement || !/^\S+@\S+\.\S+$/.test(inquiry.email)) {
      return NextResponse.json({ ok: false, error: "Please complete the required inquiry fields." }, { status: 400 });
    }

    const webhook = process.env.INQUIRY_WEBHOOK_URL;
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL || "sales@veloracelace.com";
    const resendDomain = clean(process.env.RESEND_EMAIL_DOMAIN, 200).replace(/^https?:\/\//, "").replace(/\/$/, "");
    const fromEmail = process.env.INQUIRY_FROM_EMAIL || (resendDomain ? `VELORACE LACE <inquiries@${resendDomain}>` : "");
    const submittedAt = new Date().toISOString();
    const emailPromise = !resendKey
      ? Promise.resolve({ delivered: false, status: "missing_resend_api_key" })
      : !fromEmail
        ? Promise.resolve({ delivered: false, status: "missing_resend_sender" })
        : deliverEmail(resendKey, toEmail, fromEmail, inquiry);
    const [webhookDelivered, emailResult] = await Promise.all([
      webhook ? deliverWebhook(webhook, inquiry, submittedAt) : Promise.resolve(false),
      emailPromise,
    ]);
    const delivered = webhookDelivered || emailResult.delivered;
    return NextResponse.json(
      { ok: true, delivered, emailStatus: emailResult.status, fallback: delivered ? undefined : "whatsapp" },
      { status: delivered ? 200 : 202 },
    );
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process the inquiry." }, { status: 500 });
  }
}
