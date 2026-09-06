import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";

const category = categoryBySlug["bridal-lace"];

export const metadata: Metadata = {
  title: { absolute: "Bridal Lace Supplier & Wedding Dress Lace | VELORACE" },
  description:
    "Compare beaded bridal lace, 3D floral lace, embroidered tulle and large floral lace appliques. Request product-specific MOQ, samples and wedding dress lace quotes.",
  alternates: { canonical: "/bridal-lace" },
  openGraph: {
    title: "Wholesale Bridal Lace Supplier China | VELORACE LACE",
    description:
      "Five bridal lace sourcing options with confirmed specifications: beaded lace, 3D floral lace, fine tulle and large appliques. Request MOQ, sample and shipping details.",
    url: "/bridal-lace",
    type: "website",
    images: [{ url: "/products/bridal-lace/large-beaded-leaf-applique-bodice.webp", alt: "Embroidered botanical bridal lace applique on a mannequin bodice" }],
  },
};

export default function Page() {
  return <CategoryPage category={category} />;
}
