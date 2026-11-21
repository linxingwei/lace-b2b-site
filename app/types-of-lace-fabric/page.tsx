import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppLink from "@/components/WhatsAppLink";
import { createPageMetadata } from "@/lib/seo";

const path = "/types-of-lace-fabric";
export const metadata: Metadata = createPageMetadata(
  "Types of Lace Fabric: Guide for Wholesale Buyers | VELORACE LACE",
  "Types of lace fabric explained for wholesale buyers — embroidered tulle, beaded, sequin, 3D floral, Chantilly, French, Guipure and more.",
  path,
);

const whatsappMessage = "Hello VELORACE LACE, I am comparing types of lace fabric for a wholesale project. I can send a reference image, preferred colors and approximate quantity. Please advise on development and sampling.";

const comparison = [
  ["Embroidered tulle lace", "Sheer, versatile, decorative", "Light–medium", "Bridal gowns, eveningwear, sleeves, overlays, hair bows"],
  ["Beaded lace", "Textured, luxurious, embellished", "Medium–heavy", "Bridal couture, gala gowns, evening dresses"],
  ["Sequin lace", "Reflective, shimmering", "Varies", "Evening gowns, prom dresses, bridalwear"],
  ["3D floral lace", "Sculptural, dimensional, romantic", "Medium–heavy", "Wedding gowns, couture, statement dresses, flower-girl dresses"],
  ["Chantilly lace", "Fine, sheer, delicate", "Very light", "Bridal overlays, veils, sleeves"],
  ["French lace", "Refined, elegant, classic", "Varies", "Bridalwear, eveningwear, elegant dresses"],
  ["Guipure lace", "Bold, graphic, structured", "Medium–heavy", "Fitted dresses, bodices, decorative panels"],
  ["Alençon lace", "Defined, refined, slightly raised", "Light–medium", "Bridal gowns, bodices, couture"],
  ["Raschel lace", "Flexible, consistent, versatile", "Light–medium", "Fashion, lingerie, dresses, trims"],
  ["Eyelash lace", "Soft scalloped edge, feathery", "Light", "Bridal hems, veils, lingerie, trims"],
  ["Cotton embroidery lace", "Soft, matte, breathable", "Light–medium", "Childrenswear, casual dresses, home textiles"],
] as const;

const laceTypes = [
  { name: "Embroidered Tulle Lace", definition: "Embroidery stitched onto a sheer tulle ground creates motifs that can range from subtle tonal flowers to colorful decorative patterns.", best: "Bridal gowns, eveningwear, sleeves, overlays and hair bows.", approach: "A core VELORACE LACE category. Custom multicolor embroidery is a focus: send artwork to review thread colors, motif scale, width, repeat, base and edge construction.", links: [["custom multicolor embroidered lace", "/custom-multicolor-embroidered-lace"], ["embroidery lace", "/embroidery-lace"]] },
  { name: "Beaded Lace", definition: "Beaded lace combines an embroidered or lace base with bead or pearl embellishment to add texture, light-catching detail and weight.", best: "Bridal couture, gala gowns and evening dresses.", approach: "Existing beaded patch designs and bridal appliqué development can be reviewed with optional bead decoration, subject to design approval.", links: [["beaded patches", "/beaded-patches"], ["bridal lace appliqué", "/bridal-lace-applique"]] },
  { name: "Sequin Lace", definition: "Sequin lace uses reflective sequins as decoration on lace, mesh or embroidered motifs, giving the surface a shimmering finish.", best: "Evening gowns, prom dresses and bridalwear.", approach: "Sequin decoration can be discussed for applicable appliqué designs; construction and sampling are reviewed for each request.", links: [["3D flower appliqué", "/3d-flower-applique"]] },
  { name: "3D Floral Lace", definition: "Layered, raised flower motifs create a dimensional surface that stands away from the base fabric.", best: "Wedding gowns, couture, statement dresses and flower-girl dresses.", approach: "An existing product line offers single motifs, coordinated sets and mirrored pairs, with embroidery, pearl, bead, sequin or crystal options. The published MOQ of 10 pieces applies to the 3D flower appliqué product, not every lace type.", links: [["3D flower appliqué", "/3d-flower-applique"]] },
  { name: "Chantilly Lace", definition: "Chantilly lace is recognized for its fine net ground, delicate floral patterning and light, airy appearance.", best: "Bridal overlays, veils and sleeves.", approach: "Available for custom development review from customer artwork or references; not represented as a ready-stock collection.", links: [["bridal lace", "/bridal-lace"]] },
  { name: "French Lace", definition: "French lace is a broad sourcing term often associated with refined decorative lace styles; it is not a single construction method.", best: "Bridalwear, eveningwear and elegant dresses.", approach: "Share the exact reference or artwork so construction, pattern and feasibility can be evaluated for custom development.", links: [["bridal lace", "/bridal-lace"]] },
  { name: "Guipure Lace", definition: "Guipure joins substantial motifs with connecting bars or stitches rather than a continuous net ground, creating a graphic, structured effect.", best: "Fitted dresses, bodices and decorative panels.", approach: "Custom development on request only. Factory feasibility must be confirmed before accepting an order.", links: [["contact the sourcing team", "/contact"]] },
  { name: "Alençon Lace", definition: "Alençon lace is known for defined motifs with a subtly raised outline, creating a refined decorative finish.", best: "Bridal gowns, bodices and couture.", approach: "Customer references can be reviewed for custom development and sampling; no ready-stock availability is implied.", links: [["bridal lace", "/bridal-lace"]] },
  { name: "Raschel Lace", definition: "Raschel lace is machine-knitted lace that can provide repeatable patterns, flexible constructions and varied surface effects.", best: "Fashion, lingerie, dresses and trims.", approach: "Send artwork and the intended application for a custom construction and factory feasibility review.", links: [["lace trim", "/lace-trim"]] },
  { name: "Eyelash Lace", definition: "Eyelash lace has fine fringe-like threads extending from its edge, giving hems and borders a feathery finish.", best: "Bridal hems, veils, lingerie and trims.", approach: "Explore the existing eyelash lace category and share a reference for the required edge and finish.", links: [["eyelash lace", "/eyelash-lace"]] },
  { name: "Cotton Embroidery Lace", definition: "Cotton embroidery lace refers to embroidered designs made with cotton-based materials, often valued for a softer, matte look; exact composition must be verified per design.", best: "Childrenswear, casual dresses and home textiles.", approach: "Custom development is reviewed from artwork or references; material composition is confirmed against the actual specification.", links: [["embroidery lace", "/embroidery-lace"]] },
  { name: "Lace Trim & Edgings", definition: "Lace trims and edgings are narrow decorative strips used to finish seams, borders, hair accessories and garments.", best: "Hair bows, childrenswear, fashion edges and accessories.", approach: "A core supply category. Buyers can discuss custom motifs and colors or start with a trial order by the yard before bulk.", links: [["lace trim", "/lace-trim"], ["lace trim by the yard trial", "/lace-trim-by-the-yard-trial"], ["hair bow lace", "/hair-bow-lace"]] },
  { name: "Lace Appliqués & Motifs", definition: "Lace appliqués are individual decorative motifs or coordinated pieces that can be positioned on garments and accessories.", best: "Bridal bodices, gowns, couture details and decorative accessories.", approach: "Existing 3D floral and bridal appliqué lines can be reviewed for individual motifs, matching sets and embellishment options.", links: [["3D flower appliqué", "/3d-flower-applique"], ["bridal lace appliqué wholesale", "/bridal-lace-applique"]] },
] as const;

const faqs = [
  ["What are the main types of lace fabric?", "Embroidered tulle, beaded, sequin, 3D floral, Chantilly, French, Guipure, Alençon, Raschel, eyelash and cotton embroidery lace."],
  ["What is the difference between Guipure lace and Chantilly lace?", "Guipure has connected motifs with no net ground, giving a bold, structured effect; Chantilly is fine, sheer and delicate."],
  ["Which lace is best for wedding dresses?", "Embroidered tulle and Chantilly for overlays and veils; 3D floral for statement gowns; beaded lace for couture."],
  ["What lace is best for children’s hair bows?", "Narrow custom multicolor embroidered lace trim on tulle, developed from your motif and colors."],
  ["Can I develop a custom lace type from my own design?", "Yes. Send a reference image or artwork with preferred colors and approximate quantity; we review construction and develop a sample for approval."],
  ["What is the minimum order for wholesale lace?", "Reviewed by design and process; trial orders by the yard are available."],
] as const;

export default function TypesOfLaceFabricPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
  };

  return <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
    <header className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-neutral-600">Wholesale buyer’s lace guide</p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Types of Lace Fabric — A Guide for Wholesale Buyers</h1>
      <p className="mt-6 text-lg leading-8 text-neutral-700">The main types of lace fabric used in bridalwear, eveningwear, childrenswear and fashion are embroidered tulle lace, beaded lace, sequin lace, 3D floral lace, Chantilly lace, French lace, Guipure lace, Alençon lace, Raschel lace, eyelash lace and cotton embroidery lace. This guide explains what each type looks like, what it is best for, and how VELORACE LACE develops it for wholesale buyers.</p>
      <div className="mt-7 flex flex-wrap gap-3"><Link className="rounded-full bg-black px-6 py-3 font-semibold text-white" href="/contact">Request samples &amp; quote</Link><WhatsAppLink className="rounded-full border border-neutral-300 px-6 py-3 font-semibold" message={whatsappMessage} productCategory="Lace Fabric Types" placement="types_of_lace_hero">Discuss on WhatsApp</WhatsAppLink></div>
    </header>

    <section className="mt-16" aria-labelledby="quick-comparison"><h2 id="quick-comparison" className="text-3xl font-semibold">Quick Comparison: Different Types of Lace</h2><p className="mt-3 text-neutral-700">Typical visual and weight characteristics vary with the actual construction and embellishment. Confirm the specification against a physical sample.</p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200"><table className="w-full min-w-[760px] border-collapse text-left text-sm"><thead className="bg-neutral-100"><tr>{["Lace Type","Look","Weight","Best For"].map(h=><th key={h} className="border-b border-neutral-200 p-4 font-semibold">{h}</th>)}</tr></thead><tbody>{comparison.map(([type,look,weight,best])=><tr key={type} className="border-b border-neutral-200 last:border-b-0"><th scope="row" className="p-4 font-semibold">{type}</th><td className="p-4">{look}</td><td className="p-4">{weight}</td><td className="p-4">{best}</td></tr>)}</tbody></table></div>
    </section>

    <section className="mt-16" aria-labelledby="lace-types"><h2 id="lace-types" className="text-3xl font-semibold">Different Kinds of Lace: Uses and Wholesale Development</h2><div className="mt-7 grid gap-6 md:grid-cols-2">{laceTypes.map((type,index)=><article key={type.name} id={type.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"")} className="rounded-2xl border border-neutral-200 p-6"><h3 className="text-2xl font-semibold">{index+1}. {type.name}</h3><p className="mt-4 leading-7 text-neutral-700">{type.definition}</p><p className="mt-4 leading-7"><strong>Best for:</strong> {type.best}</p><p className="mt-3 leading-7"><strong>VELORACE LACE approach:</strong> {type.approach}</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{type.links.map(([label,href])=><Link key={href+label} href={href} className="font-semibold underline underline-offset-4">{label}</Link>)}</div></article>)}</div></section>

    <section className="mt-16 rounded-2xl bg-neutral-100 p-7 md:p-10"><h2 className="text-3xl font-semibold">How to Choose the Right Lace Fabric</h2><h3 className="mt-7 text-xl font-semibold">Choose by application</h3><p className="mt-3 leading-7">For wedding dresses, compare embroidered tulle, Chantilly and 3D floral lace. For children’s hair bows and childrenswear, consider narrow colorful embroidered lace trim. For eveningwear, compare beaded and sequin lace. For fitted dresses that need a structured look, consider Guipure subject to development feasibility.</p><h3 className="mt-7 text-xl font-semibold">Choose by weight and appearance</h3><p className="mt-3 leading-7">For a light, transparent finish, consider Chantilly or embroidered tulle. For greater visual structure and dimension, review Guipure or 3D floral constructions. Weight and hand feel should be checked on a physical sample.</p><h3 className="mt-7 text-xl font-semibold">Custom development process</h3><ol className="mt-3 list-decimal space-y-2 pl-6 leading-7"><li>Send a reference image or artwork, preferred colors and approximate quantity.</li><li>Review the proposed construction and development approach.</li><li>Approve a physical sample.</li><li>Confirm the written specification and proceed to bulk production.</li></ol><p className="mt-5">Explore <Link className="font-semibold underline" href="/bridal-lace">bridal lace</Link> references or <Link className="font-semibold underline" href="/contact">contact us</Link> for sourcing review.</p></section>

    <section className="mt-16" aria-labelledby="lace-faq"><h2 id="lace-faq" className="text-3xl font-semibold">FAQ: Types of Lace Fabric</h2><div className="mt-6 space-y-4">{faqs.map(([question,answer],i)=><article key={question} className="rounded-xl border border-neutral-200 p-6"><h3 className="text-lg font-semibold">{question}</h3><p className="mt-2 leading-7 text-neutral-700">{answer}{i===3 ? <> See our <Link className="font-semibold underline" href="/hair-bow-lace">hair bow lace</Link> range.</> : i===5 ? <> See the <Link className="font-semibold underline" href="/lace-trim-by-the-yard-trial">lace trim by the yard trial</Link>.</> : null}</p></article>)}</div></section>
    <section className="mt-16 rounded-2xl bg-neutral-900 p-8 text-white md:p-12"><h2 className="text-3xl font-semibold">Ready to Develop Wholesale Lace?</h2><p className="mt-4 max-w-3xl leading-7">Share your reference, intended application, preferred colors and approximate quantity. We will review the appropriate lace construction and sampling route.</p><div className="mt-6 flex flex-wrap gap-3"><Link className="rounded-full bg-white px-6 py-3 font-semibold text-black" href="/contact">Request samples &amp; quote</Link><WhatsAppLink className="rounded-full border border-white px-6 py-3 font-semibold" message={whatsappMessage} productCategory="Lace Fabric Types" placement="types_of_lace_final">Discuss your design on WhatsApp</WhatsAppLink></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
  </main>;
}
