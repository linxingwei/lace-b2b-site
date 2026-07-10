import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
const category = categoryBySlug["bridal-lace"];
export const metadata: Metadata = { title: "Bridal Lace Fabric Supplier for Wedding Dress Designers", description: category.description, alternates: { canonical: "/bridal-lace" } };
export default function Page() { return <CategoryPage category={category} />; }
