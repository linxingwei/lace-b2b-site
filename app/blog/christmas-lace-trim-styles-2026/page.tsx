import ArticlePage from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/site-data";
import { articleMetadata } from "@/lib/seo";

const article = articleBySlug["christmas-lace-trim-styles-2026"];

export const metadata = articleMetadata(article);

export default function Page() {
  return <ArticlePage article={article} />;
}
