import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const baseMetadata = createPageMetadata("Privacy Policy", "How VELORACE LACE handles wholesale inquiry information and optional website analytics.", "/privacy");
export const metadata: Metadata = { ...baseMetadata, robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header><p>Last updated: July 13, 2026</p><h1>Privacy Policy</h1><span>VELORACE LACE uses personal information only to respond to wholesale inquiries, provide requested product information and improve this website with consent.</span></header>
      <section>
        <h2>Information you provide</h2>
        <p>When you submit an inquiry, we may receive your name, work email, WhatsApp number, product interest, quantity, application, destination and other details you choose to include.</p>
        <h2>How we use information</h2>
        <p>We use inquiry details to evaluate your request, recommend suitable lace products, prepare samples or quotations, communicate about an order and maintain relevant business records.</p>
        <h2>Optional analytics</h2>
        <p>If you select “Allow analytics,” Google Analytics 4 records page visits and actions such as inquiry submissions, WhatsApp clicks, email clicks and catalog links. Analytics is not loaded when you select “Necessary only.”</p>
        <h2>Sharing and retention</h2>
        <p>We use service providers only where needed to operate the website, deliver inquiry emails and understand consented website usage. We retain business inquiry information only as long as reasonably needed for communication, order support and legal obligations.</p>
        <h2>Your choices</h2>
        <p>You may decline optional analytics in the website notice. To request access, correction or deletion of inquiry information, contact <a href="mailto:sales@veloracelace.com">sales@veloracelace.com</a>.</p>
      </section>
    </main>
  );
}
