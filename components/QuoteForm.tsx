"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Velorace Lace, I would like to discuss a wholesale inquiry.",
      `Name: ${data.get("name")}`, `Email: ${data.get("email")}`, `WhatsApp: ${data.get("whatsapp")}`,
      `Product: ${data.get("product")}`, `Request: ${data.get("request")}`,
      `Quantity / requirement: ${data.get("requirement")}`,
    ].join("\n");
    window.open(`https://wa.me/8615767956637?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="field-row"><label>YOUR NAME<input name="name" required placeholder="Jane Smith" /></label><label>WORK EMAIL<input name="email" type="email" required placeholder="jane@brand.com" /></label></div>
      <div className="field-row"><label>WHATSAPP<input name="whatsapp" required placeholder="+1 555 000 0000" /></label><label>PRODUCT TYPE<select name="product" defaultValue=""><option value="" disabled>Select a category</option><option>Lace Trim</option><option>Embroidery Lace</option><option>Eyelash Lace Trim</option><option>Bridal Lace</option><option>3D Flower Applique</option><option>Kids Lace Trim</option><option>Custom Development</option></select></label></div>
      <label>WHAT DO YOU NEED?<select name="request" defaultValue="Wholesale quotation"><option>Wholesale quotation</option><option>Free samples</option><option>Wholesale catalog</option><option>Custom design support</option></select></label>
      <label>REQUIREMENT<textarea name="requirement" required rows={5} placeholder="Please include quantity, color, size, application and destination country." /></label>
      <button className="button button-gold" type="submit">Send via WhatsApp <ArrowRight size={17} /></button>
      <p className="form-note">{sent ? "WhatsApp opened with your inquiry. Send the message to complete your request." : "We typically reply within one business day."}</p>
    </form>
  );
}
