import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
const category = categoryBySlug["eyelash-lace"];
export const metadata: Metadata = { title: "Eyelash Lace Trim Wholesale Supplier", description: category.description, alternates: { canonical: "/eyelash-lace" } };
export default function Page() { return <CategoryPage category={category} />; }
