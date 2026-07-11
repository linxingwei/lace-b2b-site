import ArticlePage from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/site-data";
import { articleMetadata } from "@/lib/seo";
const article = articleBySlug["how-to-choose-bridal-lace"];
export const metadata = articleMetadata(article);
export default function Page() { return <ArticlePage article={article} />; }
