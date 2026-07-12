import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.veloracelace.com";
  const categoryRoutes = categories.map((category) => ({ url: `${base}/${category.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }));
  const articleRoutes = articles.map((article) => ({ url: `${base}/blog/${article.slug}`, lastModified: new Date(article.date), changeFrequency: "monthly" as const, priority: 0.7 }));
  const coreRoutes = [
    { path: "", priority: 1, frequency: "weekly" as const }, { path: "/products", priority: 0.9, frequency: "weekly" as const },
    { path: "/custom-design", priority: 0.8, frequency: "monthly" as const }, { path: "/about", priority: 0.7, frequency: "monthly" as const },
    { path: "/blog", priority: 0.8, frequency: "weekly" as const }, { path: "/contact", priority: 0.7, frequency: "monthly" as const },
  ].map((route) => ({ url: `${base}${route.path}`, changeFrequency: route.frequency, priority: route.priority }));
  return [...coreRoutes, ...categoryRoutes, ...articleRoutes];
}
