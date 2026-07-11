import { ArrowRight, BadgeCheck } from "lucide-react";
import type { CategoryData } from "@/lib/site-data";
import { categories } from "@/lib/site-data";

export default function CategoryPage({ category }: { category: CategoryData }) {
  const url = `https://www.veloracelace.com/${category.slug}`;
  const faqs = [
    [`Can you customize ${category.name.toLowerCase()}?`, `Yes. Velorace Lace supports color, size, motif, material and finish development for ${category.name.toLowerCase()} projects. Send a reference and target quantity for evaluation.`],
    [`What is the MOQ for ${category.name.toLowerCase()}?`, "MOQ depends on whether the design is stocked or custom and on the amount of embroidery or handwork. We confirm the practical minimum after reviewing your requirement."],
    ["Can I request a sample before bulk production?", "Yes. A physical sample is recommended so material, color, dimensions and workmanship can be approved before bulk production."],
  ];
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${url}#collection`, name: category.name, description: category.description, url, provider: { "@id": "https://www.veloracelace.com/#organization" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.veloracelace.com/" }, { "@type": "ListItem", position: 2, name: "Products", item: "https://www.veloracelace.com/products" }, { "@type": "ListItem", position: 3, name: category.name, item: url }] },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><span>{category.name}</span></nav>
          <p className="eyebrow"><span /> Wholesale collection</p>
          <h1>{category.name}<br /><em>made for your brand.</em></h1>
          <p>{category.intro}</p>
          <div className="hero-actions"><a className="button button-dark" href="/#contact">Get free samples <ArrowRight size={17} /></a><a className="text-link" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">Request wholesale catalog <ArrowRight size={15} /></a></div>
        </div>
        <div className="inner-hero-image"><img src={category.image} alt={category.alt} width="1200" height="1200" fetchPriority="high" decoding="async" /></div>
      </section>
      <section className="section category-detail">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Sourcing advantages</p><h2>Flexible supply for global buyers.</h2></div><p>{category.description}</p></div>
        <div className="category-detail-grid">
          <div><h3>Product highlights</h3>{category.highlights.map((item) => <p key={item}><BadgeCheck size={17} />{item}</p>)}</div>
          <div><h3>Common applications</h3>{category.applications.map((item) => <p key={item}><BadgeCheck size={17} />{item}</p>)}</div>
          <div className="detail-cta"><span>Need a custom color, width or motif?</span><h3>Send us your reference.</h3><a className="button button-gold" href="/#contact">Start custom development <ArrowRight size={17} /></a></div>
        </div>
      </section>
      <section className="section related-section">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Explore more</p><h2>Related lace collections.</h2></div></div>
        <div className="related-links">{categories.filter((item) => item.slug !== category.slug).slice(0, 4).map((item) => <a href={`/${item.slug}`} key={item.slug}><img src={item.image} alt={item.alt} width="700" height="700" loading="lazy" decoding="async" /><span>{item.name}</span><ArrowRight size={17} /></a>)}</div>
      </section>
      <section className="section faq-section category-faq"><div className="section-heading centered-heading"><p className="eyebrow"><span /> Buyer FAQ</p><h2>Sourcing {category.name.toLowerCase()}.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="final-cta"><p>Wholesale lace sourcing from Guangzhou, China</p><h2>Bring your next trim idea<br />into production.</h2><a className="button button-light" href="/#contact">Request samples <ArrowRight size={17} /></a></section>
    </main>
  );
}
