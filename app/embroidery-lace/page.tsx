import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
import { categoryMetadata } from "@/lib/seo";
import Link from "next/link";

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
        <p className="mt-4 max-w-4xl leading-7 text-neutral-700">For custom embroidered lace sourcing, start with the final application rather than an assumed specification. We use your reference to discuss the embroidery construction, colors, base, width and repeat, then confirm the practical sampling route before bulk terms are finalized.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {steps.map(([title, body]) => <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-700">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-10 md:grid-cols-2">
      <article className="rounded-2xl border border-neutral-200 p-7">
        <p className="text-sm font-semibold uppercase tracking-wider">Prepare your RFQ</p>
        <h2 className="mt-3 text-2xl font-semibold">What to send for a useful quotation</h2>
        <p className="mt-4 leading-7 text-neutral-700">Send a reference image or artwork, preferred colors, approximate finished width, intended application, estimated quantity, sample requirement and destination country. If repeat size, base fabric or edge construction is not yet decided, those points can be reviewed during development.</p>
        <Link className="mt-5 inline-block font-semibold underline" href="/contact">Send your embroidery lace inquiry</Link>
      </article>
      <article className="rounded-2xl border border-neutral-200 p-7">
        <p className="text-sm font-semibold uppercase tracking-wider">Multicolor specialist</p>
        <h2 className="mt-3 text-2xl font-semibold">Need several thread colors in one lace design?</h2>
        <p className="mt-4 leading-7 text-neutral-700">Use the dedicated multicolor development page for colorful motifs, seasonal palettes and narrow trims. Prepare the thread-color direction, motif scale, width, repeat, mesh base and physical sample requirements around the final product.</p>
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
          <Link className="font-semibold underline" href="/contact">Request a Sample / Quote</Link>
        </div>
      </div>
    </section>
  </>;
}
