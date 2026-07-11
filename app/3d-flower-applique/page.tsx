import CategoryPage from "@/components/CategoryPage";
import { categoryBySlug } from "@/lib/site-data";
import { categoryMetadata } from "@/lib/seo";
const category = categoryBySlug["3d-flower-applique"];
export const metadata = categoryMetadata(category);
export default function Page() { return <CategoryPage category={category} />; }
