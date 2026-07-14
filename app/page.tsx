import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Factory,
  Globe2,
  Lightbulb,
  PackageCheck,
  Palette,
  SearchCheck,
  Sparkles,
  SwatchBook,
  Truck,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { mediaUrl } from "@/lib/media";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Premium Lace Manufacturer & Custom Embellishment Supplier",
  "VELORACE LACE supplies lace trims, embroidered appliqués, beaded motifs and custom garment embellishments for bridal brands, designers and garment manufacturers worldwide.",
  "/",
  "/images/about/about-hero.webp",
);

const trust = [
  ["Guangzhou", "Lace production & sourcing network"],
  ["Custom", "Color, motif and size development"],
  ["Flexible", "MOQ based on design and process"],
  ["Worldwide", "Export packing and shipping support"],
] as const;

const trends = [
  { name: "3D Floral Appliqué", type: "Dimensional", href: "/3d-flower-applique", image: "/products/home-ranges/3d-floral.webp", alt: "colorful 3D floral appliqué collection" },
  { name: "Beaded & Pearl Motif", type: "Hand-finished", href: "/bridal-lace", image: "/products/home-ranges/bead-rhinestone.webp", alt: "beaded and rhinestone embroidery motifs" },
  { name: "Embroidery Appliqué", type: "Couture", href: "/embroidery-lace", image: "/products/home-ranges/embroidery-appliques.webp", alt: "blue and ivory embroidery appliqués" },
  { name: "Crochet & Guipure", type: "Textured", href: "/lace-trim", image: "/products/home-ranges/crochet-guipure.webp", alt: "white crochet and guipure lace motifs" },
  { name: "Butterfly Mesh Lace", type: "Romantic", href: "/embroidery-lace", image: "/products/embroidered-lace/embroidered-lace-butterfly.webp", alt: "pastel butterfly embroidered mesh lace" },
  { name: "Gold Floral Lace", type: "Metallic", href: "/embroidery-lace", image: "/products/embroidered-lace/embroidered-lace-gold-floral.webp", alt: "gold floral embroidered lace trim" },
  { name: "Aqua Floral Lace", type: "Color trend", href: "/embroidery-lace", image: "/products/embroidered-lace/embroidered-lace-aqua-floral.webp", alt: "aqua floral embroidered lace trim" },
  { name: "Blush Floral Lace", type: "Bridal color", href: "/embroidery-lace", image: "/products/embroidered-lace/embroidered-lace-blush-floral.webp", alt: "blush pink floral embroidered lace" },
  { name: "Scalloped Lace Trim", type: "Fine detail", href: "/lace-trim", image: "/products/embroidered-lace/embroidered-lace-scallop.webp", alt: "pink scalloped floral embroidered lace" },
  { name: "Elegant Lace Trim", type: "Collection", href: "/lace-trim", image: "/products/home-ranges/elegant-lace.webp", alt: "decorative lace trim selection in multiple colors" },
] as const;

const manufacturingProcess = [
  ["01", "Requirement Review", SearchCheck, "Application, color, dimensions, quantity and target finish are confirmed."],
  ["02", "Design & Material", Palette, "Suitable bases, threads, motifs and embellishment methods are selected."],
  ["03", "Sample Development", Sparkles, "A physical sample or color reference is prepared for approval."],
  ["04", "Production", Factory, "Production follows the approved reference and confirmed order details."],
  ["05", "Quality Inspection", PackageCheck, "Workmanship, color, dimensions and decorative details are reviewed."],
  ["06", "Packing & Delivery", Truck, "Export packing and international shipping are coordinated for the destination."],
] as const;

const applications = [
  { title: "Bridal & Wedding", text: "Lace trims and appliqués for gowns, veils, bodices and bridal accessories.", image: mediaUrl("luxury-beaded.jpg"), alt: "beaded bridal lace applique for wedding gown design" },
  { title: "Eveningwear & Couture", text: "Statement motifs and dimensional embellishments for occasion and couture collections.", image: mediaUrl("grey-rhinestone.jpg"), alt: "rhinestone lace applique for eveningwear and couture" },
  { title: "Fashion Apparel", text: "Decorative trims for dresses, tops, lingerie, dancewear and designer garments.", image: mediaUrl("pastel-collection.jpg"), alt: "pastel embroidered embellishments for fashion apparel" },
  { title: "Accessories & Craft", text: "Wholesale lace and motifs for bags, headpieces, gifts and creative accessories.", image: mediaUrl("yellow-floral.jpg"), alt: "floral lace motifs for accessories and creative products" },
];

const advantages = [
  { icon: Factory, title: "Guangzhou Supply Network", text: "Access specialized lace and garment-accessory production resources through one trade contact." },
  { icon: Lightbulb, title: "Custom Development", text: "Develop colors, motifs, dimensions, materials, beadwork and finishing details." },
  { icon: Boxes, title: "Flexible Order Solutions", text: "Support for samples, small wholesale orders and repeat production programs." },
  { icon: SwatchBook, title: "Bridal & Fashion Focus", text: "Collections selected for bridal, eveningwear, couture and modern fashion applications." },
  { icon: BadgeCheck, title: "Quality Review", text: "Finished products are reviewed against the approved sample and order requirements." },
  { icon: Globe2, title: "International Service", text: "Responsive export communication, packing coordination and worldwide delivery options." },
];

export default function Home() {
  return (
    <main>
      <section className="loti-hero home-b2b-hero" id="home">
        <Image className="loti-hero-background" src="/images/about/about-hero.webp" alt="premium blue and ivory embroidered appliqués" width={1100} height={1100} priority sizes="100vw" />
        <span className="loti-hero-overlay" />
        <div className="loti-hero-content">
          <p className="loti-kicker">Guangzhou Lace Manufacturing & Sourcing</p>
          <h1>Premium Lace Trims & Embellishments for <em>Global Fashion Brands.</em></h1>
          <p>VELORACE LACE supports bridal brands, fashion designers and garment manufacturers with product selection, custom development, coordinated production and reliable wholesale supply.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contact">Request samples & quote <ArrowRight size={17} /></a><a className="button button-outline" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">Discuss your project <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section className="stats home-trust-stats" aria-label="Wholesale service capabilities">
        {trust.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}
      </section>

      <section className="section home-trend-section" id="collections">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> 2026 collection direction</p><h2>Trending lace for bridal & fashion.</h2></div><p>A focused selection of textures, colors and embellishment techniques for upcoming bridal, occasionwear and fashion programs.</p></div>
        <div className="trend-product-grid">{trends.map((item, index) => <a href={item.href} key={item.name} className="trend-product-card"><div><Image src={item.image} alt={item.alt} width={1100} height={1100} sizes="(max-width: 700px) 50vw, 20vw" /><span>{String(index + 1).padStart(2, "0")}</span></div><small>{item.type}</small><h3>{item.name}</h3></a>)}</div>
        <div className="home-section-action"><a className="button button-dark" href="/products">Explore product collections <ArrowRight size={16} /></a></div>
      </section>

      <section className="home-capability-section">
        <div className="home-capability-copy"><p className="eyebrow"><span /> Factory capability</p><h2>Manufacturing support for dependable wholesale supply.</h2><p>We coordinate suitable embroidery, lace and embellishment production resources according to each design, technique and order requirement. Buyers receive one clear point of contact from sampling through delivery.</p><ul><li><BadgeCheck /> Specialized embroidery and lace production</li><li><BadgeCheck /> Material and color coordination</li><li><BadgeCheck /> In-process follow-up and finished-product review</li><li><BadgeCheck /> Export packing and logistics support</li></ul><small>Production imagery is illustrative. Specific production arrangements vary by product and order.</small><a className="button button-dark" href="/about">About our capabilities <ArrowRight size={16} /></a></div>
        <div className="home-capability-media"><Image src="/images/home/production-workflow-reference.webp" alt="illustrative embroidery, inspection, finishing and material storage stages" width={856} height={572} sizes="(max-width: 900px) 100vw, 55vw" /></div>
      </section>

      <section className="section home-manufacturing-section" id="manufacturing">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Manufacturing process</p><h2>From requirement to delivery.</h2><p>A clear approval workflow helps protect quality, timing and repeat-order consistency.</p></div>
        <div className="home-process-grid">{manufacturingProcess.map(([number, title, Icon, text]) => <article key={number}><span>{number}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section application-section home-applications-section">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Lace applications</p><h2>Developed around the final garment.</h2><p>Share the intended application so we can recommend the right construction, weight, hand feel and decorative finish.</p></div>
        <div className="application-grid">{applications.map((item) => <article key={item.title}><img src={item.image} alt={item.alt} width="700" height="900" loading="lazy" decoding="async" /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section className="home-custom-section">
        <div className="home-custom-media"><Image src="/images/about/custom-development.webp" alt="beaded and rhinestone appliqués for custom garment development" width={1100} height={1100} sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="home-custom-copy"><p className="eyebrow"><span /> Custom lace development</p><h2>Turn a reference into a production-ready detail.</h2><p>Send a sketch, tech pack, product photo or physical sample. We help evaluate the construction and develop the color, size, material and decorative finish for your target application.</p><div>{["Motif and dimension adjustment", "Pantone and fabric color matching", "Pearl, bead, sequin and rhinestone options", "Sample approval before production"].map((item) => <span key={item}><BadgeCheck />{item}</span>)}</div><a className="button button-dark" href="/custom-design">Start custom development <ArrowRight size={16} /></a></div>
      </section>

      <section className="why-section home-why-section" id="about">
        <div className="why-intro"><p className="eyebrow eyebrow-light"><span /> Why choose us</p><h2>A focused partner for <em>global fashion buyers.</em></h2><p>Professional sourcing support, practical customization and clear communication for wholesale lace and embellishment projects.</p><a className="button button-light" href="/about">About VELORACE LACE <ArrowRight size={17} /></a></div>
        <div className="why-grid home-why-grid">{advantages.map(({ icon: Icon, title, text }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="quote-section" id="contact">
        <div className="quote-intro"><p className="eyebrow eyebrow-light"><span /> Wholesale inquiry</p><h2>Discuss your next<br />lace <em>collection.</em></h2><p>Share the product type, application, quantity, color, dimensions and destination. We will reply with suitable options, MOQ and the next sampling steps.</p><ul><li><BadgeCheck size={17} /> Product selection support</li><li><BadgeCheck size={17} /> Custom design development</li><li><BadgeCheck size={17} /> Worldwide shipping coordination</li></ul></div>
        <QuoteForm />
      </section>
    </main>
  );
}
