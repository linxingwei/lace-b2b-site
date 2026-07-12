import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ArticleData } from "@/lib/site-data";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function ArticlePage({ article }: { article: ArticleData }) {
  const url = absoluteUrl(`/blog/${article.slug}`);
  const breadcrumbId = `${url}#breadcrumb`;
  const related = article.slug.includes("bridal") ? [{ href: "/bridal-lace", label: "Explore bridal lace" }] : article.slug.includes("embroidery") ? [{ href: "/embroidery-lace", label: "Explore embroidery lace" }] : [{ href: "/lace-trim", label: "Explore wholesale lace trim" }, { href: "/products", label: "Browse all product categories" }];
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "BlogPosting", "@id": `${url}#article`, headline: article.title, description: article.description, image: absoluteUrl(article.image), datePublished: article.date, dateModified: article.date, author: { "@id": `${siteUrl}/#organization` }, publisher: { "@id": `${siteUrl}/#organization` }, mainEntityOfPage: { "@type": "WebPage", "@id": url }, isPartOf: { "@id": `${siteUrl}/#website` }, inLanguage: "en" },
    { "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` }, { "@type": "ListItem", position: 3, name: article.title, item: url }] },
  ] };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="article-shell">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/blog">Blog</a><span aria-hidden="true">/</span><span aria-current="page">{article.title}</span></nav>
        <a className="article-back" href="/blog"><ArrowLeft size={16} /> Back to insights</a>
        <p className="eyebrow"><span /> Sourcing insight</p>
        <h1>{article.title}</h1>
        <div className="article-meta"><span>Velora Lace sourcing team</span><span>Updated July 2026</span><span>5 minute read</span></div>
        <img className="article-cover" src={article.image} alt={article.alt} width="1200" height="800" fetchPriority="high" decoding="async" />
        <div className="article-body"><p className="article-lead">{article.description}</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
        <nav className="article-related" aria-label="Related product collections"><span>Related sourcing pages</span>{related.map((item) => <a href={item.href} key={item.href}>{item.label} <ArrowRight size={15} /></a>)}</nav>
        <aside className="article-cta"><div><span>Planning a lace collection?</span><h2>Request samples and wholesale options.</h2></div><a className="button button-gold" href="/#contact">Contact Velora Lace <ArrowRight size={17} /></a></aside>
      </article>
    </main>
  );
}
