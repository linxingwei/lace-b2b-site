import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
import { categoryMetadata } from "@/lib/seo";
import Link from "next/link";

const category = categoryBySlug["embroidery-lace"];
export const metadata = categoryMetadata(category);

export default function Page() {
  return <>
    <CategoryPage category={category} />
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div className="rounded-2xl border border-neutral-200 p-7 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider">Multicolor embroidery development</p>
        <h2 className="mt-3 text-3xl font-semibold">Need several thread colors in one custom lace design?</h2>
        <p className="mt-4 max-w-3xl leading-7 text-neutral-700">For colorful embroidery programs, use our dedicated development page to prepare the reference image, thread-color direction, motif scale, finished width, repeat, mesh base, application and physical sample requirements before quotation.</p>
        <Link className="mt-6 inline-block font-semibold underline" href="/custom-multicolor-embroidered-lace">Custom Multicolor Embroidered Lace Trim</Link>
      </div>
    </section>
  </>;
}
