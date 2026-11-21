import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
import { categoryMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";

const category = categoryBySlug["embroidery-lace"];
export const metadata = categoryMetadata(category);

const steps = [
  ["1. Reference", "Send artwork, a product photo or a lace reference together with the intended application."],
  ["2. Construction", "Discuss base fabric, thread colors, motif scale, finished width, repeat and edge direction."],
  ["3. Sample", "Review a physical development sample for stitch definition, color balance, scale and hand feel."],
  ["4. Bulk", "After sample approval, confirm the written specification, quantity, lead time and bulk production terms."],
] as const;

export default function Page() {
  return <>
    <CategoryPage category={category} />
    <section className="mx-auto max-w-6xl px-5 pb-10">
      <div className="rounded-2xl bg-neutral-100 p-7 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider">B2B custom development</p>
        <h2 className="mt-3 text-3xl font-semibold">From embroidery reference to approved lace sample</h2>
        <p className="mt-4 max-w-4xl leading-7 text-neutral-700">Start with the garment or accessory you want to make. Send us a lace photo or artwork. We will review the embroidery, colors, base fabric, width and pattern repeat. We then discuss sampling before confirming bulk order terms.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {steps.map(([title, body]) => <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-700">{body}</p></article>)}
        </div>
      </div>
    </section>


    <section className="mx-auto max-w-6xl px-5 pb-10">
      <div className="mb-6 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider">Real product references</p>
        <h2 className="mt-3 text-3xl font-semibold">Review embroidery direction before confirming specifications</h2>
        <p className="mt-3"><a className="underline" href="/products/butterfly-floral-embroidered-trim">View Butterfly Floral Embroidered Trim product reference</a></p>
        <p className="mt-4 leading-7 text-neutral-700">Compare <a href="/custom-multicolor-embroidered-lace" className="underline">custom multicolor embroidered lace trim</a> with the Multicolor Butterfly reference. The photos show designs in our product library. Use them to discuss colors, motifs and applications. We confirm base composition, finished width, repeat, price, MOQ and lead time only after reviewing your selected design and project needs.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["/products/embroidered-lace/embroidered-lace-butterfly.webp", "Multicolor Butterfly Embroidery", "A multicolor motif reference for buyers developing colorful fashion trims, childrenswear or accessory applications."],
          ["/products/embroidered-lace/embroidered-lace-gold-floral.webp", "Gold Floral Embroidery", "A metallic-look floral direction for decorative fashion, occasionwear and statement trim development."],
          ["/products/embroidered-lace/embroidered-lace-aqua-floral.webp", "Aqua Floral Embroidery", "A colored floral embroidery reference for collection-specific palettes and custom lace development."],
          ["/products/embroidered-lace/embroidered-lace-blush-floral.webp", "Blush Floral Embroidery", "A soft blush floral direction for feminine fashion, occasionwear and coordinated collection development."],
          ["/products/embroidered-lace/embroidered-lace-forest-floral.webp", "Forest Floral Embroidery", "A deeper multicolor floral reference for fashion trims and projects that need stronger contrast."],
          ["/products/embroidered-lace/embroidered-lace-scallop.webp", "Scalloped Embroidered Lace", "An edge-focused embroidery reference for buyers reviewing scallop direction, border treatment and finished application."],
        ].map(([src, title, text]) => <article key={src} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <Image src={src} alt={`${title.toLowerCase()} lace product reference for B2B sourcing`} width={900} height={900} sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-700">{text}</p><p className="mt-3 text-xs leading-5 text-neutral-500">Confirm base, width, repeat, colors, quantity and sample requirements for your project.</p></div>
        </article>)}
      </div>
    </section>

    <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-10 md:grid-cols-2">
      <article className="rounded-2xl border border-neutral-200 p-7">
        <p className="text-sm font-semibold uppercase tracking-wider">Prepare your RFQ</p>
        <h2 className="mt-3 text-2xl font-semibold">What to send for a useful quotation</h2>
        <p className="mt-4 leading-7 text-neutral-700">Send an image or artwork. Include your preferred colors, approximate finished width, intended use, estimated quantity, sample needs and destination country. Not sure about the repeat, base fabric or edge? We can review those during development.</p>
        <Link className="mt-5 inline-block font-semibold underline" href="/contact">Send your embroidery lace inquiry</Link>
      </article>
      <article className="rounded-2xl border border-neutral-200 p-7">
        <p className="text-sm font-semibold uppercase tracking-wider">Multicolor specialist</p>
        <h2 className="mt-3 text-2xl font-semibold">Need several thread colors in one lace design?</h2>
        <p className="mt-4 leading-7 text-neutral-700">For colorful motifs, seasonal palettes and narrow trims, start with our multicolor development page. Share the thread colors, motif size, width, repeat and mesh base you need. We can review these details against a physical sample.</p>
        <Link className="mt-5 inline-block font-semibold underline" href="/custom-multicolor-embroidered-lace">Custom Multicolor Embroidered Lace Trim</Link>
      </article>
    </section>

    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div className="rounded-2xl border border-neutral-200 p-7 md:p-10">
        <h2 className="text-3xl font-semibold">Continue your lace sourcing</h2>
        <p className="mt-4 max-w-4xl leading-7 text-neutral-700">Compare embroidered lace with narrow lace trim, or move directly into a custom multicolor program when color and motif are central to the collection.</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          <Link className="font-semibold underline" href="/lace-trim">Lace Trim Supplier</Link>
          <Link className="font-semibold underline" href="/custom-multicolor-embroidered-lace">Custom Multicolor Lace</Link>
          <Link className="font-semibold underline" href="/bridal-lace">Bridal Lace</Link>
          <Link className="font-semibold underline" href="/beaded-patches">Beaded Patches with Rope — Gulf Gifts &amp; Accessories</Link>
          <Link className="font-semibold underline" href="/types-of-lace-fabric">Types of Lace Fabric Guide</Link>
          <Link className="font-semibold underline" href="/contact">Request a Sample / Quote</Link>
        </div>
      </div>
    </section>
  </>;
}
