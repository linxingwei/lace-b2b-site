import ArticlePage from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/site-data";
import { articleMetadata } from "@/lib/seo";
const article = articleBySlug["bridal-lace-color-guide"];
export const metadata = articleMetadata(article);
export default function Page() { return <ArticlePage article={article} />; }
