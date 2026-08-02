import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { absoluteUrl, createPageMetadata, siteName, siteUrl } from "@/lib/seo";

const pagePath = "/custom-embroidered-lace-trim";
const pageTitle = "Custom Embroidered Lace Trim Manufacturer";
const pageDescription = "Source custom embroidered lace trim for kidswear, bridal and fashion collections. VELORACE LACE supports motif, color, width, sampling and bulk production.";
const heroImage = "/images/custom-embroidered-lace-trim/red-crown-custom-lace-trim.webp";

const baseMetadata = createPageMetadata(pageTitle, pageDescription, pagePath, heroImage);

export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: "Custom Embroidered Lace Trim Manufacturer | Cute Lace for Kidswear & Fashion Brands" },
  keywords: [
    "embroidered lace trim",
    "custom lace trim manufacturer",
    "kids lace trim",
    "bridal lace trim",
    "cute lace trim",
    "custom embroidered lace",
  ],
  authors: [{ name: `${siteName} sourcing team`, url: siteUrl }],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Custom Embroidered Lace Trim Manufacturer | Cute Lace for Kidswear & Fashion Brands",
    type: "article",
    publishedTime: "2026-08-02",
    modifiedTime: "2026-08-02",
    authors: [siteUrl],
  },
};

const gallery = [
  {
    src: "/images/custom-embroidered-lace-trim/cute-chicken-embroidered-lace-trim.webp",
    alt: "Cute chicken embroidered lace trim for babywear and kids clothing",
    title: "Playful kidswear motifs",
    text: "Soft mesh, scalloped edges and recognizable characters for dresses, collars and nursery accessories.",
    width: 414,
    height: 175,
  },
  {
    src: "/images/custom-embroidered-lace-trim/green-vine-kids-lace-trim.webp",
    alt: "Green vine kids lace trim with white scalloped embroidery",
    title: "Nature-inspired details",
    text: "Clean vine embroidery adds a gentle botanical line to childrenswear and casual fashion.",
    width: 1000,
    height: 1000,
  },
  {
    src: "/images/custom-embroidered-lace-trim/white-crown-fashion-lace-trim.webp",
    alt: "White crown embroidered lace trim for fashion and special occasion garments",
    title: "Refined tonal embroidery",
    text: "Monochrome crowns create a polished look for occasionwear, accessories and premium packaging.",
    width: 1000,
    height: 1000,
  },
  {
    src: "/images/custom-embroidered-lace-trim/red-star-embroidered-lace-trim.webp",
    alt: "Red star embroidered lace trim with decorative white border",
    title: "Graphic fashion accents",
    text: "High-contrast star motifs bring rhythm and a youthful finish to seasonal fashion capsules.",
    width: 1000,
    height: 1000,
  },
  {
    src: "/images/custom-embroidered-lace-trim/candy-cane-holiday-lace-trim.webp",
    alt: "Candy cane and bow custom embroidered lace trim for holiday kidswear",
    title: "Seasonal custom programs",
    text: "Holiday icons can be developed in coordinated colors for limited collections and gifting ranges.",
    width: 1000,
    height: 1000,
  },
];

export default function CustomEmbroideredLaceTrimPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Embroidered Lace Trim Manufacturer | Cute Lace for Kidswear & Fashion Brands",
    description: pageDescription,
    image: [absoluteUrl(heroImage)],
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    mainEntityOfPage: absoluteUrl(pagePath),
    author: { "@type": "Organization", name: siteName, url: siteUrl },
    publisher: { "@id": `${siteUrl}/#organization` },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "Custom Embroidered Lace Trim", item: absoluteUrl(pagePath) },
    ],
  };

  return (
    <main className="custom-lace-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="custom-lace-hero">
        <div className="custom-lace-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span><span>Custom Embroidered Lace Trim</span>
          </nav>
          <p className="eyebrow"><span /> Custom lace sourcing guide</p>
          <h1>Custom Embroidered Lace Trim Manufacturer <em>Cute Lace for Kidswear &amp; Fashion Brands</em></h1>
          <p className="custom-lace-intro">From playful animal motifs to elegant tonal embroidery, the right trim can turn a simple garment into a recognizable collection. VELORACE LACE helps brands develop embroidered lace trim with considered color, scale, texture and production consistency.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="/contact">Request samples &amp; quote <ArrowRight size={17} /></a>
            <a className="text-link" href="#custom-development">See the development process <ArrowRight size={15} /></a>
          </div>
        </div>
        <figure className="custom-lace-hero-media">
          <Image
            src={heroImage}
            alt="Red crown custom embroidered lace trim shown with measuring tape"
            width={1000}
            height={1000}
            sizes="(max-width: 900px) 100vw, 48vw"
            priority
          />
          <figcaption>Custom motif, color, width and edge development</figcaption>
        </figure>
      </section>

      <section className="custom-lace-summary" aria-label="Custom lace capabilities">
        <div><strong>Custom motifs</strong><span>Characters, florals, crowns, stars and seasonal artwork</span></div>
        <div><strong>Color matching</strong><span>Thread, mesh and edge colors developed to your palette</span></div>
        <div><strong>Buyer support</strong><span>Sampling, approval references and coordinated bulk production</span></div>
      </section>

      <article className="custom-lace-content">
        <section>
          <p className="article-lead">Embroidered lace trim combines a light textile base with stitched motifs and a decorative edge. It offers the softness of lace, the clarity of embroidery and the flexibility to build a distinctive brand language.</p>
          <h2>Why fashion brands choose embroidered lace trim</h2>
          <p>Unlike a printed ribbon, embroidered lace has visible thread direction, raised detail and dimensional edges. These small construction details catch the light and give garments a more crafted finish. Designers can use the trim as a narrow border, a placement detail or a repeated visual signature across several styles.</p>
          <p>A capable <strong>custom lace trim manufacturer</strong> can adjust more than the motif. The mesh transparency, embroidery density, scallop shape, overall width, repeat length and thread colors all influence how the final trim looks and behaves. These decisions should be made with the intended garment, fabric weight and sewing method in mind.</p>
        </section>

        <section>
          <h2>Cute kids lace trim that still feels premium</h2>
          <p>For babywear and childrenswear, motifs need to be charming at a glance without becoming visually heavy. Chickens, bows, crowns, stars, vines and holiday icons work well because they remain recognizable at a small scale. A soft hand feel, neat reverse stitching and smooth edges are especially important when the trim may sit close to the skin.</p>
          <p>Our <a href="/kids-lace-trim">kids lace trim collection</a> supports playful dresses, collars, cuffs, bibs, bedding accents and accessories. Color can be matched to a collection palette, while motif spacing can be reviewed against the garment pattern before bulk production.</p>
        </section>
      </article>

      <section className="custom-lace-gallery-section">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> Motif inspiration</p><h2>Cute, graphic and seasonal embroidery.</h2></div>
          <p>Reference samples help buyers compare motif scale, edge construction and color contrast. Every image below includes descriptive alternative text and an SEO-friendly file name.</p>
        </div>
        <div className="custom-lace-gallery">
          {gallery.map((item) => (
            <figure key={item.src}>
              <div><Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div>
              <figcaption><strong>{item.title}</strong><span>{item.text}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="custom-lace-two-column">
        <div>
          <p className="eyebrow"><span /> Bridal and fashion applications</p>
          <h2>One technique, different levels of refinement.</h2>
          <p><strong>Bridal lace trim</strong> often uses ivory, soft white or champagne tones with finer threadwork and elegant scallops. It can finish veils, sleeves, necklines and accessories, or coordinate with dimensional <a href="/3d-flower-applique">3D Applique</a> details.</p>
          <p>For couture and occasionwear, embroidered borders can be paired with sequins, pearls or a <a href="/bridal-lace">Beaded Patch</a> to build texture without covering the entire garment. Explore our broader <a href="/bridal-lace">Bridal Lace</a> collection for wedding dress development.</p>
        </div>
        <aside>
          <span>Design checklist</span>
          <h3>What to send for an accurate quotation</h3>
          <ul>
            <li><CheckCircle2 /> Artwork, reference image or physical sample</li>
            <li><CheckCircle2 /> Required width and motif repeat</li>
            <li><CheckCircle2 /> Thread, mesh and edge colors</li>
            <li><CheckCircle2 /> Garment application and target quantity</li>
            <li><CheckCircle2 /> Sample and bulk delivery timing</li>
          </ul>
        </aside>
      </section>

      <section className="custom-lace-process" id="custom-development">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Custom development</p><h2>From reference to production-ready trim.</h2><p>A structured approval process protects the design details that matter most to your collection.</p></div>
        <div className="custom-lace-process-grid">
          <article><span>01</span><h3>Define the brief</h3><p>Confirm application, dimensions, colors, quantity and target date.</p></article>
          <article><span>02</span><h3>Develop the sample</h3><p>Translate artwork into stitch, mesh, edge and repeat specifications.</p></article>
          <article><span>03</span><h3>Review details</h3><p>Check color, hand feel, motif clarity, dimensions and sewing suitability.</p></article>
          <article><span>04</span><h3>Approve &amp; produce</h3><p>Use the approved sample as the reference for coordinated bulk production.</p></article>
        </div>
      </section>

      <section className="custom-lace-content custom-lace-quality">
        <section>
          <h2>What buyers should check before approving bulk production</h2>
          <p>Evaluate both appearance and construction. Confirm the usable width, repeat consistency, thread tension, edge shape, mesh stability and color under neutral light. For kidswear, rub the back of the embroidery and inspect any cut thread ends. For bridal applications, review tonal matching beside the gown fabric because ivory shades can shift under warm or cool lighting.</p>
          <p>During sampling, also test how the trim feeds through the intended sewing operation. A beautiful lace may still require changes if the edge curls, the mesh stretches excessively or the motif lands awkwardly at a seam. Early garment testing reduces revisions after production begins.</p>
        </section>
        <section>
          <h2>Work with VELORACE LACE</h2>
          <p>VELORACE LACE supports fashion brands, bridal designers, childrenswear labels, garment factories and wholesalers with custom development and sourcing coordination from Guangzhou, China. Whether you need a cute character border or a refined bridal finish, our team can help turn the visual idea into a clearer production brief.</p>
          <p>Send your artwork, preferred size, color reference, estimated quantity and destination through our <a href="/contact">Contact Us</a> page. We will review the request and recommend the next sampling steps.</p>
        </section>
      </section>

      <aside className="custom-lace-final-cta">
        <div><p>Custom embroidered lace trim</p><h2>Bring your motif into the next collection.</h2><span>Request suitable samples, custom options and a wholesale quotation.</span></div>
        <a className="button button-gold" href="/contact">Contact Us <ArrowRight size={17} /></a>
      </aside>
    </main>
  );
}
