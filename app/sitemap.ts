import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.veloracelace.com";
  const routes = ["", "/lace-trim", "/embroidery-lace", "/eyelash-lace", "/bridal-lace", "/3d-flower-applique", "/kids-lace-trim", "/custom-design", "/about-us", "/blog", "/contact", "/blog/lace-trim-trends-2026", "/blog/how-to-choose-bridal-lace", "/blog/china-lace-manufacturer-guide", "/blog/embroidery-lace-vs-guipure-lace"];
  return routes.map((route, index) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : route.startsWith("/blog/") ? 0.7 : 0.8 }));
}
