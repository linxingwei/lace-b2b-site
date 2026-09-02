import { ArrowRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import type { CategoryData } from "@/lib/site-data";
import { categories } from "@/lib/site-data";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function CategoryPage({ category }: { category: CategoryData }) {
  const url = absoluteUrl(`/${category.slug}`);
  const isWhatsAppPriorityCategory = category.slug === "bridal-lace" || category.slug === "embroidery-lace";
  const whatsappMessage = `Hello VELORACE LACE, I am sourcing ${category.name.toLowerCase()}. I will send a reference photo. Please advise the MOQ, price and sampling options.`;
  const breadcrumbId = `${url}#breadcrumb`;
  const faqs = [
    [`Can you customize ${category.name.toLowerCase()}?`, `Yes. VELORACE LACE supports color, size, motif, material and finish development for ${category.name.toLowerCase()} projects. Send a reference and target quantity for evaluation.`],
    [`What is the MOQ for ${category.name.toLowerCase()}?`, "MOQ depends on whether the design is stocked or custom and on the amount of embroidery or handwork. We confirm the practical minimum after reviewing your requirement."],
    ["Can I request a sample before bulk production?", "Yes. A physical sample is recommended so material, color, dimensions and workmanship can be approved before bulk production."],
  ];
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${url}#collection`, name: category.name, description: category.description, url, inLanguage: "en", image: absoluteUrl(category.image), isPartOf: { "@id": `${siteUrl}/#website` }, breadcrumb: { "@id": breadcrumbId }, provider: { "@id": `${siteUrl}/#organization` } },
    { "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` }, { "@type": "ListItem", position: 3, name: category.name, item: url }] },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/products">Products</a><span aria-hidden="true">/</span><span aria-current="page">{category.name}</span></nav>
          <p className="eyebrow"><span /> Wholesale collection</p>
          <h1>{category.name}<br /><em>made for your brand.</em></h1>
          <p>{category.intro}</p>
          {isWhatsAppPriorityCategory ? <div className="hero-actions category-whatsapp-actions"><WhatsAppLink className="button button-whatsapp" message={whatsappMessage} productCategory={category.name} placement={`${category.slug}_hero_primary`}>Send a reference photo on WhatsApp <ArrowRight size={17} /></WhatsAppLink><a className="text-link" href="/#contact">Request samples &amp; quote <ArrowRight size={15} /></a><small>Get MOQ, price &amp; sampling options after we review your reference.</small></div> : <div className="hero-actions"><a className="button button-dark" href="/#contact">Get free samples <ArrowRight size={17} /></a><a className="text-link" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer" data-cta-placement={`${category.slug}_hero_catalog`} data-product-category={category.name}>Request wholesale catalog <ArrowRight size={15} /></a></div>}
        </div>
        <div className="inner-hero-image"><Image src={category.image} alt={category.alt} width={1200} height={1200} priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
      </section>
      <section className="section category-detail">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Sourcing advantages</p><h2>Flexible supply for global buyers.</h2></div><p>{category.description}</p></div>
        <div className="category-detail-grid">
          <div><h3>Product highlights</h3>{category.highlights.map((item) => <p key={item}><BadgeCheck size={17} />{item}</p>)}</div>
          <div><h3>Common applications</h3>{category.applications.map((item) => <p key={item}><BadgeCheck size={17} />{item}</p>)}</div>
          <div className="detail-cta"><span>Need a custom color, width or motif?</span><h3>Send us your reference.</h3>{isWhatsAppPriorityCategory ? <WhatsAppLink className="button button-gold" message={whatsappMessage} productCategory={category.name} placement={`${category.slug}_detail_cta`}>Send reference on WhatsApp <ArrowRight size={17} /></WhatsAppLink> : <a className="button button-gold" href="/#contact">Start custom development <ArrowRight size={17} /></a>}</div>
        </div>
      </section>
      {category.contextualLinks?.length ? <section className="category-context-section" aria-label={`${category.name} buying guidance`}><div><p className="eyebrow"><span /> Buying guidance</p><h2>Connect the material choice to the garment brief.</h2></div><div>{category.contextualLinks.map((item) => <p key={item.href}>{item.prefix}<a href={item.href}>{item.label}</a>{item.suffix}</p>)}</div></section> : null}
      {category.featuredArticle ? <aside className="category-insight"><div><span>{category.featuredArticle.label}</span><h2>{category.featuredArticle.title}</h2><p>{category.featuredArticle.description}</p></div><a className="button button-dark" href={category.featuredArticle.href}>Read the trend guide <ArrowRight size={17} /></a></aside> : null}
      {category.gallery?.length ? (
        <section className="section collection-gallery-section">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> Selected styles</p><h2>Representative {category.name.toLowerCase()} designs.</h2></div>
            <p>A small selection from our current range. Open the full album to browse more colors, widths and motifs.</p>
          </div>
          <div className="collection-gallery">
            {category.gallery.map((item) => <figure key={item.image}><Image src={item.image} alt={item.alt} width={1100} height={1100} sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw" /></figure>)}
          </div>
          {category.catalogUrl ? <div className="catalog-link-wrap"><a className="button button-dark" href={category.catalogUrl} target="_blank" rel="noreferrer">View full album catalog <ArrowRight size={17} /></a></div> : null}
        </section>
      ) : null}
      <section className="section related-section">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Explore more</p><h2>Related lace collections.</h2></div></div>
        <div className="related-links">{categories.filter((item) => item.slug !== category.slug).slice(0, 4).map((item) => <a href={`/${item.slug}`} key={item.slug}><Image src={item.image} alt={item.alt} width={700} height={700} sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 25vw" /><span>{item.name}</span><ArrowRight size={17} /></a>)}</div>
      </section>
      <section className="section faq-section category-faq"><div className="section-heading centered-heading"><p className="eyebrow"><span /> Buyer FAQ</p><h2>Sourcing {category.name.toLowerCase()}.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="final-cta"><p>Wholesale lace sourcing from Guangzhou, China</p><h2>{isWhatsAppPriorityCategory ? <>Send a reference photo.<br />Get MOQ, price &amp; sampling options.</> : <>Bring your next trim idea<br />into production.</>}</h2>{isWhatsAppPriorityCategory ? <WhatsAppLink className="button button-light" message={whatsappMessage} productCategory={category.name} placement={`${category.slug}_final_cta`}>Continue on WhatsApp <ArrowRight size={17} /></WhatsAppLink> : <a className="button button-light" href="/#contact">Request samples <ArrowRight size={17} /></a>}</section>
    </main>
  );
}
