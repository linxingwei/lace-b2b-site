import { ArrowRight, BadgeCheck, Box, Factory, Globe2, Lightbulb, PackageCheck, Palette, Send, Sparkles, SwatchBook, Truck, UsersRound } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import { articles, categories, trendingProducts } from "@/lib/site-data";
import { mediaUrl } from "@/lib/media";

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

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> China lace trim manufacturer</p>
          <h1>Wholesale Lace Trim Manufacturer & Garment Accessories Supplier <em>in China.</em></h1>
          <p className="hero-lead">Velorace Lace specializes in embroidery lace, lace trims, bridal lace, 3D appliques and fashion accessories. We support global brands, designers and garment manufacturers with custom development and wholesale supply.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Get free samples <ArrowRight size={17} /></a><a className="text-link" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">Request wholesale catalog <ArrowRight size={15} /></a></div>
          <div className="trust-badges">{trust.map((item) => <span key={item}><BadgeCheck size={15} />{item}</span>)}</div>
        </div>
        <div className="hero-visual" aria-label="Premium embroidery lace and 3D floral appliques">
          <div className="hero-main-image"><img src={mediaUrl("pastel-assortment.jpg")} alt="pastel 3D flower lace applique manufacturer" /></div>
          <div className="hero-small-image"><img src={mediaUrl("beaded-neckline.jpg")} alt="white bridal lace applique manufacturer" /></div>
          <div className="hero-stamp"><Sparkles size={18} /><span>Custom lace<br />for global brands</span></div>
        </div>
      </section>

      <section className="stats" aria-label="Wholesale service statistics">
        <div><strong>500+</strong><span>Brands and buyers served</span></div><div><strong>6</strong><span>Core lace categories</span></div><div><strong>24h</strong><span>Wholesale reply target</span></div><div><strong>100%</strong><span>Pre-shipment inspection</span></div>
      </section>

      <section className="section" id="collections">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Product categories</p><h2>Lace collections for modern fashion.</h2></div><p>Explore wholesale-ready collections, then customize the color, width, motif and finish for your brand or garment program.</p></div>
        <div className="category-grid">{categories.map((item, i) => <a className="category-card" href={`/${item.slug}`} key={item.slug}><img src={item.image} alt={item.alt} /><span className="category-shade" /><span className="category-index">0{i + 1}</span><span className="category-copy"><strong>{item.name}</strong><small>{item.description}</small></span><span className="round-arrow"><ArrowRight size={18} /></span></a>)}</div>
      </section>

      <section className="section trending-section" id="products">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Trending lace collections</p><h2>Styles buyers are sourcing now.</h2></div><a className="text-link" href="/#contact">Request the full catalog <ArrowRight size={15} /></a></div>
        <div className="product-grid product-grid-three">{trendingProducts.map((product) => <ProductCard key={product.id} {...product} />)}</div>
      </section>

      <section className="section application-section">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Lace trim applications</p><h2>Designed around the final garment.</h2><p>Tell us where the lace will be used and we will recommend the right construction, weight and finish.</p></div>
        <div className="application-grid">{applications.map((item) => <article key={item.title}><img src={item.image} alt={item.alt} /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
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
        <div className="factory-copy"><p className="eyebrow"><span /> Factory advantage</p><h2>Your Reliable Lace Partner in China</h2><p>Based in Guangzhou, China, Velorace Lace connects global buyers with professional lace manufacturing resources. We help fashion brands and garment factories develop unique trims and accessories.</p><ul><li><UsersRound size={17} /> Dedicated wholesale communication</li><li><Box size={17} /> Sample-to-bulk quality control</li><li><Factory size={17} /> Flexible production coordination</li></ul><a className="button button-dark" href="/custom-design">View custom service <ArrowRight size={17} /></a></div>
        <div className="factory-gallery">
          <figure><img src={mediaUrl("pastel-assortment.jpg")} alt="lace samples for wholesale buyers" /><figcaption>Lace samples</figcaption></figure>
          <figure><img src={mediaUrl("grey-rhinestone.jpg")} alt="embellished lace production quality inspection" /><figcaption>Production details</figcaption></figure>
          <figure><img src={mediaUrl("pastel-collection.jpg")} alt="lace product selection and color development" /><figcaption>Color development</figcaption></figure>
          <figure><img src={mediaUrl("beaded-neckline.jpg")} alt="bridal lace applique prepared for export packaging" /><figcaption>Quality and packing</figcaption></figure>
        </div>
      </section>

      <section className="section blog-preview">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Buyer resources</p><h2>Lace sourcing insights.</h2></div><a className="text-link" href="/blog">Visit the blog <ArrowRight size={15} /></a></div>
        <div className="blog-grid">{articles.slice(0, 3).map((article) => <article className="blog-card" key={article.slug}><a href={`/blog/${article.slug}`}><img src={article.image} alt={article.alt} /></a><span>{article.keyword}</span><h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3><p>{article.description}</p><a className="text-link" href={`/blog/${article.slug}`}>Read article <ArrowRight size={14} /></a></article>)}</div>
      </section>

      <section className="quote-section" id="contact">
        <div className="quote-intro"><p className="eyebrow eyebrow-light"><span /> Wholesale inquiry</p><h2>Request samples,<br />catalog or <em>pricing.</em></h2><p>Share your application, target quantity and destination. Our trade team will reply with suitable options, MOQ and lead time.</p><ul><li><BadgeCheck size={17} /> Free sample discussion</li><li><BadgeCheck size={17} /> Custom design support</li><li><BadgeCheck size={17} /> Confidential sourcing</li></ul></div>
        <QuoteForm />
      </section>
    </main>
  );
}
