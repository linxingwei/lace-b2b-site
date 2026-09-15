import type { Metadata } from "next";
import Link from "next/link";

const base = "https://www.veloracelace.com";
const path = "/custom-multicolor-embroidered-lace";
const whatsapp = "https://wa.me/8615767956637?text=Hello%20VELORACE%20LACE%2C%20I%20need%20custom%20multicolor%20embroidered%20lace%20trim.%20I%20will%20send%20my%20reference%20image%2C%20colors%2C%20target%20width%2C%20quantity%20and%20application.%20Please%20advise%20the%20sample%20development%20route%20and%20MOQ.";

export const metadata: Metadata = {
  title: "Custom Multicolor Embroidered Lace Trim Supplier | VELORACE LACE",
  description: "Develop custom multicolor embroidered lace trim from your artwork or reference. Discuss thread colors, motifs, mesh base, width, repeat, samples and wholesale production.",
  alternates: { canonical: path },
  openGraph: {
    title: "Custom Multicolor Embroidered Lace Trim | VELORACE LACE",
    description: "Multicolor embroidery development for fashion trims, children's hair bows, seasonal collections and garment accessories.",
    url: path,
    type: "website",
  },
};

const faqs = [
  ["Can you develop lace with several thread colors in one design?", "Yes. Send the target color palette or reference image. The practical thread-color count, stitch plan and construction are reviewed during development before a physical sample is approved."],
  ["Can you make a custom embroidered motif from my picture or artwork?", "Send the artwork, reference photo or concept together with the intended application. We review motif scale, repeat, base material, edge construction and embroidery feasibility before sampling."],
  ["What information is useful for a multicolor lace quotation?", "Send the reference image, desired colors, finished width, estimated quantity, application and delivery country. If you have Pantone references or a physical swatch, include them for color discussion."],
  ["Can I approve a sample before bulk production?", "Yes. Sampling is the recommended step for custom multicolor designs because thread colors, motif scale, mesh, stitch density and repeat should be checked on a physical sample before bulk production."],
] as const;

export default function MulticolorEmbroideredLacePage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Custom Multicolor Embroidered Lace", item: `${base}${path}` },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];

  return <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className="mb-6 text-sm text-neutral-600"><Link href="/">Home</Link> / Custom Multicolor Embroidered Lace</nav>

    <section className="max-w-4xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider">Custom embroidery development · Guangzhou sourcing network</p>
      <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Custom Multicolor Embroidered Lace Trim</h1>
      <p className="mt-6 text-lg leading-8 text-neutral-700">Develop colorful embroidered lace and narrow lace trim around your own motif, seasonal palette and product application. VELORACE LACE supports buyers who need more than standard white or single-color lace: send a reference image and discuss thread colors, motif scale, mesh base, width, repeat spacing, edge construction and physical sampling.</p>
      <div className="mt-7 flex flex-wrap gap-3"><a className="rounded-full bg-black px-6 py-3 text-white" href={whatsapp}>Send a design for development</a><Link className="rounded-full border border-neutral-300 px-6 py-3" href="/embroidery-lace">Browse embroidery lace</Link></div>
    </section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">What can be customized?</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{[
      ["Multicolor thread palette", "Develop several coordinated embroidery colors in one motif. Send Pantone references, a swatch or a visual palette for review."],
      ["Motif & repeat", "Develop floral, bow, seasonal, school, faith, novelty or brand-specific directions from artwork and reference images."],
      ["Base & construction", "Discuss tulle or mesh base, trim width, scalloped edges, motif spacing and construction according to the final application."],
      ["Seasonal collections", "Build coordinated Christmas, Halloween, back-to-school, Valentine's and other seasonal embroidery directions."],
      ["Application fit", "Adjust scale and repeat for hair bows, childrenswear, dresses, fashion accessories and decorative garment trims."],
      ["Physical sampling", "Approve color balance, stitch definition, scale and hand feel on a physical sample before confirming bulk production."],
    ].map(([h,p]) => <article className="rounded-2xl border border-neutral-200 p-6" key={h}><h3 className="text-xl font-semibold">{h}</h3><p className="mt-3 leading-7 text-neutral-700">{p}</p></article>)}</div></section>

    <section className="mt-16 rounded-2xl bg-neutral-100 p-7 md:p-10"><h2 className="text-3xl font-semibold">From reference image to embroidered lace sample</h2><ol className="mt-6 grid gap-5 md:grid-cols-4"><li><strong>1. Send reference</strong><p className="mt-2 text-neutral-700">Artwork, product photo, color palette and intended use.</p></li><li><strong>2. Define construction</strong><p className="mt-2 text-neutral-700">Confirm target width, motif scale, repeat, base and color direction.</p></li><li><strong>3. Develop sample</strong><p className="mt-2 text-neutral-700">Review the practical embroidery construction and sample scope.</p></li><li><strong>4. Approve before bulk</strong><p className="mt-2 text-neutral-700">Check the physical sample before final production specifications are confirmed.</p></li></ol></section>

    <section className="mt-16 grid gap-8 md:grid-cols-2"><div><h2 className="text-3xl font-semibold">Especially suitable for colorful narrow trims</h2><p className="mt-4 leading-7 text-neutral-700">Our current development direction includes multicolor embroidered tulle trim for children's boutique hair bows and seasonal accessories. These concepts show how several thread colors, recognizable motifs and repeating narrow-trim layouts can be developed for a specific market.</p><Link className="mt-5 inline-block font-semibold underline" href="/hair-bow-lace">Explore the Hair Bow Lace Collection</Link></div><div><h2 className="text-3xl font-semibold">Also sourcing bridal embroidery?</h2><p className="mt-4 leading-7 text-neutral-700">For softer ivory and tonal embroidery used on wedding gowns, veils and bodices, use our dedicated bridal sourcing pages instead of mixing that intent with colorful fashion trim.</p><Link className="mt-5 inline-block font-semibold underline" href="/bridal-lace/embroidered-tulle">Fine Embroidered Tulle Bridal Lace</Link></div></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Custom multicolor embroidered lace FAQ</h2><div className="mt-6 divide-y">{faqs.map(([q,a]) => <div className="py-5" key={q}><h3 className="text-xl font-semibold">{q}</h3><p className="mt-2 leading-7 text-neutral-700">{a}</p></div>)}</div></section>

    <section className="mt-16 rounded-2xl bg-black p-8 text-white md:p-10"><p className="text-sm font-semibold uppercase tracking-wider">Start with your design</p><h2 className="mt-3 text-3xl font-semibold">Need several colors in one embroidered lace trim?</h2><p className="mt-4 max-w-3xl leading-7 text-neutral-200">Send the reference, target colors, width, quantity, application and destination. We will use those details to discuss the appropriate development and sampling route without inventing unconfirmed production specifications.</p><a className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black" href={whatsapp}>Send reference on WhatsApp</a></section>
  </main>;
}
