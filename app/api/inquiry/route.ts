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

    const deliveries: Promise<boolean>[] = [];
    const webhook = process.env.INQUIRY_WEBHOOK_URL;
    if (webhook) {
      deliveries.push(fetch(webhook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...inquiry, submittedAt: new Date().toISOString() }), signal: AbortSignal.timeout(8000) }).then((response) => response.ok));
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL;
    const fromEmail = process.env.INQUIRY_FROM_EMAIL;
    if (resendKey && toEmail && fromEmail) {
      deliveries.push(fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "content-type": "application/json" },
        signal: AbortSignal.timeout(8000),
        body: JSON.stringify({
          from: fromEmail, to: [toEmail], reply_to: inquiry.email,
          subject: `[Velorace Lace] ${inquiry.request || "Wholesale inquiry"} - ${inquiry.product}`,
          text: [`Name: ${inquiry.name}`, `Email: ${inquiry.email}`, `WhatsApp: ${inquiry.whatsapp}`, `Product: ${inquiry.product}`, `Request: ${inquiry.request}`, `Requirement: ${inquiry.requirement}`, `Page: ${inquiry.page}`, `Source: ${inquiry.source}`].join("\n"),
        }),
      }).then((response) => response.ok));
    }

    const results = await Promise.allSettled(deliveries);
    const delivered = results.some((result) => result.status === "fulfilled" && result.value);
    return NextResponse.json({ ok: true, delivered, fallback: delivered ? undefined : "whatsapp" }, { status: delivered ? 200 : 202 });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process the inquiry." }, { status: 500 });
  }
}
