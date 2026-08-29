import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { ArticleData } from "@/lib/site-data";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function ArticlePage({ article }: { article: ArticleData }) {
  const url = absoluteUrl(`/blog/${article.slug}`);
  const breadcrumbId = `${url}#breadcrumb`;
  const modifiedDate = article.modifiedDate ?? article.date;
  const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
  const displayDate = formatDate(modifiedDate);
  const sectionId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const sectionImages = article.sections.flatMap((section) => section.image && section.alt ? [{ url: absoluteUrl(section.image), alt: section.alt, caption: section.caption }] : []);
  const imageObjects = [{ url: absoluteUrl(article.image), alt: article.alt, caption: article.alt }, ...sectionImages].map((image, index) => ({
    "@type": "ImageObject",
    contentUrl: image.url,
    url: image.url,
    width: 1536,
    height: 1024,
    caption: image.caption ?? image.alt,
    creditText: "VELORACE LACE",
    creator: { "@id": `${siteUrl}/#organization` },
    copyrightNotice: `VELORACE LACE ${new Date(`${article.date}T00:00:00Z`).getUTCFullYear()}`,
    representativeOfPage: index === 0,
  }));
  const faqText = article.faqs?.flatMap((faq) => [faq.question, faq.answer]) ?? [];
  const wordCount = [article.description, article.summary, article.methodology, article.authorNote, ...article.sections.flatMap((section) => section.paragraphs), ...faqText].filter(Boolean).join(" ").trim().split(/\s+/).length;
  const related = article.related ?? (article.slug.includes("bridal") ? [{ href: "/bridal-lace", label: "Explore bridal lace" }] : article.slug.includes("embroidery") ? [{ href: "/embroidery-lace", label: "Explore embroidery lace" }] : [{ href: "/lace-trim", label: "Explore wholesale lace trim" }, { href: "/products", label: "Browse all product categories" }]);
  const graph: Record<string, unknown>[] = [
    { "@type": "BlogPosting", "@id": `${url}#article`, headline: article.title, description: article.description, image: imageObjects, thumbnailUrl: absoluteUrl(article.image), datePublished: article.date, dateModified: modifiedDate, author: { "@id": `${siteUrl}/#organization` }, reviewedBy: { "@id": `${siteUrl}/#organization` }, publisher: { "@id": `${siteUrl}/#organization` }, mainEntityOfPage: { "@type": "WebPage", "@id": url }, isPartOf: { "@id": `${siteUrl}/#website` }, inLanguage: "en", isAccessibleForFree: true, wordCount, articleSection: article.articleSection ?? article.sections.map((section) => section.heading), keywords: [article.keyword, ...(article.entities ?? [])].join(", "), about: article.entities?.map((name) => ({ "@type": "Thing", name })), audience: { "@type": "BusinessAudience", audienceType: article.audienceType ?? "Bridal designers, fashion brands, garment manufacturers and lace buyers" }, citation: article.sources?.map((source) => source.href) },
    { "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` }, { "@type": "ListItem", position: 3, name: article.title, item: url }] },
  ];
  if (article.isListArticle) {
    graph.push({
      "@type": "ItemList",
      "@id": `${url}#top-trends`,
      name: article.title,
      numberOfItems: article.sections.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: article.sections.map((section, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${url}#${sectionId(section.heading)}`,
        item: { "@type": "Thing", name: section.heading.replace(/^\d+\.\s*/, ""), description: section.paragraphs[0], image: section.image ? absoluteUrl(section.image) : absoluteUrl(article.image) },
      })),
    });
  }
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
        {article.summary ? <section className="article-answer" aria-labelledby="article-answer-title"><p className="eyebrow"><span /> Direct answer</p><h2 id="article-answer-title">{article.directAnswerQuestion ?? article.answerHeading ?? "What should buyers know?"}</h2><p>{article.summary}</p>{article.keyTakeaways?.length ? <ul>{article.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section> : null}
        {article.comparisonTable ? <section className="article-comparison" aria-labelledby="article-comparison-title"><h2 id="article-comparison-title">3D vs flat embroidered applique at a glance</h2><p>Use this table to shortlist a construction, then approve the actual sample on the final garment fabric.</p><div className="article-table-scroll"><table><thead><tr>{article.comparisonTable.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead><tbody>{article.comparisonTable.rows.map(([factor, threeD, flat]) => <tr key={factor}><th scope="row">{factor}</th><td>{threeD}</td><td>{flat}</td></tr>)}</tbody></table></div></section> : null}
        {article.sections.length >= 6 ? <nav className="article-toc" aria-labelledby="article-toc-title"><span id="article-toc-title">In this guide</span><ol>{article.sections.map((section) => <li key={section.heading}><a href={`#${sectionId(section.heading)}`}>{section.heading}</a></li>)}</ol></nav> : null}
        <div className="article-body"><p className="article-lead">{article.description}</p>{article.sections.map((section) => { const links = article.contextualLinks?.filter((item) => item.sectionHeading === section.heading) ?? []; return <section id={sectionId(section.heading)} key={section.heading}><h2>{section.heading}</h2>{section.image && section.alt ? <figure className="article-trend-figure"><Image className="article-trend-image" src={section.image} alt={section.alt} width={1536} height={1024} sizes="(max-width: 820px) 90vw, 760px" />{section.caption ? <figcaption>{section.caption}</figcaption> : null}</figure> : null}{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{links.map((item) => <p key={item.href} className="article-context-link">{item.prefix}<a href={item.href}>{item.label}</a>{item.suffix}</p>)}</section>; })}</div>
        {article.methodology ? <aside className="article-methodology"><h2>How this trend guide was prepared</h2><p>{article.methodology}</p></aside> : null}
        {article.sources?.length ? <aside className="article-sources" aria-labelledby="article-sources-title"><h2 id="article-sources-title">Editorial references</h2><p>Market context used to frame these 2026 design directions:</p><ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></aside> : null}
        {article.authorNote ? <aside className="article-author" aria-label="About the author"><span>About the author</span><h2>VELORACE LACE sourcing team</h2><p>{article.authorNote}</p></aside> : null}
        {article.faqs?.length ? <section className="article-faq" aria-labelledby="article-faq-title"><p className="eyebrow"><span /> Buyer FAQ</p><h2 id="article-faq-title">Frequently asked questions.</h2><div className="faq-list">{article.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section> : null}
        <nav className="article-related" aria-label="Related product collections"><span>Related sourcing pages</span>{related.map((item) => <a href={item.href} key={item.href}>{item.label} <ArrowRight size={15} /></a>)}</nav>
        <aside className="article-cta"><div><span>{article.ctaEyebrow ?? "Planning a lace collection?"}</span><h2>{article.ctaHeading ?? "Request samples and wholesale options."}</h2></div><a className="button button-gold" href={article.ctaHref ?? "/#contact"}>{article.ctaLabel ?? "Contact VELORACE LACE"} <ArrowRight size={17} /></a></aside>
      </article>
    </main>
  );
}
