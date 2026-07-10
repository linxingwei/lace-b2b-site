import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
const category = categoryBySlug["lace-trim"];
export const metadata: Metadata = { title: "Wholesale Lace Trim Manufacturer in China", description: category.description, alternates: { canonical: "/lace-trim" } };
export default function Page() { return <CategoryPage category={category} />; }
