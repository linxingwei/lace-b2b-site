import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { ArticleData } from "@/lib/site-data";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function ArticlePage({ article }: { article: ArticleData }) {
  const url = absoluteUrl(`/blog/${article.slug}`);
  const breadcrumbId = `${url}#breadcrumb`;
  const articleImages = [article.image, ...article.sections.flatMap((section) => section.image ? [section.image] : [])];
  const uniqueImages = Array.from(new Set(articleImages)).map(absoluteUrl);
  const displayDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${article.date}T00:00:00Z`));
  const related = article.related ?? (article.slug.includes("bridal") ? [{ href: "/bridal-lace", label: "Explore bridal lace" }] : article.slug.includes("embroidery") ? [{ href: "/embroidery-lace", label: "Explore embroidery lace" }] : [{ href: "/lace-trim", label: "Explore wholesale lace trim" }, { href: "/products", label: "Browse all product categories" }]);
  const graph: Record<string, unknown>[] = [
    { "@type": "BlogPosting", "@id": `${url}#article`, headline: article.title, description: article.description, image: uniqueImages, datePublished: article.date, dateModified: article.date, author: { "@id": `${siteUrl}/#organization` }, publisher: { "@id": `${siteUrl}/#organization` }, mainEntityOfPage: { "@type": "WebPage", "@id": url }, isPartOf: { "@id": `${siteUrl}/#website` }, inLanguage: "en", keywords: article.keyword, citation: article.sources?.map((source) => source.href) },
    { "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` }, { "@type": "ListItem", position: 3, name: article.title, item: url }] },
  ];
  if (article.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }
  const jsonLd = { "@context": "https://schema.org", "@graph": graph };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="article-shell">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/blog">Blog</a><span aria-hidden="true">/</span><span aria-current="page">{article.title}</span></nav>
        <a className="article-back" href="/blog"><ArrowLeft size={16} /> Back to insights</a>
        <p className="eyebrow"><span /> Sourcing insight</p>
        <h1>{article.title}</h1>
        <div className="article-meta"><span>VELORACE LACE sourcing team</span><span>Updated {displayDate}</span><span>{article.readTime ?? "5 minute read"}</span></div>
        <Image className="article-cover" src={article.image} alt={article.alt} width={1536} height={1024} priority sizes="(max-width: 1100px) 90vw, 1000px" />
        <div className="article-body"><p className="article-lead">{article.description}</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.image && section.alt ? <figure className="article-trend-figure"><Image className="article-trend-image" src={section.image} alt={section.alt} width={1536} height={1024} sizes="(max-width: 820px) 90vw, 760px" />{section.caption ? <figcaption>{section.caption}</figcaption> : null}</figure> : null}{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
        {article.sources?.length ? <aside className="article-sources" aria-labelledby="article-sources-title"><h2 id="article-sources-title">Editorial references</h2><p>Market context used to frame these 2026 design directions:</p><ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></aside> : null}
        {article.faqs?.length ? <section className="article-faq" aria-labelledby="article-faq-title"><p className="eyebrow"><span /> Buyer FAQ</p><h2 id="article-faq-title">Frequently asked questions.</h2><div className="faq-list">{article.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section> : null}
        <nav className="article-related" aria-label="Related product collections"><span>Related sourcing pages</span>{related.map((item) => <a href={item.href} key={item.href}>{item.label} <ArrowRight size={15} /></a>)}</nav>
        <aside className="article-cta"><div><span>{article.ctaEyebrow ?? "Planning a lace collection?"}</span><h2>{article.ctaHeading ?? "Request samples and wholesale options."}</h2></div><a className="button button-gold" href={article.ctaHref ?? "/#contact"}>{article.ctaLabel ?? "Contact VELORACE LACE"} <ArrowRight size={17} /></a></aside>
      </article>
    </main>
  );
}
