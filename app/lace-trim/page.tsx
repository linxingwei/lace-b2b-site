import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
import { categoryMetadata } from "@/lib/seo";
import Link from "next/link";

const category = categoryBySlug["lace-trim"];
export const metadata = categoryMetadata(category);

const sourcing = [
  ["Application", "Tell us where the trim will be used: fashion, childrenswear, hair accessories, bridal or another finished product."],
  ["Width & repeat", "Share the target finished width and repeat when known. If they are not fixed yet, send the backing material or product reference."],
  ["Color & construction", "Specify thread colors, mesh or other base direction, edge style and any motif or decorative requirements."],
  ["Sample & quantity", "Share the approximate order quantity, destination and whether you need a physical sample before bulk production."],
] as const;

export default function Page() {
  return <>
    <CategoryPage category={category} />

    <section className="mx-auto max-w-6xl px-5 pb-10">
      <div className="rounded-2xl bg-neutral-100 p-7 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider">B2B lace trim sourcing</p>
        <h2 className="mt-3 text-3xl font-semibold">Source lace trim around the finished product</h2>
        <p className="mt-4 max-w-4xl leading-7 text-neutral-700">For custom or repeat lace trim sourcing, start with the application, required width, color direction and approximate quantity. VELORACE LACE reviews the practical construction and sample route before bulk specifications are confirmed.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {sourcing.map(([title, body]) => <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-700">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-10 md:grid-cols-2">
      <article className="rounded-2xl border border-neutral-200 p-7">
        <p className="text-sm font-semibold uppercase tracking-wider">Custom multicolor</p>
        <h2 className="mt-3 text-2xl font-semibold">Need several thread colors in one lace trim?</h2>
        <p className="mt-4 leading-7 text-neutral-700">For colorful motifs, novelty trims and collection-specific palettes, send artwork or a reference image. Thread colors, motif scale, repeat, width, base and edge construction can be reviewed through the custom development process.</p>
        <Link className="mt-5 inline-block font-semibold underline" href="/custom-multicolor-embroidered-lace">Custom Multicolor Embroidered Lace</Link>
      </article>
      <article className="rounded-2xl border border-neutral-200 p-7">
        <p className="text-sm font-semibold uppercase tracking-wider">Prepare your RFQ</p>
        <h2 className="mt-3 text-2xl font-semibold">What to send for lace trim pricing</h2>
        <p className="mt-4 leading-7 text-neutral-700">Send a product or lace reference, preferred colors, target width, approximate quantity, intended application, sample requirement and destination country. Unknown technical details can be reviewed after the reference is checked.</p>
        <Link className="mt-5 inline-block font-semibold underline" href="/contact">Request a lace trim sample / quote</Link>
      </article>
    </section>

    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div className="rounded-2xl border border-neutral-200 p-7 md:p-10">
        <h2 className="text-3xl font-semibold">Continue your lace sourcing</h2>
        <p className="mt-4 max-w-4xl leading-7 text-neutral-700">Move between the main lace categories according to construction and end use rather than creating duplicate specifications across multiple inquiries.</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          <Link className="font-semibold underline" href="/embroidery-lace">Embroidered Lace</Link>
          <Link className="font-semibold underline" href="/custom-multicolor-embroidered-lace">Custom Multicolor Lace</Link>
          <Link className="font-semibold underline" href="/bridal-lace">Bridal Lace</Link>
          <Link className="font-semibold underline" href="/hair-bow-lace">Hair Bow Lace</Link>
          <Link className="font-semibold underline" href="/contact">Send an RFQ</Link>
        </div>
      </div>
    </section>
  </>;
}
