import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata("Lace Sourcing Blog for Fashion Buyers", "Practical lace sourcing guides, material comparisons and trend insights for fashion brands, bridal designers and garment manufacturers.", "/blog");

const articleCards = [
  {
    href: "/custom-embroidered-lace-trim",
    title: "Custom Embroidered Lace Trim Manufacturer | Cute Lace for Kidswear & Fashion Brands",
    keyword: "custom embroidered lace trim",
    description: "A sourcing guide to custom motifs, colors, widths and quality checks for kidswear, bridal and fashion lace trim programs.",
    image: "/images/custom-embroidered-lace-trim/red-crown-custom-lace-trim.webp",
    alt: "Red crown custom embroidered lace trim manufacturer guide",
  },
  ...articles.map((article) => ({ ...article, href: `/blog/${article.slug}` })),
];

export default function BlogPage() { return <main><section className="page-hero"><p className="eyebrow"><span /> VELORACE LACE Insights</p><h1>Lace sourcing knowledge<br /><em>for global fashion buyers.</em></h1><p>Practical guides on materials, trends, supplier evaluation and product development from our Guangzhou sourcing team.</p></section><section className="section"><div className="blog-grid blog-grid-four">{articleCards.map((article) => <article className="blog-card" key={article.href}><a href={article.href}><img src={article.image} alt={article.alt} width="800" height="590" loading="lazy" decoding="async" /></a><span>{article.keyword}</span><h2><a href={article.href}>{article.title}</a></h2><p>{article.description}</p><a className="text-link" href={article.href}>Read article <ArrowRight size={14} /></a></article>)}</div></section></main>; }
