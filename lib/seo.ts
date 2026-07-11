import type { Metadata } from "next";
import type { ArticleData, CategoryData } from "@/lib/site-data";

export const siteUrl = "https://www.veloracelace.com";

export function createPageMetadata(title: string, description: string, path: string, image = "/og.png"): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: { title, description, url, type: "website", siteName: "Velorace Lace", images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function categoryMetadata(category: CategoryData): Metadata {
  return createPageMetadata(category.title.replace(" | Velorace Lace", ""), category.description, `/${category.slug}`, category.image);
}

export function articleMetadata(article: ArticleData): Metadata {
  const metadata = createPageMetadata(article.title, article.description, `/blog/${article.slug}`, article.image);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", publishedTime: article.date, modifiedTime: article.date } };
}
