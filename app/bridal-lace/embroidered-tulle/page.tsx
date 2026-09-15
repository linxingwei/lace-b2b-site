import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const base = "https://www.veloracelace.com";
const path = "/bridal-lace/embroidered-tulle";
const whatsapp = "https://wa.me/8615767956637?text=Hello%20VELORACE%20LACE%2C%20I%20am%20interested%20in%20Fine%20Embroidered%20Tulle%20Bridal%20Lace.%20Please%20confirm%20available%20designs%2C%20MOQ%2C%20sample%20options%2C%20width%20and%20shipping%20to%20my%20country.";

export const metadata: Metadata = {
  title: "Embroidered Tulle Bridal Lace Supplier | Wedding Dress Lace",
  description: "Source fine embroidered tulle bridal lace for wedding gowns, veils, bodices and sleeves. Review fabric details and request MOQ, samples, custom colors and worldwide shipping.",
  keywords: ["embroidered tulle bridal lace", "wedding dress lace fabric", "fine embroidered tulle lace", "ivory bridal lace", "bridal lace supplier", "wedding gown lace supplier"],
  alternates: { canonical: path },
  openGraph: {
    title: "Embroidered Tulle Bridal Lace Supplier | VELORACE LACE",
    description: "Fine floral embroidered tulle for wedding gowns, veils and bridal collections. Request a physical sample, specifications and wholesale quotation.",
    url: path,
    type: "website",
    images: [{ url: "/products/fine-embroidered-tulle/off-shoulder-wedding-gown.png", width: 550, height: 740, alt: "Fine embroidered tulle bridal lace used on an off shoulder wedding gown" }],
  },
};

const gallery = [
  ["/products/fine-embroidered-tulle/off-shoulder-wedding-gown.png", "Fine embroidered tulle bridal lace on an off shoulder wedding gown"],
  ["/products/fine-embroidered-tulle/full-fabric-panel.png", "Full panel of ivory floral embroidered tulle bridal lace fabric"],
  ["/products/fine-embroidered-tulle/floral-border-layout.png", "Floral embroidered tulle bridal lace border layout for wedding dress production"],
  ["/products/fine-embroidered-tulle/floral-embroidery-detail.png", "Close up of fine floral embroidery on sheer bridal tulle"],
  ["/products/fine-embroidered-tulle/sheer-tulle-hand-detail.png", "Sheer soft bridal tulle with fine floral embroidery detail"],
  ["/products/fine-embroidered-tulle/draped-scalloped-border.png", "Draped scalloped embroidered bridal lace border for gown and veil applications"],
  ["/products/fine-embroidered-tulle/botanical-border-detail.png", "Botanical embroidered tulle lace border for wedding dresses"],
  ["/products/fine-embroidered-tulle/v-neck-wedding-gown.png", "Fine embroidered tulle wedding dress lace application on a V neck bridal gown"],
] as const;

const faqs = [
  ["What is embroidered tulle bridal lace?", "Embroidered tulle bridal lace combines a sheer tulle or mesh foundation with stitched floral or decorative motifs. It is selected when bridal designers need transparency, controlled embroidery density and a lighter visual effect than heavily embellished lace."],
  ["What is fine embroidered tulle bridal lace used for?", "It is commonly developed for wedding gown overlays, bodices, sleeves, veils, skirts, trains and border placements where a sheer base and refined embroidery are required."],
  ["Can I request a physical sample before bulk production?", "Yes. Send your reference, required application, approximate quantity and destination. We can confirm the suitable sample route before bulk production."],
  ["Can the embroidery color or motif be customized?", "Custom ivory tones, thread colors, motif scale and motif development can be discussed from your reference artwork or garment concept. MOQ and development requirements depend on the construction."],
  ["What information should I send for a bridal lace quote?", "Send the target garment use, required quantity, preferred color, width or size requirement, reference images and delivery country. We will confirm the relevant specifications, MOQ and sampling steps."],
  ["Do you ship embroidered bridal lace internationally?", "Yes. International shipping can be coordinated after the product construction, quantity and destination are confirmed. Buyers in the United States, UAE, Saudi Arabia, Kuwait, Qatar, Europe, Canada and Australia can request shipping options with their quotation."],
] as const;

export default function EmbroideredTullePage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Bridal Lace", item: `${base}/bridal-lace` },
      { "@type": "ListItem", position: 3, name: "Embroidered Tulle Bridal Lace", item: `${base}${path}` },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    { "@context": "https://schema.org", "@type": "Service", name: "Embroidered Tulle Bridal Lace Sourcing and Custom Development", serviceType: "Wholesale bridal lace sourcing and custom embroidered tulle development", provider: { "@type": "Organization", name: "VELORACE LACE", url: base }, areaServed: "Worldwide", url: `${base}${path}`, description: "Wholesale sourcing, sampling and custom development support for fine embroidered tulle bridal lace used in wedding gowns, veils, bodices and sleeves." },
  ];

  return <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className="mb-6 text-sm text-neutral-600"><Link href="/">Home</Link> / <Link href="/bridal-lace">Bridal Lace</Link> / Embroidered Tulle</nav>
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider">Wedding dress lace fabric · wholesale sourcing</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Embroidered Tulle Bridal Lace for Wedding Dresses</h1>
        <p className="mt-5 text-lg leading-8 text-neutral-700">Source fine floral embroidered tulle lace for wedding gowns, veils, bodices, sleeves and couture bridal collections. Compare the sheer base, embroidery density and border construction, then request a physical sample and wholesale quotation for your bridal project.</p>
        <div className="mt-7 flex flex-wrap gap-3"><a className="rounded-full bg-black px-6 py-3 text-white" href={whatsapp}>Request sample & quote</a><Link className="rounded-full border border-neutral-300 px-6 py-3" href="/bridal-lace">Browse all bridal lace</Link></div>
      </div>
      <Image className="h-auto w-full rounded-2xl object-cover" src={gallery[0][0]} alt={gallery[0][1]} width={550} height={740} priority sizes="(max-width: 768px) 100vw, 50vw" />
    </section>

    <section className="mt-14 rounded-2xl border border-neutral-200 p-7"><h2 className="text-2xl font-semibold">Quick sourcing answer</h2><p className="mt-3 max-w-4xl leading-7 text-neutral-700">Embroidered tulle bridal lace is a strong choice when a wedding dress needs a transparent mesh foundation with visible floral embroidery but less bulk than heavily beaded or dimensional lace. For sourcing, confirm the tulle hand feel, usable width, motif repeat, border direction, embroidery density, color, quantity and final garment placement on a physical sample before bulk production.</p></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Embroidered tulle lace fabric and wedding gown views</h2><p className="mt-3 max-w-3xl text-neutral-700">Compare embroidery density, scalloped border construction, transparency, motif distribution and the finished wedding-gown effect before requesting a physical sample.</p><div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">{gallery.slice(1).map(([src, alt]) => <figure key={src}><Image className="aspect-[4/5] w-full rounded-xl object-cover" src={src} alt={alt} width={700} height={875} loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" /><figcaption className="mt-2 text-sm text-neutral-600">{alt}</figcaption></figure>)}</div></section>

    <section className="mt-16 grid gap-8 md:grid-cols-2"><div><h2 className="text-3xl font-semibold">Best bridal applications</h2><ul className="mt-5 space-y-3 text-neutral-700"><li>Wedding gown overlays and skirts</li><li>Sheer bridal bodices and fitted sleeves</li><li>Wedding veils and transparent panels</li><li>Hem, train and scalloped border placements</li><li>Couture bridal and eveningwear development</li></ul></div><div><h2 className="text-3xl font-semibold">Specifications to confirm</h2><ul className="mt-5 space-y-3 text-neutral-700"><li>Base tulle hand feel and transparency</li><li>Embroidery motif, density and repeat</li><li>Usable fabric width and border direction</li><li>Ivory, white, nude or custom color requirement</li><li>Quantity, MOQ, sample route and destination</li></ul></div></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Choose the right bridal lace construction</h2><p className="mt-4 max-w-4xl leading-7 text-neutral-700">Fine embroidered tulle works well when softness and transparency matter. If your design needs raised petals and stronger dimensional focal points, compare our <Link className="underline" href="/3d-flower-applique">3D flower lace applique</Link>. For a broader sourcing overview, review the <Link className="underline" href="/bridal-lace">bridal lace fabric collection</Link>. If you are deciding where motifs should cross seams, necklines or the train, use our <Link className="underline" href="/blog/lace-applique-placement-wedding-dress">wedding dress lace applique placement guide</Link> and <Link className="underline" href="/blog/3d-lace-applique-vs-flat-embroidered-applique">3D vs flat embroidered applique comparison</Link>.</p></section>

    <section className="mt-16 rounded-2xl bg-neutral-100 p-7 md:p-10"><h2 className="text-3xl font-semibold">Custom embroidered tulle development</h2><p className="mt-4 max-w-4xl leading-7 text-neutral-700">Have a wedding gown reference, artwork or existing lace sample? Send clear images with the target garment placement. VELORACE LACE can coordinate motif scale, embroidery direction, base tulle, color matching and sample development through our Guangzhou sourcing network. Final specifications, MOQ, price and production timing are confirmed only after the actual construction and quantity are reviewed.</p><a className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white" href={whatsapp}>Send your reference on WhatsApp</a></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">For international bridal brands and dressmakers</h2><p className="mt-4 max-w-4xl leading-7 text-neutral-700">We support bridal designers, wedding dress manufacturers, couture studios and textile buyers sourcing from China. For an efficient quotation, include your destination country or ZIP/postal code, estimated yards or meters, target color, garment application and reference image. Shipping options are reviewed with the actual order rather than estimated from a generic rate.</p></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Embroidered tulle bridal lace FAQ</h2><div className="mt-6 divide-y">{faqs.map(([q,a]) => <div className="py-5" key={q}><h3 className="text-xl font-semibold">{q}</h3><p className="mt-2 leading-7 text-neutral-700">{a}</p></div>)}</div></section>

    <section className="mt-16 rounded-2xl border border-neutral-200 p-7 md:p-10"><p className="text-sm font-semibold uppercase tracking-wider">Wholesale inquiry</p><h2 className="mt-2 text-3xl font-semibold">Send your wedding dress reference for a sourcing review</h2><p className="mt-4 max-w-3xl leading-7 text-neutral-700">Include the lace image, intended gown or veil placement, required quantity, preferred color and delivery country. We will confirm the next sample and quotation steps.</p><a className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white" href={whatsapp}>Ask about embroidered tulle bridal lace</a></section>
  </main>;
}
