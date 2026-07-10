import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
const category = categoryBySlug["3d-flower-applique"];
export const metadata: Metadata = { title: "3D Flower Lace Applique Manufacturer", description: category.description, alternates: { canonical: "/3d-flower-applique" } };
export default function Page() { return <CategoryPage category={category} />; }
