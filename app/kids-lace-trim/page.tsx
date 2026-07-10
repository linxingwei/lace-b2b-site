import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
const category = categoryBySlug["kids-lace-trim"];
export const metadata: Metadata = { title: "Cute Kids Lace Trim Supplier China", description: category.description, alternates: { canonical: "/kids-lace-trim" } };
export default function Page() { return <CategoryPage category={category} />; }
