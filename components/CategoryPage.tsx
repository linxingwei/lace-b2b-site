import { ArrowRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import type { CategoryData } from "@/lib/site-data";
import { categories } from "@/lib/site-data";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import WhatsAppLink from "@/components/WhatsAppLink";
import BridalProducts from "@/components/BridalProducts";
import { bridalProducts, bridalFaqs } from "@/lib/bridal-products";
import bridalStyles from "./BridalProducts.module.css";

export default function CategoryPage({ category }: { category: CategoryData }) {
  const url = absoluteUrl(`/${category.slug}`);
  const isBridal = category.slug === "bridal-lace";
  const isWhatsAppPriorityCategory = isBridal || category.slug === "embroidery-lace";
  const whatsappMessage = `Hello VELORACE LACE, I am sourcing ${category.name.toLowerCase()}. I will send a reference photo. Please advise the MOQ, price and sampling options.`;
  const breadcrumbId = `${url}#breadcrumb`;
  const faqs = isBridal ? bridalFaqs : [
    [`Can you customize ${category.name.toLowerCase()}?`, `Yes. VELORACE LACE supports color, size, motif, material and finish development for ${category.name.toLowerCase()} projects. Send a reference and target quantity for evaluation.`],
    [`What is the MOQ for ${category.name.toLowerCase()}?`, "MOQ depends on whether the design is stocked or custom and on the amount of embroidery or handwork. We confirm the practical minimum after reviewing your requirement."],
    ["Can I request a sample before bulk production?", "Yes. A physical sample is recommended so material, color, dimensions and workmanship can be approved before bulk production."],
  ];
  const heroImage = isBridal ? bridalProducts[4].images[0].src : category.image;
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${url}#collection`, name: category.name, description: category.description, url, inLanguage: "en", image: absoluteUrl(heroImage), isPartOf: { "@id": `${siteUrl}/#website` }, breadcrumb: { "@id": breadcrumbId }, provider: { "@id": `${siteUrl}/#organization` } },
    { "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` }, { "@type": "ListItem", position: 3, name: category.name, item: url }] },
    ...(isBridal ? [{ "@type": "ItemList", "@id": `${url}#products`, name: "Bridal lace products", numberOfItems: bridalProducts.length, itemListElement: bridalProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Product", "@id": `${url}#${product.id}`, url: `${url}#${product.id}`, name: product.name, description: product.description, category: product.type, ...(product.sku ? { sku: product.sku } : {}), ...(product.images.length ? { image: product.images.map((photo) => absoluteUrl(photo.src)) } : {}) } })) }] : []),
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };
  return (
    <main className={isBridal ? bridalStyles.page : undefined}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/products">Products</a><span aria-hidden="true">/</span><span aria-current="page">{category.name}</span></nav>
          <p className="eyebrow"><span /> Wholesale collection</p>
          <h1>{isBridal ? <>Wholesale Bridal Lace<br /><em>for gowns &amp; veils.</em></> : <>{category.name}<br /><em>made for your brand.</em></>}</h1>
          <p>{isBridal ? "Compare beaded bridal lace, 3D floral bridal lace, embroidered tulle and placement appliques for wedding dress development. VELORACE LACE coordinates sourcing, sample enquiries and wholesale quotations from China." : category.intro}</p>
          {isWhatsAppPriorityCategory ? <div className="hero-actions category-whatsapp-actions"><WhatsAppLink className="button button-whatsapp" message={whatsappMessage} productCategory={category.name} placement={`${category.slug}_hero_primary`}>Send a reference photo on WhatsApp <ArrowRight size={17} /></WhatsAppLink><a className="text-link" href={isBridal ? "#bridal-products" : "/#contact"}>{isBridal ? "Compare five bridal designs" : "Request samples & quote"} <ArrowRight size={15} /></a><small>Get MOQ, price &amp; sampling options after we review your reference.</small></div> : <div className="hero-actions"><a className="button button-dark" href="/#contact">Get free samples <ArrowRight size={17} /></a><a className="text-link" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer" data-cta-placement={`${category.slug}_hero_catalog`} data-product-category={category.name}>Request wholesale catalog <ArrowRight size={15} /></a></div>}
        </div>
        <div className="inner-hero-image"><Image src={heroImage} alt={isBridal ? bridalProducts[4].images[0].alt : category.alt} width={1200} height={1200} priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
      </section>
      {isBridal ? <BridalProducts /> : null}
      <section className="section category-detail">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Sourcing advantages</p><h2>{isBridal ? "Bridal lace developed around the final garment." : "Flexible supply for global buyers."}</h2></div><p>{isBridal ? "Choose an existing construction or send your artwork, veil reference or gown detail. We review application, base material, motif scale, color, quantity and finishing before confirming the sampling route." : category.description}</p></div>
        <div className="category-detail-grid">
          <div><h3>Product highlights</h3>{(isBridal ? ["Five distinct bridal constructions", "Product-specific MOQ and quotation", "Sample and shade review", "Gown and veil application assessment"] : category.highlights).map((item) => <p key={item}><BadgeCheck size={17} />{item}</p>)}</div>
          <div><h3>Common applications</h3>{(isBridal ? ["Wedding gown overlays and trains", "Bridal bodices and sleeves", "Botanical applique placement", "Veil development after sample review"] : category.applications).map((item) => <p key={item}><BadgeCheck size={17} />{item}</p>)}</div>
          <div className="detail-cta"><span>Need a custom color, width or motif?</span><h3>Send us your reference.</h3>{isWhatsAppPriorityCategory ? <WhatsAppLink className="button button-gold" message={whatsappMessage} productCategory={category.name} placement={`${category.slug}_detail_cta`}>Send reference on WhatsApp <ArrowRight size={17} /></WhatsAppLink> : <a className="button button-gold" href="/#contact">Start custom development <ArrowRight size={17} /></a>}</div>
        </div>
      </section>
      {isBridal ? <section className="category-context-section" aria-label="Bridal lace procurement guide"><div><p className="eyebrow"><span /> Buyer specifications</p><h2>What to send for an accurate bridal lace quote.</h2></div><div><p><strong>Application:</strong> wedding gown, veil, bodice, sleeve, train or accessory.</p><p><strong>Construction:</strong> embroidered lace, flat applique, <a href="/3d-flower-applique">3D flower applique</a>, beaded or pearl embellishment.</p><p><strong>Material &amp; color:</strong> tulle or mesh preference, ivory tone, thread and embellishment requirements.</p><p><strong>Dimensions:</strong> lace width, motif size, veil border width or finished panel dimensions.</p><p><strong>Commercial details:</strong> target quantity, destination and whether you need a strike-off or physical sample before bulk production.</p><p>For veil and gown placement decisions, use our <a href="/blog/lace-applique-placement-wedding-dress">lace applique placement guide</a>. If you are choosing between raised and low-profile embroidery, compare <a href="/blog/3d-lace-applique-vs-flat-embroidered-applique">3D vs flat embroidered applique</a>.</p></div></section> : null}
      {category.contextualLinks?.length ? <section className="category-context-section" aria-label={`${category.name} buying guidance`}><div><p className="eyebrow"><span /> Buying guidance</p><h2>Connect the material choice to the garment brief.</h2></div><div>{category.contextualLinks.map((item) => <p key={item.href}>{item.prefix}<a href={item.href}>{item.label}</a>{item.suffix}</p>)}</div></section> : null}
      {category.featuredArticle ? <aside className="category-insight"><div><span>{category.featuredArticle.label}</span><h2>{category.featuredArticle.title}</h2><p>{category.featuredArticle.description}</p></div><a className="button button-dark" href={category.featuredArticle.href}>Read the trend guide <ArrowRight size={17} /></a></aside> : null}
      {category.gallery?.length ? <section className="section collection-gallery-section"><div className="section-heading split-heading"><div><p className="eyebrow"><span /> Selected styles</p><h2>Representative {category.name.toLowerCase()} designs.</h2></div><p>A small selection from our current range. Open the full album to browse more colors, widths and motifs.</p></div><div className="collection-gallery">{category.gallery.map((item) => <figure key={item.image}><Image src={item.image} alt={item.alt} width={1100} height={1100} sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw" /></figure>)}</div>{category.catalogUrl ? <div className="catalog-link-wrap"><a className="button button-dark" href={category.catalogUrl} target="_blank" rel="noreferrer">View full album catalog <ArrowRight size={17} /></a></div> : null}</section> : null}
      <section className="section related-section"><div className="section-heading split-heading"><div><p className="eyebrow"><span /> Explore more</p><h2>Related lace collections.</h2></div></div><div className="related-links">{categories.filter((item) => item.slug !== category.slug).slice(0, 4).map((item) => <a href={`/${item.slug}`} key={item.slug}><Image src={item.image} alt={item.alt} width={700} height={700} sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 25vw" /><span>{item.name}</span><ArrowRight size={17} /></a>)}</div></section>
      <section className="section faq-section category-faq"><div className="section-heading centered-heading"><p className="eyebrow"><span /> Buyer FAQ</p><h2>Sourcing {category.name.toLowerCase()}.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="final-cta"><p>Wholesale lace sourcing from Guangzhou, China</p><h2>{isWhatsAppPriorityCategory ? <>Send a reference photo.<br />Get MOQ, price &amp; sampling options.</> : <>Bring your next trim idea<br />into production.</>}</h2>{isWhatsAppPriorityCategory ? <WhatsAppLink className="button button-light" message={whatsappMessage} productCategory={category.name} placement={`${category.slug}_final_cta`}>Continue on WhatsApp <ArrowRight size={17} /></WhatsAppLink> : <a className="button button-light" href="/#contact">Request samples <ArrowRight size={17} /></a>}</section>
    </main>
  );
}
