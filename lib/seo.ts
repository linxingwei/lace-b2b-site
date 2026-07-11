import type { Metadata } from "next";
import type { ArticleData, CategoryData } from "@/lib/site-data";

export const siteUrl = "https://www.veloracelace.com";
export const siteName = "Velorace Lace";
export const defaultOgImage = "/og.png";

export function absoluteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, siteUrl).toString();
}

function pageTitle(title: string) {
  return title.replace(/\s*\|\s*Velorace Lace\s*$/i, "").trim();
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
  const metadata = createPageMetadata(article.title, article.description, `/blog/${article.slug}`, article.image);
  return {
    ...metadata,
    authors: [{ name: `${siteName} sourcing team`, url: siteUrl }],
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [siteUrl],
    },
  };
}
