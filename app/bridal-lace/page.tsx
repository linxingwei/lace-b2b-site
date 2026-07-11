import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
import { categoryMetadata } from "@/lib/seo";
const category = categoryBySlug["bridal-lace"];
export const metadata = categoryMetadata(category);
export default function Page() { return <CategoryPage category={category} />; }
