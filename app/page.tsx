import { ArrowRight, BadgeCheck, Box, Factory, Globe2, Lightbulb, PackageCheck, Palette, Send, Sparkles, SwatchBook, Truck, UsersRound } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import { articles, categories, trendingProducts } from "@/lib/site-data";
import { mediaUrl } from "@/lib/media";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("China Lace & Garment Accessories Supplier for Fashion Brands", "Velorace Lace supplies custom lace trims, bridal lace, embroidery and 3D appliques for global fashion brands and garment manufacturers.", "/");

const trust = ["Guangzhou China Supply Chain", "OEM & Custom Design", "Worldwide Shipping", "Low MOQ Available"];
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
          <p className="eyebrow"><span /> China lace trim manufacturer</p>
          <h1>Custom Lace Trims for Fashion Brands & <em>Garment Factories.</em></h1>
          <p className="hero-lead">Velorace Lace is a Guangzhou-based lace and garment accessories supplier specializing in embroidery lace, lace trims, bridal lace and 3D appliques. We support global buyers with sample development, production coordination and wholesale supply.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Request samples & quote <ArrowRight size={17} /></a><a className="text-link" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">Request wholesale catalog <ArrowRight size={15} /></a></div>
          <div className="trust-badges">{trust.map((item) => <span key={item}><BadgeCheck size={15} />{item}</span>)}</div>
        </div>
        <div className="hero-visual" aria-label="Premium embroidery lace and 3D floral appliques">
          <div className="hero-main-image"><img src={mediaUrl("pastel-assortment.jpg")} alt="pastel 3D flower lace applique supplier" width="1200" height="1200" fetchPriority="high" decoding="async" /></div>
          <div className="hero-small-image"><img src={mediaUrl("beaded-neckline.jpg")} alt="white beaded bridal applique supplier" width="600" height="600" decoding="async" /></div>
          <div className="hero-stamp"><Sparkles size={18} /><span>Custom lace<br />for global brands</span></div>
        </div>
      </section>

      <section className="stats service-proof" aria-label="Wholesale service capabilities">
        <div><strong>Guangzhou</strong><span>Textile supply chain access</span></div><div><strong>Custom</strong><span>Sampling from your reference</span></div><div><strong>Flexible</strong><span>MOQ by design and process</span></div><div><strong>Global</strong><span>Export and shipping support</span></div>
      </section>

      <section className="section" id="collections">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Product categories</p><h2>Lace collections for modern fashion.</h2></div><p>Explore wholesale-ready collections, then customize the color, width, motif and finish for your brand or garment program.</p></div>
        <div className="category-grid">{categories.map((item, i) => <a className="category-card" href={`/${item.slug}`} key={item.slug}><img src={item.image} alt={item.alt} width="900" height="700" loading="lazy" decoding="async" /><span className="category-shade" /><span className="category-index">0{i + 1}</span><span className="category-copy"><strong>{item.name}</strong><small>{item.description}</small></span><span className="round-arrow"><ArrowRight size={18} /></span></a>)}</div>
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
