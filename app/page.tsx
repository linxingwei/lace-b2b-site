import { ArrowRight, BadgeCheck, Box, Factory, Globe2, Lightbulb, PackageCheck, Palette, Send, Sparkles, SwatchBook, Truck, UsersRound } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import { articles, categories, trendingProducts } from "@/lib/site-data";
import { mediaUrl } from "@/lib/media";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("China Lace & Garment Accessories Supplier for Fashion Brands", "Velorace Lace supplies custom lace trims, bridal lace, embroidery and 3D appliques for global fashion brands and garment manufacturers.", "/");

const trust = ["Guangzhou China Supply Chain", "OEM & Custom Design", "Worldwide Shipping", "Low MOQ Available"];
const featuredEmbroidery = [
  ["Butterfly Lace", "embroidered-lace/embroidered-lace-butterfly.webp", "pastel butterfly embroidered lace trim"],
  ["Gold Floral", "embroidered-lace/embroidered-lace-gold-floral.webp", "gold floral embroidered mesh lace"],
  ["Aqua Floral", "embroidered-lace/embroidered-lace-aqua-floral.webp", "aqua floral embroidered mesh lace"],
  ["Forest Floral", "embroidered-lace/embroidered-lace-forest-floral.webp", "forest green floral embroidered lace"],
  ["Blush Floral", "embroidered-lace/embroidered-lace-blush-floral.webp", "blush pink floral embroidered lace"],
  ["Scalloped Lace", "embroidered-lace/embroidered-lace-scallop.webp", "pink scalloped floral embroidery lace"],
] as const;
const applications = [
  { title: "Wedding Dress", text: "Bridal lace supplier for wedding gowns and couture fashion.", image: mediaUrl("luxury-beaded.jpg"), alt: "bridal lace supplier for wedding dress designers" },
  { title: "Children's Clothing", text: "Soft decorative lace trims for baby and kids apparel.", image: mediaUrl("yellow-floral.jpg"), alt: "soft kids lace trim for children's clothing" },
  { title: "Fashion Apparel", text: "Fashion trims for dresses, lingerie and designer clothing.", image: mediaUrl("grey-rhinestone.jpg"), alt: "fashion lace trims for designer apparel" },
  { title: "DIY Crafts", text: "Wholesale lace materials for handmade projects.", image: mediaUrl("gold-applique.png"), alt: "wholesale lace materials for DIY crafts" },
];
const advantages = [
  { icon: Factory, title: "Guangzhou China Supply Chain", text: "Located near Guangzhou textile markets with access to thousands of lace designs." },
  { icon: Lightbulb, title: "Custom Development", text: "From customer ideas and references to approved samples and finished products." },
  { icon: SwatchBook, title: "Wide Product Selection", text: "Lace trims, embroidery lace, appliques and fashion accessories in one source." },
  { icon: Globe2, title: "Global Wholesale Service", text: "Clear export communication, reliable packing and worldwide shipping support." },
];
const process = [
  ["01", "Send Your Design Idea", Send], ["02", "Sample Development", Palette], ["03", "Customer Approval", BadgeCheck],
  ["04", "Mass Production", Factory], ["05", "Quality Inspection", PackageCheck], ["06", "Worldwide Shipping", Truck],
] as const;
const faqs = [
  ["What is your minimum order quantity?", "MOQ depends on the construction and amount of handwork. Stock designs usually support lower quantities, while custom embroidery and applique projects are quoted after reviewing the design."],
  ["Can you develop a lace design from our reference?", "Yes. Send a sketch, photo, tech pack or physical sample with the target size, color, application and quantity. We confirm the development plan before sampling."],
  ["How long do samples and bulk production take?", "Most samples require about 7-14 days. Bulk lead time is confirmed after sample approval and depends on quantity, material availability and workmanship."],
  ["Can you match our color and garment fabric?", "Yes. Pantone references and physical fabric swatches are both supported. A lab dip or sample should be approved before bulk production."],
  ["Do you support worldwide shipping?", "Yes. Express, air and sea options can be coordinated based on shipment size, delivery target and destination country."],
];

export default function Home() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Premium lace trim supplier</p>
          <h1>Elegant Lace Details for <em>Fashion Collections.</em></h1>
          <p className="hero-lead">Discover embroidery lace, bridal trims and dimensional appliques selected for fashion brands, designers and garment manufacturers. Custom colors, motifs and sample development are available.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Request samples & quote <ArrowRight size={17} /></a><a className="text-link" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">Request wholesale catalog <ArrowRight size={15} /></a></div>
          <div className="trust-badges">{trust.map((item) => <span key={item}><BadgeCheck size={15} />{item}</span>)}</div>
        </div>
        <div className="hero-visual" aria-label="Premium embroidery lace and 3D floral appliques">
          <div className="hero-main-image"><img src={mediaUrl("embroidered-lace/embroidered-lace-butterfly.webp")} alt="pastel butterfly embroidered mesh lace trim" width="1100" height="1100" fetchPriority="high" decoding="async" /></div>
          <div className="hero-small-image"><img src={mediaUrl("embroidered-lace/embroidered-lace-gold-floral.webp")} alt="gold floral embroidered mesh lace trim" width="1100" height="1100" decoding="async" /></div>
          <div className="hero-stamp"><Sparkles size={18} /><span>Custom colors<br />& motifs</span></div>
        </div>
      </section>

      <section className="stats service-proof" aria-label="Wholesale service capabilities">
        <div><strong>Guangzhou</strong><span>Textile supply chain access</span></div><div><strong>Custom</strong><span>Sampling from your reference</span></div><div><strong>Flexible</strong><span>MOQ by design and process</span></div><div><strong>Global</strong><span>Export and shipping support</span></div>
      </section>

      <section className="section featured-lace-section">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Featured embroidered lace</p><h2>Butterfly & floral collection.</h2><p>Soft mesh lace trims in delicate colors for dresses, childrenswear, occasionwear and decorative fashion details.</p></div>
        <div className="featured-swatch-grid">{featuredEmbroidery.map(([name, image, alt]) => <a href="/embroidery-lace" key={name}><img src={mediaUrl(image)} alt={alt} width="1100" height="1100" loading="lazy" decoding="async" /><span>{name}</span></a>)}</div>
        <div className="featured-lace-actions"><a className="button button-gold" href="/embroidery-lace">Explore embroidered lace <ArrowRight size={16} /></a><a className="text-link" href="https://ruiyuelai.x.yupoo.com/albums/244212977?uid=1" target="_blank" rel="noreferrer">View full photo album <ArrowRight size={15} /></a></div>
      </section>

      <section className="section" id="collections">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Product categories</p><h2>Lace collections for modern fashion.</h2></div><p>Explore wholesale-ready collections, then customize the color, width, motif and finish for your brand or garment program.</p></div>
        <div className="category-spec-grid">{categories.map((item, i) => <article className="category-spec-card" key={item.slug}>
          <a className="category-spec-image" href={`/${item.slug}`}><img src={item.image} alt={item.alt} width="900" height="700" loading="lazy" decoding="async" /><span>0{i + 1}</span></a>
          <div className="category-spec-body">
            <span className="category-spec-tag">Custom & wholesale</span>
            <h3><a href={`/${item.slug}`}>{item.name}</a></h3>
            <p>{item.description}</p>
            <dl><div><dt>MOQ</dt><dd>Flexible</dd></div><div><dt>Sample</dt><dd>7–14 days</dd></div><div><dt>Service</dt><dd>OEM / Custom</dd></div></dl>
            <a className="category-spec-cta" href={`/${item.slug}`}>View & request quote <ArrowRight size={15} /></a>
          </div>
        </article>)}</div>
      </section>

      <section className="section trending-section" id="products">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Trending lace collections</p><h2>Styles buyers are sourcing now.</h2></div><a className="text-link" href="/#contact">Request the full catalog <ArrowRight size={15} /></a></div>
        <div className="product-grid product-grid-three">{trendingProducts.map((product) => <ProductCard key={product.id} {...product} />)}</div>
      </section>

      <aside className="mid-cta"><div><p>Have a reference image, sample or tech pack?</p><h2>Get a sourcing recommendation before you order.</h2></div><a className="button button-light" href="#contact">Request samples & quote <ArrowRight size={17} /></a></aside>

      <section className="section application-section">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Lace trim applications</p><h2>Designed around the final garment.</h2><p>Tell us where the lace will be used and we will recommend the right construction, weight and finish.</p></div>
        <div className="application-grid">{applications.map((item) => <article key={item.title}><img src={item.image} alt={item.alt} width="700" height="900" loading="lazy" decoding="async" /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section className="why-section" id="about">
        <div className="why-intro"><p className="eyebrow eyebrow-light"><span /> Why choose us</p><h2>Why Choose<br /><em>Velorace Lace?</em></h2><p>A sourcing partner that understands fashion detail, wholesale timelines and the importance of consistent repeat orders.</p><a className="button button-light" href="/about-us">About our company <ArrowRight size={17} /></a></div>
        <div className="why-grid">{advantages.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section process-section">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Custom lace development process</p><h2>From your idea to worldwide delivery.</h2></div>
        <div className="process-grid process-grid-six">{process.map(([number, title, Icon]) => <article className="process-card" key={number}><span>{number}</span><Icon /><h3>{title}</h3></article>)}</div>
      </section>

      <section className="factory-section">
        <div className="factory-copy"><p className="eyebrow"><span /> Supply chain & quality workflow</p><h2>Your Lace Sourcing & Production Partner in Guangzhou</h2><p>Velorace Lace coordinates design selection, sample development, production follow-up and finished-product review through professional lace manufacturing resources in Guangzhou. We give overseas buyers one clear point of contact from reference to delivery.</p><ul><li><UsersRound size={17} /> Dedicated wholesale communication</li><li><Box size={17} /> Approved sample as the bulk reference</li><li><Factory size={17} /> Production partner coordination</li></ul><a className="button button-dark" href="/about-us">See how we work <ArrowRight size={17} /></a></div>
        <div className="factory-gallery">
          <figure><img src={mediaUrl("pastel-assortment.jpg")} alt="3D floral lace applique design selection" width="700" height="700" loading="lazy" decoding="async" /><figcaption>Design selection</figcaption></figure>
          <figure><img src={mediaUrl("grey-rhinestone.jpg")} alt="grey layered rhinestone lace applique detail" width="700" height="700" loading="lazy" decoding="async" /><figcaption>Material and finish review</figcaption></figure>
          <figure><img src={mediaUrl("pastel-collection.jpg")} alt="pastel embroidery applique color development" width="700" height="700" loading="lazy" decoding="async" /><figcaption>Sample development</figcaption></figure>
          <figure><img src={mediaUrl("beaded-neckline.jpg")} alt="finished white beaded bridal applique review" width="700" height="700" loading="lazy" decoding="async" /><figcaption>Finished product review</figcaption></figure>
        </div>
      </section>

      <section className="section faq-section" id="faq"><div className="section-heading centered-heading"><p className="eyebrow"><span /> Wholesale FAQ</p><h2>Answers before you start sourcing.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="quote-section" id="contact">
        <div className="quote-intro"><p className="eyebrow eyebrow-light"><span /> Wholesale inquiry</p><h2>Request samples,<br />catalog or <em>pricing.</em></h2><p>Share your application, target quantity and destination. Our trade team will reply with suitable options, MOQ and lead time.</p><ul><li><BadgeCheck size={17} /> Free sample discussion</li><li><BadgeCheck size={17} /> Custom design support</li><li><BadgeCheck size={17} /> Confidential sourcing</li></ul></div>
        <QuoteForm />
      </section>

      <section className="section blog-preview">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Buyer resources</p><h2>Lace sourcing insights.</h2></div><a className="text-link" href="/blog">Visit the blog <ArrowRight size={15} /></a></div>
        <div className="blog-grid">{articles.slice(0, 3).map((article) => <article className="blog-card" key={article.slug}><a href={`/blog/${article.slug}`}><img src={article.image} alt={article.alt} width="800" height="590" loading="lazy" decoding="async" /></a><span>{article.keyword}</span><h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3><p>{article.description}</p><a className="text-link" href={`/blog/${article.slug}`}>Read article <ArrowRight size={14} /></a></article>)}</div>
      </section>
    </main>
  );
}
