import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ClipboardCheck, Palette, Ruler, Sparkles } from "lucide-react";
import { threeDFlowerAppliqueBuyerData } from "@/lib/buyer-data";
import { absoluteUrl, createPageMetadata, siteUrl } from "@/lib/seo";

const pagePath = "/3d-flower-applique";
const pageTitle = "3D Flower Lace Applique Wholesale";
const pageDescription = "Source wholesale 3D flower lace appliques for bridal gowns and fashion. Review MOQ, construction, size, backing, customization, sampling and quality-control details.";
const heroImage = "/products/3d-flower-lace-applique-wholesale.jpg";

export const metadata: Metadata = createPageMetadata(pageTitle, pageDescription, pagePath, heroImage);

const productDetails = [
  ["Construction", "Layered embroidered petals; mesh, organza and edge finish vary by design"],
  ["Order unit", "Pair, matched set or individual piece, depending on the motif"],
  ["Backing", "Sew-on is the standard recommendation; iron-on is evaluated by application"],
  ["Embellishment", "Pearls, beads, sequins or crystals can be evaluated for selected designs"],
];

const faqs = [
  ["What is the MOQ for 3D flower lace appliques?", "Selected existing styles start from 30 pairs. The practical MOQ for a custom motif depends on its size, materials, embroidery and hand-applied details, so it is confirmed after the design brief is reviewed."],
  ["Can you make matched left and right applique pairs?", "Yes. Mirrored pairs and coordinated motif sets can be developed for necklines, bodices, sleeves and other planned garment placements."],
  ["Can the flower size and color be customized?", "Yes. Send the required finished dimensions, garment fabric or color reference, intended placement and estimated quantity. Size, thread, base and embellishment options are then confirmed during sampling."],
  ["Is sew-on or iron-on backing better for bridal appliques?", "Sew-on application gives bridal and couture teams the most control on tulle, curved seams and delicate fabrics. Iron-on backing is considered only after heat and fabric compatibility are tested."],
  ["What should buyers approve before bulk production?", "Approve the physical sample for dimensions, color, motif direction, petal attachment, reverse-side finish, embellishment security and appearance on the final garment fabric."],
];

export default function ThreeDFlowerAppliquePage() {
  const url = absoluteUrl(pagePath);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProductGroup",
        "@id": `${url}#product-group`,
        name: "Wholesale 3D Flower Lace Applique",
        description: pageDescription,
        url,
        image: absoluteUrl(heroImage),
        brand: { "@type": "Brand", name: "VELORACE LACE" },
        manufacturer: { "@id": `${siteUrl}/#organization` },
        audience: { "@type": "BusinessAudience", audienceType: "Bridal designers, fashion brands, garment manufacturers and trim wholesalers" },
        additionalProperty: [
          ...productDetails.map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
          ...threeDFlowerAppliqueBuyerData.fields.map(({ label: name, value }) => ({ "@type": "PropertyValue", name, value })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
          { "@type": "ListItem", position: 3, name: "3D Flower Applique", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
    ],
  };

  return (
    <main className="applique-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="inner-hero applique-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/products">Products</a><span aria-hidden="true">/</span><span aria-current="page">3D Flower Applique</span></nav>
          <p className="eyebrow"><span /> Wholesale &amp; custom development</p>
          <h1>3D Flower Lace Applique<br /><em>for bridal and fashion.</em></h1>
          <p>Source dimensional floral motifs with layered petals, embroidery and optional hand-applied details. Published styles VL-2602 and VL-2603 list a 30-pair MOQ; custom size, color, motif and matched-set options are reviewed against your brief.</p>
          <div className="hero-actions"><a className="button button-dark" href="/#contact">Send a reference photo → Get MOQ &amp; sampling options</a><a className="text-link" href="/blog/3d-lace-applique-vs-flat-embroidered-applique">Compare 3D vs flat applique <ArrowRight size={15} /></a></div>
        </div>
        <figure className="inner-hero-image applique-hero-image">
          <Image src={heroImage} alt="Wholesale pastel 3D flower lace applique pairs with layered embroidered petals" width={1200} height={1200} priority sizes="(max-width: 900px) 100vw, 50vw" />
          <figcaption>Representative wholesale 3D flower lace applique assortment. Final dimensions, colors, backing and motif pairing are confirmed against the selected style and approval sample.</figcaption>
        </figure>
      </section>

      <section className="section applique-spec-section" aria-labelledby="applique-spec-title">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Procurement specifications</p><h2 id="applique-spec-title">What buyers can confirm before ordering.</h2></div><p>These fields turn a visual reference into a production brief. Values that vary by design are confirmed in the quotation and physical sample instead of being treated as universal promises.</p></div>
        <dl className="applique-spec-grid">{threeDFlowerAppliqueBuyerData.fields.map(({ key, label, value }) => <div key={key}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p className="spec-note"><strong>Data boundary:</strong> only the published MOQ for styles VL-2602 and VL-2603 is stated numerically. Sample time, bulk lead time and other project-specific commitments remain “Confirmed after design review” until the materials, handwork, quantity and destination are known.</p>
      </section>

      <section className="section applique-evidence-section" aria-labelledby="applique-image-evidence-title">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Real product references</p><h2 id="applique-image-evidence-title">Review petal structure and motif grouping.</h2></div><p>These are product-display photographs from the current VELORACE LACE range. They show visible construction only; they are not presented as measurement, sampling, factory, QC or packing evidence.</p></div>
        <div className="applique-evidence-grid">
          <figure><Image src="/products/3d-flower-lace-applique-wholesale.jpg" alt="Pastel embroidered 3D flower lace applique assortment with raised petals and beaded details" width={600} height={600} sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>Assorted pastel motifs showing layered petals, embroidered leaves and varied embellishment. Confirm the exact style code before quotation.</figcaption></figure>
          <figure><Image src="/products/pastel-matched-3d-flower-lace-applique-pairs.jpg" alt="Matched pastel 3D flower lace applique motifs for bridal bodice placement" width={600} height={600} sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>Coordinated floral motifs suitable for testing left/right or graduated bridal placement. Final orientation and quantities are recorded in the approved brief.</figcaption></figure>
        </div>
      </section>

      <section className="section applique-buyer-section">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Buyer intent guide</p><h2>Choose construction around the garment.</h2></div>
        <div className="applique-buyer-grid">
          <article><Sparkles /><h3>For bridal gowns</h3><p>Prioritize soft edges, controlled weight and secure petals on tulle or lace. Request mirrored neckline pairs or mixed-size motifs when placement must follow the bodice.</p></article>
          <article><Ruler /><h3>For repeatable placement</h3><p>Provide finished dimensions, orientation and quantity per garment. A placement map helps maintain the approved balance across sizes and repeat orders.</p></article>
          <article><Palette /><h3>For custom colors</h3><p>Approve thread, base and embellishment beside the final garment fabric. Ivory and champagne names are not universal color standards.</p></article>
          <article><ClipboardCheck /><h3>For bulk quality control</h3><p>Inspect petal attachment, motif shape, left-right matching, bead security, reverse-side finish and packing against the signed physical sample.</p></article>
        </div>
      </section>

      <section className="applique-comparison-cta">
        <div><p className="eyebrow eyebrow-light"><span /> Material decision</p><h2>Do you need dimensional petals or a flatter embroidered motif?</h2><p>Compare appearance, weight, durability, sewing, care and cost drivers before you brief the sample.</p></div>
        <a className="button button-light" href="/blog/3d-lace-applique-vs-flat-embroidered-applique">Read the comparison <ArrowRight size={17} /></a>
      </section>

      <section className="section applique-process-section">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> From inquiry to bulk</p><h2>A clear approval path.</h2></div><p>Share the intended garment and quantity early so construction and commercial recommendations are relevant.</p></div>
        <div className="applique-process-grid">
          <article><span>01</span><h3>Send the brief</h3><p>Reference image or artwork, application, dimensions, colors, quantity and destination.</p></article>
          <article><span>02</span><h3>Confirm feasibility</h3><p>Review motif structure, base, embellishment, backing, MOQ and estimated schedule.</p></article>
          <article><span>03</span><h3>Approve a sample</h3><p>Check the physical piece on the final garment fabric and record approved details.</p></article>
          <article><span>04</span><h3>Produce and inspect</h3><p>Use the signed sample for workmanship, dimensions, color and pair-matching checks.</p></article>
        </div>
      </section>

      <section className="section faq-section category-faq" id="faq"><div className="section-heading centered-heading"><p className="eyebrow"><span /> Buyer FAQ</p><h2>3D flower lace applique sourcing.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta"><p>3D flower applique supplier in Guangzhou, China</p><h2>Send a reference photo.<br />Get MOQ &amp; sampling options.</h2><a className="button button-light" href="/#contact">Start with your reference <ArrowRight size={17} /></a></section>
    </main>
  );
}
