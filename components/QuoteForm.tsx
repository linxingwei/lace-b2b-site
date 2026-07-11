"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = Object.fromEntries(data.entries());
    const params = new URLSearchParams(window.location.search);
    const payload = { ...fields, page: window.location.href, source: params.get("utm_source") || document.referrer || "direct" };
    const message = ["Hello Velorace Lace, I would like to discuss a wholesale inquiry.", `Name: ${fields.name}`, `Email: ${fields.email}`, `WhatsApp: ${fields.whatsapp}`, `Product: ${fields.product}`, `Request: ${fields.request}`, `Quantity / requirement: ${fields.requirement}`, `Page: ${window.location.href}`].join("\n");
    const whatsappUrl = `https://wa.me/8615767956637?text=${encodeURIComponent(message)}`;
    const trackLead = (method: string) => {
      const target = window as Window & { dataLayer?: Record<string, unknown>[] };
      target.dataLayer?.push({ event: "generate_lead", inquiry_method: method, product_category: String(fields.product || "") });
    };

    setStatus("sending");
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (response.ok && result.delivered) {
        setStatus("sent");
        form.reset();
        trackLead("email");
        return;
      }
      if (response.ok && result.fallback === "whatsapp") {
        setStatus("fallback");
        trackLead("whatsapp");
        window.location.assign(whatsappUrl);
        return;
      }
      setStatus("error");
    } catch {
      setStatus("fallback");
      trackLead("whatsapp");
      window.location.assign(whatsappUrl);
    }
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="field-row"><label>YOUR NAME<input name="name" required maxLength={100} autoComplete="name" placeholder="Jane Smith" /></label><label>WORK EMAIL<input name="email" type="email" required maxLength={160} autoComplete="email" placeholder="jane@brand.com" /></label></div>
      <div className="field-row"><label>WHATSAPP<input name="whatsapp" maxLength={80} autoComplete="tel" placeholder="+1 555 000 0000" /></label><label>PRODUCT TYPE<select name="product" required defaultValue=""><option value="" disabled>Select a category</option><option>Lace Trim</option><option>Embroidery Lace</option><option>Eyelash Lace Trim</option><option>Bridal Lace</option><option>3D Flower Applique</option><option>Kids Lace Trim</option><option>Custom Development</option></select></label></div>
      <label>WHAT DO YOU NEED?<select name="request" defaultValue="Wholesale quotation"><option>Wholesale quotation</option><option>Free samples</option><option>Wholesale catalog</option><option>Custom design support</option></select></label>
      <label>REQUIREMENT<textarea name="requirement" required maxLength={1600} rows={5} placeholder="Please include quantity, color, size, application and destination country." /></label>
      <button className="button button-gold" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending inquiry..." : "Send wholesale inquiry"}<ArrowRight size={17} /></button>
      <p className={`form-note form-${status}`} aria-live="polite">{status === "sent" ? "Thank you. Your inquiry has been received and our trade team will reply shortly." : status === "fallback" ? "WhatsApp opened with your inquiry. Please tap Send to complete it." : status === "error" ? "We could not submit the form. Please contact us through WhatsApp." : "Your details remain private. We typically reply within one business day."}</p>
      <a className="form-whatsapp" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Prefer WhatsApp Business?</a>
    </form>
  );
}
