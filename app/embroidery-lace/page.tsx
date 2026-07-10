import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
const category = categoryBySlug["embroidery-lace"];
export const metadata: Metadata = { title: "Embroidery Lace Supplier & Manufacturer China", description: category.description, alternates: { canonical: "/embroidery-lace" } };
export default function Page() { return <CategoryPage category={category} />; }
