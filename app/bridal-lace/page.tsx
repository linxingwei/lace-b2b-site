import type { Metadata } from "next";
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
  return <CategoryPage category={category} />;
}
