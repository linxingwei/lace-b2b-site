import { ArrowRight, BadgeCheck, Box, Factory, Palette, SearchCheck } from "lucide-react";
import { mediaUrl } from "@/lib/media";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("About Our Guangzhou Lace Supply Company", "Learn how Velorace Lace supports global fashion buyers with Guangzhou lace sourcing, custom development, production coordination and finished-product review.", "/about-us", mediaUrl("beaded-neckline.jpg"));

const workflow = [
  { icon: SearchCheck, title: "Product Sourcing", text: "We review your application, reference, quantity and target price before recommending suitable lace resources." },
  { icon: Palette, title: "Sample Development", text: "Material, color, size, motif and embellishment are translated into a physical approval sample." },
  { icon: Factory, title: "Production Coordination", text: "We coordinate with specialized lace production resources based on the approved construction and order requirements." },
  { icon: Box, title: "Finished-Product Review", text: "Bulk output is reviewed against the approved reference before export packing and delivery coordination." },
];

export default function AboutPage() {
  return <main>
    <section className="page-hero"><p className="eyebrow"><span /> About Velorace Lace</p><h1>A Guangzhou lace partner<br /><em>built for global buyers.</em></h1><p>Velorace Lace is the international-facing brand of Guangzhou Ruiyuelai Trading Co., Ltd. We connect fashion brands, bridal designers, garment manufacturers and wholesalers with professional lace and garment accessory resources in China.</p></section>

    <section className="about-story"><div><img src={mediaUrl("beaded-neckline.jpg")} alt="white beaded bridal applique supplied by Velorace Lace" width="900" height="900" fetchPriority="high" decoding="async" /></div><div><p className="eyebrow"><span /> Our role</p><h2>One clear point of contact.</h2><p>We coordinate product selection, sample development, color matching, production follow-up, finished-product review and export communication. Production arrangements are selected according to each design's materials, technique and order volume.</p><ul><li><BadgeCheck /> Professional English wholesale communication</li><li><BadgeCheck /> Custom lace and applique development</li><li><BadgeCheck /> Approved sample used as the bulk reference</li><li><BadgeCheck /> Worldwide shipping coordination</li></ul><a className="button button-dark" href="/#contact">Discuss your sourcing needs <ArrowRight size={17} /></a></div></section>

    <section className="section about-workflow"><div className="section-heading centered-heading"><p className="eyebrow"><span /> Production network & quality workflow</p><h2>How we support your order.</h2><p>Our value is coordination: matching the right production resource to the design, keeping approvals clear and helping overseas buyers follow one consistent process.</p></div><div className="service-grid about-service-grid">{workflow.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="about-gallery-section"><div className="factory-copy"><p className="eyebrow"><span /> Product development portfolio</p><h2>Materials, finishes and workmanship reviewed in detail.</h2><p>These close-up product examples show the type of dimensional embroidery, beading, color development and applique construction we coordinate. Because production arrangements vary by technique, process documentation is matched to the selected production route during sampling.</p><a className="button button-dark" href="/custom-design">View custom development <ArrowRight size={17} /></a></div><div className="factory-gallery"><figure><img src={mediaUrl("pastel-assortment.jpg")} alt="pastel dimensional floral applique details" width="700" height="700" loading="lazy" decoding="async" /><figcaption>Dimensional embroidery</figcaption></figure><figure><img src={mediaUrl("luxury-beaded.jpg")} alt="luxury beaded flower applique details" width="700" height="700" loading="lazy" decoding="async" /><figcaption>Beading and embellishment</figcaption></figure><figure><img src={mediaUrl("pastel-collection.jpg")} alt="pastel applique color development examples" width="700" height="700" loading="lazy" decoding="async" /><figcaption>Color development</figcaption></figure><figure><img src={mediaUrl("grey-rhinestone.jpg")} alt="layered rhinestone lace applique construction" width="700" height="700" loading="lazy" decoding="async" /><figcaption>Layered construction</figcaption></figure></div></section>

    <section className="final-cta"><p>Based in Guangzhou, serving buyers worldwide</p><h2>Build a clearer lace<br />sourcing process.</h2><a className="button button-light" href="/#contact">Request samples & quote <ArrowRight size={17} /></a></section>
  </main>;
}
