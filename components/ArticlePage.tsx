import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ArticleData } from "@/lib/site-data";

export default function ArticlePage({ article }: { article: ArticleData }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.date, author: { "@type": "Organization", name: "Velorace Lace" }, publisher: { "@type": "Organization", name: "Velorace Lace" }, mainEntityOfPage: `https://www.veloracelace.com/blog/${article.slug}` };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="article-shell">
        <a className="article-back" href="/blog"><ArrowLeft size={16} /> Back to insights</a>
        <p className="eyebrow"><span /> Sourcing insight</p>
        <h1>{article.title}</h1>
        <div className="article-meta"><span>Velorace Lace sourcing team</span><span>Updated July 2026</span><span>Keyword: {article.keyword}</span></div>
        <img className="article-cover" src={article.image} alt={article.alt} />
        <div className="article-body"><p className="article-lead">{article.description}</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
        <aside className="article-cta"><div><span>Planning a lace collection?</span><h2>Request samples and wholesale options.</h2></div><a className="button button-gold" href="/#contact">Contact Velorace Lace <ArrowRight size={17} /></a></aside>
      </article>
    </main>
  );
}
