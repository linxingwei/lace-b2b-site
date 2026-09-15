import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const base = "https://www.veloracelace.com";
const path = "/bridal-lace/embroidered-tulle";
const whatsapp = "https://wa.me/8615767956637?text=Hello%20VELORACE%20LACE%2C%20I%20am%20interested%20in%20Fine%20Embroidered%20Tulle%20Bridal%20Lace.%20Please%20confirm%20available%20designs%2C%20MOQ%2C%20sample%20options%2C%20width%20and%20shipping%20to%20my%20country.";

export const metadata: Metadata = {
  title: "Fine Embroidered Tulle Bridal Lace Supplier | VELORACE LACE",
  description: "Source fine embroidered tulle bridal lace for wedding gowns, veils, sleeves and bodices. Review real fabric details and request MOQ, samples, custom color and shipping.",
  alternates: { canonical: path },
  openGraph: {
    title: "Fine Embroidered Tulle Bridal Lace | VELORACE LACE",
    description: "Fine floral embroidered tulle for wedding gowns and bridal collections. Request samples, specifications and a wholesale quote.",
    url: path,
    type: "website",
    images: [{ url: "/products/fine-embroidered-tulle/off-shoulder-wedding-gown.png", width: 550, height: 740, alt: "Fine embroidered tulle bridal lace used on an off shoulder wedding gown" }],
  },
};

const gallery = [
  ["/products/fine-embroidered-tulle/off-shoulder-wedding-gown.png", "Fine embroidered tulle bridal lace on an off shoulder wedding gown"],
  ["/products/fine-embroidered-tulle/full-fabric-panel.png", "Full panel of ivory floral embroidered tulle bridal lace fabric"],
  ["/products/fine-embroidered-tulle/floral-border-layout.png", "Floral embroidered tulle bridal lace border layout"],
  ["/products/fine-embroidered-tulle/floral-embroidery-detail.png", "Close up of fine floral embroidery on bridal tulle"],
  ["/products/fine-embroidered-tulle/sheer-tulle-hand-detail.png", "Sheer soft bridal tulle with fine floral embroidery detail"],
  ["/products/fine-embroidered-tulle/draped-scalloped-border.png", "Draped scalloped embroidered bridal lace border"],
  ["/products/fine-embroidered-tulle/botanical-border-detail.png", "Botanical embroidered tulle lace border for wedding dresses"],
  ["/products/fine-embroidered-tulle/v-neck-wedding-gown.png", "Fine embroidered tulle lace application on a V neck wedding gown"],
] as const;

const faqs = [
  ["What is fine embroidered tulle bridal lace used for?", "It is commonly developed for wedding gown overlays, bodices, sleeves, veils, skirts and other areas where a sheer base and refined embroidery are required."],
  ["Can I request a physical sample before bulk production?", "Yes. Send your reference, required application and destination. We can confirm the suitable sample route before bulk production."],
  ["Can the embroidery color or motif be customized?", "Custom color and motif development can be discussed from your reference artwork or garment concept. MOQ and development requirements depend on the construction."],
  ["What information should I send for a quote?", "Send the target use, required quantity, preferred color, width or size requirement, reference images and delivery country. We will confirm the relevant specifications, MOQ and sampling steps."],
] as const;

export default function EmbroideredTullePage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Bridal Lace", item: `${base}/bridal-lace` },
      { "@type": "ListItem", position: 3, name: "Fine Embroidered Tulle Bridal Lace", item: `${base}${path}` },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ];

  return <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className="mb-6 text-sm text-neutral-600"><Link href="/">Home</Link> / <Link href="/bridal-lace">Bridal Lace</Link> / Embroidered Tulle</nav>
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider">Bridal lace sourcing</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Fine Embroidered Tulle Bridal Lace</h1>
        <p className="mt-5 text-lg leading-8 text-neutral-700">Source fine floral embroidered tulle for wedding gowns, veils, bodices, sleeves and couture bridal collections. Review real fabric and application views, then send your target quantity, color and destination for sampling and quotation.</p>
        <div className="mt-7 flex flex-wrap gap-3"><a className="rounded-full bg-black px-6 py-3 text-white" href={whatsapp}>Request sample & quote</a><Link className="rounded-full border border-neutral-300 px-6 py-3" href="/bridal-lace">Browse all bridal lace</Link></div>
      </div>
      <Image className="h-auto w-full rounded-2xl object-cover" src={gallery[0][0]} alt={gallery[0][1]} width={550} height={740} priority sizes="(max-width: 768px) 100vw, 50vw" />
    </section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Fabric and wedding gown views</h2><p className="mt-3 max-w-3xl text-neutral-700">Compare the embroidery density, border construction, transparency and finished-garment effect before requesting a physical sample.</p><div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">{gallery.slice(1).map(([src, alt]) => <figure key={src}><Image className="aspect-[4/5] w-full rounded-xl object-cover" src={src} alt={alt} width={700} height={875} loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" /><figcaption className="mt-2 text-sm text-neutral-600">{alt}</figcaption></figure>)}</div></section>

    <section className="mt-16 grid gap-8 md:grid-cols-2"><div><h2 className="text-3xl font-semibold">Best applications</h2><ul className="mt-5 space-y-3 text-neutral-700"><li>Wedding gown overlays and skirts</li><li>Sheer bridal bodices and sleeves</li><li>Veils and soft transparent panels</li><li>Hem, train and scalloped border placements</li></ul></div><div><h2 className="text-3xl font-semibold">Confirm before ordering</h2><ul className="mt-5 space-y-3 text-neutral-700"><li>Base tulle hand feel and transparency</li><li>Embroidery motif, density and border direction</li><li>Required width, quantity and color</li><li>MOQ, sample route, lead time and shipping destination</li></ul></div></section>

    <section className="mt-16 rounded-2xl bg-neutral-100 p-7 md:p-10"><h2 className="text-3xl font-semibold">Custom embroidered tulle development</h2><p className="mt-4 max-w-4xl leading-7 text-neutral-700">Have a wedding gown reference, artwork or existing lace sample? Send clear images with the target garment placement. We can discuss motif scale, embroidery direction, base tulle, color matching and sampling before production. For dimensional floral focal points, also review our <Link className="underline" href="/3d-flower-applique">3D flower lace applique</Link> options.</p><a className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white" href={whatsapp}>Send your reference on WhatsApp</a></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Fine embroidered tulle bridal lace FAQ</h2><div className="mt-6 divide-y">{faqs.map(([q,a]) => <div className="py-5" key={q}><h3 className="text-xl font-semibold">{q}</h3><p className="mt-2 leading-7 text-neutral-700">{a}</p></div>)}</div></section>
  </main>;
}
