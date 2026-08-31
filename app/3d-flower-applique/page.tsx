import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { absoluteUrl, createPageMetadata, siteUrl } from "@/lib/seo";

const pagePath = "/3d-flower-applique";
const pageTitle = "3D Flower Lace Applique Supplier for Bridal & Couture";
const pageDescription = "Custom 3D flower lace appliques for bridal gowns and couture. Review buyer specifications, MOQ 10 pieces, sampling, mirrored pairs and beading options.";
const heroImage = "/products/3d-applique-design-showcase/ivory-bridal-3d-flower-lace-applique-design-showcase.jpg";

export const metadata: Metadata = createPageMetadata(pageTitle, pageDescription, pagePath, heroImage);

const whatsappMessage = "Hello VELORACE LACE, I would like to develop a 3D flower lace applique. I will send a reference photo. Please advise the MOQ and sampling options.";

const specifications = [
  ["Product type", "3D flower lace applique"],
  ["Structure", "Flat, layered or dimensional floral construction"],
  ["Base material", "Mesh, tulle, lace base or custom base"],
  ["Decoration", "Embroidery-only, pearl, bead, sequin or crystal options"],
  ["Backing", "Sew-on by default; other options confirmed after design review"],
  ["Pairing", "Single motif, coordinated set or mirrored pair"],
  ["Color", "Ivory, white or custom color matching"],
  ["Custom size & motif", "Available after design feasibility review"],
  ["MOQ", "10 pieces"],
  ["Sample Time", "Confirmed after design review"],
  ["Bulk Lead Time", "Confirmed after design review"],
  ["Packing", "Piece, pair or custom packing confirmed with the order"],
  ["QC", "Pre-shipment inspection against the approved sample"],
];

const showcase = [
  { title: "Ivory Bridal 3D Flower Applique", image: heroImage, alt: "Ivory 3D flower lace applique design for a bridal gown neckline", text: "An ivory floral direction for wedding-gown necklines and bodices. The motif can be reviewed for color tone, scale and placement against the final dress fabric." },
  { title: "Pearl & Beaded 3D Flower Applique", image: "/products/3d-applique-design-showcase/pearl-beaded-3d-flower-applique-design-showcase.jpg", alt: "Pearl and beaded 3D flower lace applique design for couture eveningwear", text: "Pearls, beads or sequins can highlight flower centers and leaf details. Material, placement and attachment method are confirmed during design review." },
  { title: "Layered Petal 3D Lace Applique", image: "/products/3d-applique-design-showcase/layered-petal-3d-flower-lace-applique-design-showcase.jpg", alt: "Layered petal 3D flower lace applique concept for a bridal bodice", text: "Layered embroidered petals create more depth than flat stitching. Petal structure and edge finishing are assessed during sampling so the motif remains balanced on the garment." },
  { title: "Mirrored Pair Lace Appliques", image: "/products/3d-applique-design-showcase/mirrored-pair-3d-flower-lace-applique-design-showcase.jpg", alt: "Mirrored pair 3D floral lace applique design for symmetrical bridal placement", text: "Matched left-and-right directions can frame a neckline, corset, waist or back panel. Send the intended placement so orientation and pair matching can be reviewed before sampling." },
  { title: "Couture Bodice Lace Applique", image: "/products/3d-applique-design-showcase/couture-bodice-3d-flower-lace-applique-design-showcase.jpg", alt: "Couture bodice 3D flower lace applique design with dimensional floral placement", text: "Elongated or contoured applique layouts can follow a couture bodice or corset. Final shape depends on the silhouette, seams and desired focal area." },
];

const process = [
  ["01", "Send Reference", "Share a photo, artwork or sample plus the intended garment area and quantity."],
  ["02", "Design Review", "We assess structure, dimensions, color, decoration, placement and production feasibility."],
  ["03", "Sample", "A physical sample is developed when required. Sample time is confirmed after design review."],
  ["04", "Approval", "Confirm shape, color, arrangement, embellishment, pairing and reverse-side finish."],
  ["05", "Bulk Production", "Production follows the approved sample. Bulk lead time is confirmed after design review."],
  ["06", "QC", "Finished pieces are checked for consistency, visible defects, decoration and pair matching."],
  ["07", "Shipment", "Packing and shipping are arranged for the confirmed quantity and destination."],
];

const faqs = [
  ["What is the MOQ for 3D flower lace appliques?", "The MOQ is 10 pieces. Final order details depend on the selected design, decoration and customization level."],
  ["What are the sample and bulk lead times?", "Sample Time: Confirmed after design review. Bulk Lead Time: Confirmed after design review. We do not publish a fixed number before the construction, handwork and quantity are assessed."],
  ["Can you customize from a reference photo?", "Yes. Send a product photo, dress photo, sketch, artwork or physical sample. We review whether the design can be adapted for production and advise the sampling route."],
  ["Can you make mirrored applique pairs?", "Yes. Matched left-and-right pairs can be developed for bodices, necklines, shoulders, waistlines and other symmetrical garment areas."],
  ["Can pearls, beads or sequins be added?", "Yes, depending on the motif. Decoration materials, placement and attachment are confirmed during design review."],
  ["Are 3D appliques more expensive and harder to sew than flat embroidery?", "Usually, yes. Layered petals and embellishment often require more materials, more complex sampling and more careful sewing, but the actual cost and workload depend on the design."],
];

export default function ThreeDFlowerAppliquePage() {
  const url = absoluteUrl(pagePath);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "ProductGroup", "@id": `${url}#product-group`, name: "3D Flower Lace Applique", description: pageDescription, url, image: showcase.map((item) => absoluteUrl(item.image)), brand: { "@type": "Brand", name: "VELORACE LACE" }, manufacturer: { "@id": `${siteUrl}/#organization` }, audience: { "@type": "BusinessAudience", audienceType: "Bridal designers, couture studios, fashion brands and garment manufacturers" }, additionalProperty: specifications.map(([name, value]) => ({ "@type": "PropertyValue", name, value })) },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` }, { "@type": "ListItem", position: 3, name: "3D Flower Applique", item: url }] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] };

  return (
    <main className="applique-money-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="inner-hero applique-money-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/products">Products</a><span aria-hidden="true">/</span><span aria-current="page">3D Flower Applique</span></nav>
          <p className="eyebrow"><span /> Bridal &amp; couture development</p>
          <h1>3D Flower Lace Applique<br /><em>Supplier for Bridal &amp; Couture</em></h1>
          <p>Custom dimensional floral appliques for wedding gowns, couture dresses, eveningwear and fashion collections. Develop a single motif, a coordinated set or a mirrored pair from your reference.</p>
          <p className="hero-proof"><strong>MOQ: 10 pieces.</strong> Sample Time and Bulk Lead Time are confirmed after design review.</p>
          <div className="hero-actions"><WhatsAppLink className="button button-dark" message={whatsappMessage} placement="3d_money_page_hero">Send a reference photo on WhatsApp → Get MOQ &amp; sampling options</WhatsAppLink><a className="text-link" href="/blog/3d-lace-applique-vs-flat-embroidered-applique">Compare 3D vs flat applique <ArrowRight size={15} /></a></div>
        </div>
        <figure className="inner-hero-image applique-concept-figure"><Image src={heroImage} alt="Ivory 3D flower lace applique design for a bridal gown neckline" width={1200} height={1200} priority sizes="(max-width: 900px) 100vw, 50vw" /><figcaption>Product concept/design showcase for style and placement discussion. Not presented as a factory, QC or customer-order photograph.</figcaption></figure>
      </section>

      <section className="section buyer-spec-section" aria-labelledby="buyer-spec-title">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Buyer specifications</p><h2 id="buyer-spec-title">The details buyers need before sampling.</h2></div><p>Unconfirmed timelines are deliberately left as “Confirmed after design review” because construction, handwork and material availability vary by design.</p></div>
        <div className="spec-table-wrap"><table className="procurement-table"><tbody>{specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></div>
      </section>

      <section className="section design-showcase-section" aria-labelledby="showcase-title">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Design directions</p><h2 id="showcase-title">Five ways to develop dimensional florals.</h2></div><p>These images are product concepts/design showcases used to discuss style, construction and placement. They are not labeled as factory production, QC inspection or customer orders.</p></div>
        <div className="design-showcase-grid">{showcase.map((item) => <article key={item.title}><figure><Image src={item.image} alt={item.alt} width={900} height={900} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><figcaption>Product concept/design showcase — final construction is confirmed after design review.</figcaption></figure><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section className="section quick-comparison-section">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Quick comparison</p><h2>3D applique or flat embroidery?</h2></div><p>3D styles create stronger depth and visual impact. Flat embroidered appliques are generally lighter, more flexible and easier to sew or alter.</p></div>
        <div className="comparison-cards"><article><h3>Choose 3D applique when</h3><p>Raised petals, couture focal points, pearl or bead detail and strong bridal impact are the priority.</p></article><article><h3>Choose flat embroidery when</h3><p>Lower weight, flexibility, easier seam handling and repeatable all-over placement matter more.</p></article><article><h3>Important cost note</h3><p>3D is usually more expensive, more complex to sample and more labor-intensive to sew, but the actual result depends on the design.</p></article></div>
        <a className="text-link comparison-deep-link" href="/blog/3d-lace-applique-vs-flat-embroidered-applique">Read the full bridal applique comparison <ArrowRight size={15} /></a>
      </section>

      <section className="section applique-process-section" aria-labelledby="process-title">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Custom development</p><h2 id="process-title">Send Reference → Design Review → Sample → Approval → Bulk Production → QC → Shipment</h2></div>
        <div className="seven-step-process">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="process-link-note">Need a motif developed around a garment pattern? Continue to <a href="/custom-design">custom lace design and sampling</a>.</p>
      </section>

      <section className="section faq-section category-faq" id="faq"><div className="section-heading centered-heading"><p className="eyebrow"><span /> Buyer FAQ</p><h2>3D flower lace applique sourcing.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="final-cta"><p>MOQ 10 pieces · timelines confirmed after design review</p><h2>Send a reference photo.<br />Get MOQ &amp; sampling options.</h2><WhatsAppLink className="button button-light" message={whatsappMessage} placement="3d_money_page_final">Send a reference photo on WhatsApp <ArrowRight size={17} /></WhatsAppLink></section>
    </main>
  );
}
