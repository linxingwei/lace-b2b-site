import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Flower2,
  Gem,
  Globe2,
  MessageCircle,
  PackageCheck,
  Palette,
  Scissors,
  SearchCheck,
  Sparkles,
  SwatchBook,
  UsersRound,
} from "lucide-react";
import { absoluteUrl, siteUrl } from "@/lib/seo";

const pageTitle = "About Velora Lace | Lace Trim & Embroidery Appliqué Supplier";
const pageDescription = "Learn about Velora Lace, a Guangzhou-based supplier of lace trims, embroidered appliqués, beaded motifs and custom fashion embellishments for bridal and garment businesses worldwide.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/about`,
    type: "website",
    locale: "en_US",
    siteName: "Velora Lace",
    images: [{ url: absoluteUrl("/images/about/about-hero.webp"), width: 1100, height: 1100, alt: "Premium embroidered appliqués supplied by Velora Lace" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [absoluteUrl("/images/about/about-hero.webp")] },
  keywords: ["lace trim supplier", "embroidery appliqué manufacturer", "bridal lace supplier", "beaded appliqué wholesale", "custom garment accessories", "Guangzhou lace supplier", "fashion embellishment supplier"],
};

const expertise = [
  { icon: Scissors, title: "Lace Trims", text: "Elegant lace borders and decorative trims for bridal and fashion garments." },
  { icon: SwatchBook, title: "Embroidered Appliqués", text: "Detailed motifs for dresses, gowns, veils and couture applications." },
  { icon: Gem, title: "Beaded & Rhinestone Motifs", text: "Hand-finished embellishments with beads, sequins, pearls and rhinestones." },
  { icon: Flower2, title: "3D Floral Embellishments", text: "Layered floral designs that add texture, volume and visual impact." },
  { icon: Palette, title: "Custom Development", text: "Support for custom colors, sizes, patterns, materials and decorative details." },
  { icon: Boxes, title: "Wholesale Supply", text: "Flexible sourcing support for samples, small orders and repeat production." },
];

const advantages = [
  { icon: SearchCheck, title: "Direct Sourcing Support", text: "Access a wide selection of lace and garment-accessory designs through our Guangzhou sourcing and production network." },
  { icon: Boxes, title: "Flexible Order Solutions", text: "We support product sampling, small wholesale orders and repeat production according to each project." },
  { icon: Palette, title: "Custom Design Development", text: "Colors, dimensions, materials, beadwork and decorative details can be developed for specific applications." },
  { icon: Sparkles, title: "Bridal & Fashion Expertise", text: "Our collections are selected for wedding dresses, evening gowns, couture garments and modern fashion." },
  { icon: PackageCheck, title: "Quality Inspection", text: "Products are inspected for workmanship, color, dimensions and decorative details before shipment." },
  { icon: Globe2, title: "Worldwide Delivery", text: "International shipping options can be arranged according to destination, order volume and delivery requirements." },
];

const process = [
  { number: "01", title: "Share Your Requirements", text: "Send us product photos, quantities, colors, dimensions or application details." },
  { number: "02", title: "Product Selection & Quotation", text: "We recommend suitable products and provide pricing and customization options." },
  { number: "03", title: "Sampling & Confirmation", text: "Samples or color references can be prepared for review before bulk production." },
  { number: "04", title: "Production & Delivery", text: "After confirmation, we arrange production, quality inspection and international shipping." },
];

const customerTypes = ["Bridal Studios", "Fashion Designers", "Eveningwear Brands", "Garment Manufacturers", "Fabric & Trim Wholesalers", "Boutiques and Online Sellers"];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Velora Lace",
        legalName: "Guangzhou Ruiyuelai Trading Co., Ltd.",
        url: siteUrl,
        telephone: "+86 157 6795 6637",
        email: "1650378792@qq.com",
        address: { "@type": "PostalAddress", addressLocality: "Guangzhou", addressRegion: "Guangdong", addressCountry: "CN" },
        sameAs: ["https://wa.me/message/IXEEGXESENF6F1"],
      },
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about#webpage`,
        name: pageTitle,
        description: pageDescription,
        url: `${siteUrl}/about`,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        breadcrumb: { "@id": `${siteUrl}/about#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/about#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "About Us", item: `${siteUrl}/about` },
        ],
      },
    ],
  };

  return (
    <main className="about-page-v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="about-hero-v2">
        <Image src="/images/about/about-hero.webp" alt="Premium blue and ivory embroidered appliqués with pearl details" width={1100} height={1100} priority sizes="100vw" />
        <span className="about-hero-shade" />
        <div>
          <nav className="breadcrumb breadcrumb-light" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">About Us</span></nav>
          <p>Guangzhou lace & garment accessories supplier</p>
          <h1>ABOUT VELORA LACE</h1>
          <h2>Crafted Details · Flexible Customization · Reliable Supply</h2>
          <span>Premium lace trims, embroidered appliqués and fashion embellishments for bridal, eveningwear and contemporary fashion.</span>
        </div>
      </section>

      <section className="about-intro-v2">
        <div className="about-media-frame"><Image src="/images/about/lace-product-selection.webp" alt="Colorful lace trims and floral embellishments available for wholesale selection" width={1100} height={1100} sizes="(max-width: 1000px) 100vw, 50vw" /></div>
        <div className="about-copy-block">
          <p className="eyebrow"><span /> About our company</p>
          <h2>Your Lace & Embellishment Sourcing Partner</h2>
          <p>Velora Lace is a Guangzhou-based supplier of premium lace trims, embroidered appliqués, beaded motifs, 3D floral embellishments and custom garment accessories.</p>
          <p>Located close to Guangzhou’s major textile and garment-accessory sourcing network, we help international buyers discover new designs, develop customized products and manage flexible wholesale orders.</p>
          <p>Our products are developed for bridal gowns, evening dresses, couture collections, dancewear, occasionwear and fashion accessories. We work with designers, boutiques, wholesalers, fashion brands and garment manufacturers around the world.</p>
          <p>From product selection and color matching to sampling, production and international delivery, our goal is to make the sourcing process clear, efficient and dependable.</p>
          <a className="button button-dark" href="/contact">Request a quote <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="section about-expertise-v2">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Product expertise</p><h2>WHAT WE SPECIALIZE IN</h2><p>Product sourcing and development support for bridal, couture, occasionwear and contemporary fashion projects.</p></div>
        <div className="about-card-grid">{expertise.map(({ icon: Icon, title, text }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="about-mission-v2">
        <div className="about-copy-block">
          <p className="eyebrow"><span /> Our purpose</p>
          <h2>OUR MISSION</h2>
          <p>Our mission is to help fashion businesses source distinctive lace and embellishments with greater flexibility, transparency and confidence.</p>
          <p>We focus on product quality, responsive communication and practical customization. Whether a customer is testing a new design or preparing a larger production order, we aim to provide professional support at every stage.</p>
          <ul>{["Carefully Selected Materials", "Flexible Customization Support", "Consistent Quality Control", "Responsive International Service"].map((item) => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul>
        </div>
        <div className="about-media-frame"><Image src="/images/about/custom-development.webp" alt="Beaded and rhinestone appliqué selection for bridal and fashion development" width={1100} height={1100} sizes="(max-width: 1000px) 100vw, 50vw" /></div>
      </section>

      <section className="section about-advantages-v2">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Buyer advantages</p><h2>WHY CHOOSE VELORA LACE</h2></div>
        <div className="about-card-grid about-advantage-grid">{advantages.map(({ icon: Icon, title, text }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section about-process-v2">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Sourcing process</p><h2>HOW WE WORK</h2></div>
        <div className="about-timeline">{process.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </section>

      <section className="about-clients-v2">
        <div className="about-media-frame"><Image src="/images/about/fashion-embellishments.webp" alt="Colorful 3D floral embellishments for bridal and fashion applications" width={1100} height={1100} sizes="(max-width: 1000px) 100vw, 50vw" /></div>
        <div className="about-copy-block">
          <p className="eyebrow"><span /> Customer partnerships</p>
          <h2>WHO WE WORK WITH</h2>
          <p>We support independent studios and established businesses that need clear product selection, custom development and dependable wholesale coordination.</p>
          <div className="about-client-list">{customerTypes.map((item) => <span key={item}><UsersRound aria-hidden="true" />{item}</span>)}</div>
        </div>
      </section>

      <section className="about-final-cta">
        <div><p>Start your next sourcing project</p><h2>Looking for Lace or Custom Embellishments?</h2><span>Tell us what you are developing. Send a reference image, required quantity, color and size, and our team will help you find or customize a suitable solution.</span></div>
        <div><a className="button button-light" href="/contact">Request a quote <ArrowRight size={17} /></a><a className="button button-whatsapp" href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Contact us on WhatsApp</a></div>
      </section>
    </main>
  );
}
