import { ArrowRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { absoluteUrl, createPageMetadata, siteUrl } from "@/lib/seo";

const slug = "butterfly-floral-embroidered-trim";
const path = `/products/${slug}`;
const productName = "Butterfly & Floral Embroidered Mesh Lace Trim";
const description = "Pastel butterfly and floral embroidered mesh lace trim for fashion, childrenswear, accessories and custom garment collections.";
const images = [
  ["/products/embroidered-lace/embroidered-lace-butterfly.webp", "pastel butterfly embroidered mesh lace trim"],
  ["/products/embroidered-lace/embroidered-lace-gold-floral.webp", "gold floral embroidered mesh lace trim"],
  ["/products/embroidered-lace/embroidered-lace-aqua-floral.webp", "aqua floral embroidered mesh lace trim"],
  ["/products/embroidered-lace/embroidered-lace-forest-floral.webp", "forest green floral embroidered mesh lace trim"],
  ["/products/embroidered-lace/embroidered-lace-blush-floral.webp", "blush floral embroidered mesh lace trim"],
  ["/products/embroidered-lace/embroidered-lace-scallop.webp", "scalloped floral embroidered mesh lace trim"],
] as const;

export const metadata = createPageMetadata(productName, description, path, images[0][0]);

export default function ButterflyFloralTrimPage() {
  const url = absoluteUrl(path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: productName,
        description,
        sku: "VET-BF002",
        url,
        image: images.map(([image]) => absoluteUrl(image)),
        category: "Embroidered Lace Trim",
        material: "Embroidered mesh lace",
        brand: { "@type": "Brand", name: "VELORACE LACE" },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Customization", value: "Color, motif, width and base material" },
          { "@type": "PropertyValue", name: "Supply type", value: "Wholesale and custom development" },
          { "@type": "PropertyValue", name: "Sample", value: "Available before bulk production" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
          { "@type": "ListItem", position: 3, name: "Embroidery Lace", item: `${siteUrl}/embroidery-lace` },
          { "@type": "ListItem", position: 4, name: productName, item: url },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="inner-hero product-detail-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><a href="/embroidery-lace">Embroidery Lace</a></nav>
          <p className="eyebrow"><span /> SKU VET-BF002</p>
          <h1>Butterfly & Floral<br /><em>Embroidered Lace Trim.</em></h1>
          <p>{description} Send your reference, target color, width, quantity and garment application for a practical quotation.</p>
          <div className="hero-actions"><a className="button button-dark" href="/#contact">Request samples & quote <ArrowRight size={17} /></a><a className="text-link" href="https://wa.me/8615767956637?text=Hello%20VELORACE%20LACE%2C%20I%20would%20like%20to%20ask%20about%20VET-BF002." target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowRight size={15} /></a></div>
        </div>
        <div className="inner-hero-image"><Image src={images[0][0]} alt={images[0][1]} width={1200} height={1200} priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
      </section>

      <section className="section category-detail">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Product details</p><h2>Prepared for wholesale development.</h2></div><p>Specifications are confirmed against the selected design and physical approval sample before bulk production.</p></div>
        <div className="category-detail-grid">
          <div><h3>Construction</h3><p><BadgeCheck size={17} /> Embroidery on mesh base</p><p><BadgeCheck size={17} /> Butterfly and floral motifs</p><p><BadgeCheck size={17} /> Scalloped options available</p></div>
          <div><h3>Applications</h3><p><BadgeCheck size={17} /> Fashion and occasionwear</p><p><BadgeCheck size={17} /> Childrenswear and Lolita</p><p><BadgeCheck size={17} /> Bags and accessories</p></div>
          <div className="detail-cta"><span>Custom development</span><h3>Choose your color, motif and width.</h3><a className="button button-gold" href="/#contact">Send your requirement <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="section collection-gallery-section">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Available direction</p><h2>Color and motif references.</h2></div><p>Representative options from the range. Final dimensions, colors, base material and MOQ are confirmed during sampling.</p></div>
        <div className="collection-gallery">{images.map(([image, alt]) => <figure key={image}><Image src={image} alt={alt} width={1100} height={1100} sizes="(max-width: 700px) 50vw, 33vw" /></figure>)}</div>
        <div className="catalog-link-wrap"><a className="button button-dark" href="https://ruiyuelai.x.yupoo.com/albums/244212977?uid=1" target="_blank" rel="noreferrer">View full album catalog <ArrowRight size={17} /></a></div>
      </section>
    </main>
  );
}
