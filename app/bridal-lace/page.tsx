import type { Metadata } from "next";
import Link from "next/link";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";

const category = categoryBySlug["bridal-lace"];

export const metadata: Metadata = {
  title: "Bridal Lace Fabric | Embroidered Tulle & Beaded Lace",
  description:
    "Explore embroidered tulle bridal lace with gown and fabric photos. Compare 3D floral and beaded styles; ask VELORACE LACE about MOQ, samples and shipping.",
  alternates: { canonical: "/bridal-lace" },
  openGraph: {
    title: "Bridal Lace Fabric | VELORACE LACE",
    description:
      "Explore fine embroidered tulle, 3D floral and beaded bridal lace. View fabric and gown photos and request specifications, samples and a quote.",
    url: "/bridal-lace",
    type: "website",
    images: [{ url: "/products/fine-embroidered-tulle/off-shoulder-wedding-gown.png", width: 550, height: 740, alt: "Floral embroidered tulle lace wedding gown application" }],
  },
};

export default function Page() {
  return <>
    <CategoryPage category={category} />
    <section className="mx-auto max-w-6xl px-5 pb-14">
      <div className="rounded-2xl border border-neutral-200 p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider">Featured bridal material</p>
        <h2 className="mt-2 text-2xl font-semibold">Fine Embroidered Tulle Bridal Lace</h2>
        <p className="mt-3 max-w-3xl text-neutral-700">Compare real fabric panels, embroidery details, scalloped borders and wedding gown applications before requesting a physical sample.</p>
        <Link className="mt-5 inline-block font-semibold underline" href="/bridal-lace/embroidered-tulle">View fine embroidered tulle bridal lace</Link>
      </div>
    </section>
  </>;
}
