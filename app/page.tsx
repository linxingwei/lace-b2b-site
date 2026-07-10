import { ArrowRight, BadgeCheck, Box, Factory, Palette, Ruler, Send, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import { mediaUrl } from "@/lib/media";

const categories = [
  { name: "3D Floral Patches", note: "Dimensional petals & couture details", image: mediaUrl("pastel-assortment.jpg") },
  { name: "Elegant Lace Trim", note: "Mesh, cotton & guipure borders", image: mediaUrl("yellow-floral.jpg") },
  { name: "Bead & Rhinestone", note: "Hand-finished statement pieces", image: mediaUrl("grey-rhinestone.jpg") },
  { name: "Embroidery Appliqués", note: "Bridal, eveningwear & accessories", image: mediaUrl("beaded-neckline.jpg") },
  { name: "Crochet & Guipure", note: "Textural trims with clean edges", image: mediaUrl("gold-applique.png") },
  { name: "Custom Development", note: "From sketch or sample to production", image: mediaUrl("luxury-beaded.jpg") },
];

const products = [
  { id: "LP-2401", name: "Pastel Beaded 3D Floral Appliqué", category: "Embroidery Appliqués", image: mediaUrl("pastel-collection.jpg"), moq: "30 pairs", tag: "New" },
  { id: "LP-2402", name: "Luxury Beaded Flower Appliqué Set", category: "Bead & Rhinestone", image: mediaUrl("luxury-beaded.jpg"), moq: "30 pairs", tag: "Bestseller" },
  { id: "LP-2403", name: "Grey Layered Rhinestone Lace Appliqué", category: "Embroidery Appliqués", image: mediaUrl("grey-rhinestone.jpg"), moq: "50 pcs" },
  { id: "LP-2404", name: "Water-Soluble Floral Lace Pair", category: "Guipure", image: mediaUrl("yellow-floral.jpg"), moq: "30 pairs" },
  { id: "LP-2405", name: "Gold Sequin Floral Vine Appliqué", category: "Handcrafted Patch", image: mediaUrl("gold-applique.png"), moq: "50 pcs", tag: "Couture" },
  { id: "LP-2406", name: "White Beaded Leaf Neckline Appliqué", category: "Bridal Collection", image: mediaUrl("beaded-neckline.jpg"), moq: "30 pairs" },
];

const steps = [
  { n: "01", title: "Share your brief", text: "Send a photo, sketch, tech pack or physical sample with target quantity." },
  { n: "02", title: "Sample development", text: "We confirm material, color, dimensions and workmanship before sampling." },
  { n: "03", title: "Approve & produce", text: "Your approved sample becomes the production standard for every batch." },
  { n: "04", title: "QC & worldwide delivery", text: "Final inspection, secure packing and export support to your destination." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Lace, Trim & Appliqué Manufacturer · Guangzhou</p>
          <h1>Details that make<br />fashion <em>unforgettable.</em></h1>
          <p className="hero-lead">Factory-direct garment embellishments for fashion brands, bridal studios, importers and manufacturers worldwide. OEM / ODM, flexible MOQ and reliable production at scale.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#quote">Request wholesale pricing <ArrowRight size={17} /></a>
            <a className="text-link" href="#products">Explore the collection <ArrowRight size={15} /></a>
          </div>
          <div className="hero-trust">
            <div className="avatars" aria-hidden="true"><span>NY</span><span>LD</span><span>PA</span></div>
            <p><strong>Trusted by fashion professionals</strong><br />in 30+ countries</p>
          </div>
        </div>
        <div className="hero-visual" aria-label="Luxury floral lace appliqués">
          <div className="hero-main-image"><img src={mediaUrl("pastel-assortment.jpg")} alt="Pastel floral appliqués for bridal and couture fashion" /></div>
          <div className="hero-small-image"><img src={mediaUrl("gold-applique.png")} alt="Gold handcrafted floral appliqué" /></div>
          <div className="hero-stamp"><Sparkles size={18} /><span>Made for<br />your design</span></div>
        </div>
      </section>

      <section className="stats" aria-label="Factory statistics">
        <div><strong>500+</strong><span>Brands & buyers served</span></div>
        <div><strong>200K+</strong><span>Pieces monthly capacity</span></div>
        <div><strong>98%</strong><span>On-time delivery</span></div>
        <div><strong>100%</strong><span>Pre-shipment QC</span></div>
      </section>

      <section className="section" id="catalog">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> Production capabilities</p><h2>Browse our product ranges.</h2></div>
          <p>Every range is in active production and fully customizable. Choose a starting point, then tell us the color, size, finish and quantity you need.</p>
        </div>
        <div className="category-grid">
          {categories.map((item, i) => (
            <a className={`category-card category-${i + 1}`} href="#quote" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span className="category-shade" />
              <span className="category-index">0{i + 1}</span>
              <span className="category-copy"><strong>{item.name}</strong><small>{item.note}</small></span>
              <span className="round-arrow"><ArrowRight size={18} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="partnership" id="about">
        <div className="partnership-image"><img src={mediaUrl("beaded-neckline.jpg")} alt="White beaded lace embroidery for a bridal neckline" /></div>
        <div className="partnership-copy">
          <p className="eyebrow eyebrow-light"><span /> Why importers choose Velorace Lace</p>
          <h2>Built for wholesale and<br /><em>brand partnerships.</em></h2>
          <p>We bring material sourcing, embroidery, hand embellishment and quality control together under one production team. That means clearer communication, steadier quality and fewer surprises between sample and bulk order.</p>
          <div className="benefit-grid">
            <div><Factory /><strong>Factory direct</strong><span>Clear pricing and production visibility.</span></div>
            <div><Palette /><strong>True customization</strong><span>Color, size, motif, beading and backing.</span></div>
            <div><BadgeCheck /><strong>Approval-led QC</strong><span>Bulk production follows your signed sample.</span></div>
            <div><Box /><strong>Export ready</strong><span>Secure packing and worldwide shipping support.</span></div>
          </div>
          <a className="button button-light" href="#quote">Start a custom inquiry <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading centered-heading">
          <p className="eyebrow"><span /> Custom development</p>
          <h2>From your idea to production.</h2>
          <p>One accountable workflow for bridal, couture and ready-to-wear embellishments.</p>
        </div>
        <div className="process-grid">
          {steps.map((step, i) => <div className="process-card" key={step.n}><span>{step.n}</span>{i === 0 ? <Send /> : i === 1 ? <Ruler /> : i === 2 ? <Factory /> : <Box />}<h3>{step.title}</h3><p>{step.text}</p></div>)}
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> From the collection</p><h2>Featured products.</h2></div>
          <a className="text-link" href="#quote">Request the full catalog <ArrowRight size={15} /></a>
        </div>
        <div className="product-grid">{products.map((product) => <ProductCard key={product.id} {...product} />)}</div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <p className="eyebrow eyebrow-light"><span /> Request a quote</p>
          <h2>Tell us what<br />you’re <em>creating.</em></h2>
          <p>Share your specification and target quantity. Our trade team will reply with pricing, MOQ and lead time within 24 hours.</p>
          <ul><li><BadgeCheck size={17} /> No obligation</li><li><BadgeCheck size={17} /> Samples available</li><li><BadgeCheck size={17} /> Your design stays confidential</li></ul>
        </div>
        <QuoteForm />
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> FAQ</p><h2>What buyers usually ask.</h2></div>
        <div className="faq-list">
          <details open><summary>What is your minimum order quantity?<span>+</span></summary><p>MOQ depends on the construction and level of handwork. Stock designs typically start from 30–100 pieces or 50–100 yards. Custom designs are quoted individually.</p></details>
          <details><summary>Can you match our Pantone color or supplied fabric?<span>+</span></summary><p>Yes. We can match Pantone references, fabric swatches or existing samples. A lab dip or pre-production sample is confirmed before bulk production.</p></details>
          <details><summary>How long does sampling and production take?<span>+</span></summary><p>Most samples take 7–14 days. Standard bulk orders usually require 20–35 days after sample approval, depending on quantity and workmanship.</p></details>
          <details><summary>Do you ship internationally?<span>+</span></summary><p>Yes. We support express, air and sea freight and can work with your nominated forwarder or recommend a suitable shipping option.</p></details>
        </div>
      </section>

      <section className="final-cta"><p>Ready to develop your next collection?</p><h2>Let’s make the details<br />worth remembering.</h2><a className="button button-light" href="#quote">Request a quote <ArrowRight size={17} /></a></section>
    </main>
  );
}
