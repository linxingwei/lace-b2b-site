import type { Metadata } from "next";
import type { ArticleData, CategoryData } from "@/lib/site-data";

export const siteUrl = "https://www.veloracelace.com";
export const siteName = "VELORACE LACE";
export const defaultOgImage = "/og.png";

export function absoluteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, siteUrl).toString();
}

function pageTitle(title: string) {
  return title.replace(/\s*\|\s*VELORACE LACE\s*$/i, "").trim();
}

function socialImages(image: string, alt: string) {
  const resolvedImage = absoluteUrl(image);
  return image === defaultOgImage
    ? [{ url: resolvedImage, width: 1200, height: 630, alt }]
    : [{ url: resolvedImage, alt }];
}

export function createPageMetadata(title: string, description: string, path: string, image = defaultOgImage): Metadata {
  const titleWithoutBrand = pageTitle(title);
  const url = absoluteUrl(path || "/");
  const images = socialImages(image, titleWithoutBrand);
  return {
    title: path === "/" ? { absolute: `${titleWithoutBrand} | ${siteName}` } : titleWithoutBrand,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: titleWithoutBrand,
      description,
      url,
      type: "website",
      locale: "en_US",
      siteName,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithoutBrand,
      description,
      images: images.map(({ url: imageUrl }) => imageUrl),
    },
  };
}

export function categoryMetadata(category: CategoryData): Metadata {
  return createPageMetadata(category.title, category.description, `/${category.slug}`);
}

export function articleMetadata(article: ArticleData): Metadata {
  const metadata = createPageMetadata(article.seoTitle ?? article.title, article.description, `/blog/${article.slug}`, article.image);
  const modifiedTime = article.modifiedDate ?? article.date;
  return {
    ...metadata,
    keywords: [article.keyword, "embroidered lace applique", "bridal lace", "wedding dress lace", ...(article.entities ?? [])],
    authors: [{ name: `${siteName} sourcing team`, url: siteUrl }],
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: article.date,
      modifiedTime,
      authors: [siteUrl],
      section: article.articleSection ?? "Lace sourcing",
      tags: [article.keyword, ...(article.entities ?? [])],
    },
  };
}
