import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/site-data";
const article = articleBySlug["embroidery-lace-vs-guipure-lace"];
export const metadata: Metadata = { title: article.title, description: article.description, alternates: { canonical: `/blog/${article.slug}` } };
export default function Page() { return <ArticlePage article={article} />; }
