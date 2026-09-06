import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";

const category = categoryBySlug["bridal-lace"];

export const metadata: Metadata = {
  title: "Wholesale Bridal Lace Supplier China | Wedding Dress Lace",
  description:
    "Source bridal lace, embroidered lace, 3D appliques and beaded lace for wedding gowns and veils. Custom colors, sampling and wholesale supply from China.",
  alternates: { canonical: "/bridal-lace" },
  openGraph: {
    title: "Wholesale Bridal Lace Supplier China | VELORACE LACE",
    description:
      "Bridal lace and custom embroidery for wedding gowns, cathedral veils and couture bridalwear. Send your reference for MOQ, sampling and wholesale pricing.",
    url: "/bridal-lace",
    type: "website",
  },
};

export default function Page() {
  return <CategoryPage category={category} />;
}
