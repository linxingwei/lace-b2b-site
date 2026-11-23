import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { absoluteUrl, createPageMetadata, siteUrl } from "@/lib/seo";

const pagePath = "/3d-flower-applique";
const pageTitle = "3D Flower Lace Applique Supplier for Bridal & Couture";
const pageDescription = "Custom 3D flower and rose lace appliques for bridal gowns, couture and fashion. Review buyer specifications, MOQ 10 pieces, sample references, sizing and color options.";
const heroImage = "/products/3d-rose-applique/02-ivory-3d-floral-pair.webp";

export const metadata: Metadata = createPageMetadata(pageTitle, pageDescription, pagePath, heroImage);

const whatsappMessage = "Hello VELORACE LACE, I would like to develop a 3D flower lace applique. I will send a reference photo. Please advise the MOQ, price and sampling options.";

const specifications = [
  ["Product type", "3D flower lace applique"],
  ["Structure", "Flat, layered or dimensional floral construction"],
  ["Base material", "Mesh, tulle, lace base or custom base"],
  ["Decoration", "Embroidery-only, pearl, bead, sequin or crystal options"],
  ["Backing", "Sew-on by default; other options confirmed after design review"],
  ["Pairing", "Single motif, coordinated set or mirrored pair"],
  ["Color", "Black, white, ivory, red or custom color matching"],
  ["Example shown size", "Approx. 14 × 30 cm for the featured rose style"],
  ["Custom size & motif", "Available after design feasibility review"],
  ["MOQ", "10 pieces"],
  ["Sample Time", "Confirmed after design review"],
  ["Bulk Lead Time", "Confirmed after design review"],
  ["Packing", "Piece, pair or custom packing confirmed with the order"],
  ["QC", "Pre-shipment inspection against the approved sample"],
];

const showcase = [
  { title: "White Beaded Floral Bodice Applique Pair", image: "/products/3d-rose-applique/01-white-bodice-pair.webp", alt: "white beaded floral lace applique pair for a bridal bodice on a black dress form", text: "White beaded floral pair shown on a black dress form; a classic bridal V-neckline direction.", caption: "White beaded floral bodice pair." },
  { title: "Ivory 3D Floral Applique Pair", image: "/products/3d-rose-applique/02-ivory-3d-floral-pair.webp", alt: "ivory 3D floral lace applique pair with layered petals and sequins on a dress form", text: "Ivory 3D floral pair with layered petals and sequin detail, shown on a dress form.", caption: "Ivory 3D floral applique pair." },
  { title: "White Beaded Lace Applique in Hand", image: "/products/3d-rose-applique/03-white-beaded-lace-in-hand.webp", alt: "white beaded lace applique held in hand showing mesh base and size", text: "Hand-held view showing the mesh base and scale of the white beaded lace applique.", caption: "White beaded lace applique, hand-held scale reference." },
  { title: "Pearl and Sequin Bridal Applique Close-Up", image: "/products/3d-rose-applique/04-pearl-sequin-bridal-closeup.webp", alt: "pearl and sequin bridal lace applique close-up with pearl clusters on a dress form", text: "Close-up of pearl clusters and sequin flowers on a bridal applique.", caption: "Pearl and sequin bridal applique close-up." },
  { title: "White 3D Sunflower Motifs", image: "/products/3d-rose-applique/05-white-3d-sunflower-motifs.webp", alt: "white 3D beaded sunflower lace applique motifs laid flat", text: "Individual white 3D beaded flower motifs, shown laid flat for separate placement.", caption: "White 3D beaded flower motifs." },
  { title: "White Angel Wing Applique Pair", image: "/products/3d-rose-applique/06-white-angel-wings-pair.webp", alt: "white angel wing lace applique pair with pearl detail on a black background", text: "Wing-shaped white lace applique pair with pearl accents, shown on black.", caption: "White angel wing applique pair." },
  { title: "White 3D Flower Motifs in Frame", image: "/products/3d-rose-applique/07-white-3d-flower-motifs-framed.webp", alt: "white 3D beaded flower lace applique motifs displayed in a frame", text: "Individual white 3D beaded flower motifs, framed display.", caption: "White 3D flower motifs, framed display." },
  { title: "Champagne 3D Flower with Silver Sequins", image: "/products/3d-rose-applique/08-champagne-3d-flower-silver-sequin.webp", alt: "champagne 3D floral lace applique with silver sequins on a black dress form", text: "Oversized champagne 3D flower with silver sequin detail, shown on a black dress form.", caption: "Champagne 3D flower with silver sequins." },
  { title: "Silver V-Neck Beaded Applique with Ruler", image: "/products/3d-rose-applique/09-silver-vneck-beaded-applique-ruler.webp", alt: "silver beaded V-neck lace applique photographed with a ruler for scale", text: "Silver beaded V-neck applique photographed with a ruler for scale.", caption: "Silver V-neck beaded applique, ruler for scale." },
  { title: "Silver Sequin Wing Applique Pair", image: "/products/3d-rose-applique/10-silver-sequin-wing-pair.webp", alt: "silver sequin wing lace applique pair on a dress form", text: "Symmetrical silver sequin wing pair, shown on a dress form.", caption: "Silver sequin wing applique pair." },
  { title: "Silver Beaded 3D Flower Applique", image: "/products/3d-rose-applique/11-silver-beaded-3d-flower.webp", alt: "silver beaded 3D flower lace applique with crystal centre on a dress form", text: "Silver beaded 3D flower with a crystal centre, shown on a dress form.", caption: "Silver beaded 3D flower applique." },
  { title: "Burgundy Sequin Leaf Applique", image: "/products/3d-rose-applique/12-burgundy-sequin-leaf.webp", alt: "burgundy sequin leaf lace applique on tulle, asymmetric design", text: "Asymmetric burgundy sequin leaf applique on a tulle base.", caption: "Burgundy sequin leaf applique." },
  { title: "Red Sparkling Sequin 3D Flower", image: "/products/3d-rose-applique/13-red-sparkling-sequin-3d-flower.webp", alt: "red sparkling sequin 3D flower lace applique with tassel ends", text: "Bright red sequin 3D flower with tassel ends.", caption: "Red sparkling sequin 3D flower." },
  { title: "Burgundy Sequin Floral Applique", image: "/products/3d-rose-applique/14-burgundy-sequin-floral.webp", alt: "burgundy sequin floral lace applique with 3D flowers and leaves on a dress form", text: "Burgundy sequin floral applique with 3D flowers and leaves, shown on a dress form.", caption: "Burgundy sequin floral applique." },
  { title: "Red 3D Rose Applique", image: "/products/3d-rose-applique/15-red-3d-rose-applique.webp", alt: "red 3D rose lace applique on a dress form with layered roses", text: "Layered red 3D rose applique, shown on a dress form.", caption: "Red 3D rose applique." },
  { title: "Red Beaded Tassel Bib Applique", image: "/products/3d-rose-applique/16-red-beaded-tassel-bib.webp", alt: "red beaded tassel bib lace applique for shoulders with hanging bead tassels", text: "Red beaded shoulder applique with hanging bead tassels.", caption: "Red beaded tassel bib applique." },
  { title: "Black Sequin Bodice Applique Pair", image: "/products/3d-rose-applique/17-black-sequin-bodice-pair.webp", alt: "black sequin and beaded floral lace applique pair for a bodice on a white dress form", text: "Black sequin and beaded floral bodice pair, shown on a white dress form.", caption: "Black sequin bodice applique pair." },
  { title: "Black 3D Flower Applique with Tassels", image: "/products/3d-rose-applique/18-black-3d-flower-tassels.webp", alt: "black 3D flower lace applique with beaded tassels", text: "Bold black 3D flower applique with beaded tassel ends.", caption: "Black 3D flower applique with tassels." },
  { title: "Black Tulle Flower Applique", image: "/products/3d-rose-applique/19-black-tulle-flower-applique.webp", alt: "black tulle flower lace applique pair laid flat with an embroidery hoop", text: "Black tulle flower applique pair, shown laid flat with an embroidery hoop.", caption: "Black tulle flower applique." },
  { title: "Black Sequin Bow Appliques", image: "/products/3d-rose-applique/20-black-sequin-bow-appliques.webp", alt: "black sequin bow lace appliques in an embroidery hoop", text: "Five small black sequin bow appliques, shown in an embroidery hoop.", caption: "Black sequin bow appliques." },
  { title: "Gold Beaded Bodice Applique Pair", image: "/products/3d-rose-applique/21-gold-beaded-bodice-pair.webp", alt: "gold beaded floral lace applique pair for a bodice on a dress form", text: "Gold beaded floral bodice pair with sequins and beads, shown on a dress form.", caption: "Gold beaded bodice applique pair." },
  { title: "Gold V-Neck Beaded Tassel Bib", image: "/products/3d-rose-applique/22-gold-vneck-beaded-tassel-bib.webp", alt: "gold V-neck beaded lace applique bib with tassel edge", text: "Gold V-neck beaded bib with a tassel edge, a statement neckline piece.", caption: "Gold V-neck beaded tassel bib." },
  { title: "Gold Feather Applique", image: "/products/3d-rose-applique/23-gold-feather-applique.webp", alt: "gold feather-shaped beaded lace applique on a dress form", text: "Long gold feather-shaped beaded applique, shown on a dress form.", caption: "Gold feather applique." },
  { title: "Blue and Gold Sequin Floral Applique", image: "/products/3d-rose-applique/24-blue-gold-sequin-floral.webp", alt: "blue and gold sequin floral lace applique laid flat", text: "Mist-blue floral applique with gold sequin detail, shown laid flat.", caption: "Blue and gold sequin floral applique." },
  { title: "Pink and Gold Beaded Floral Applique Pair", image: "/products/3d-rose-applique/25-pink-gold-beaded-floral-pair.webp", alt: "pink and gold beaded floral lace applique pair on pink tulle", text: "Soft pink and gold beaded floral pair on a pink tulle base.", caption: "Pink and gold beaded floral applique pair." },
  { title: "Pink Beaded Mermaid Fishtail Applique", image: "/products/3d-rose-applique/26-pink-beaded-mermaid-fishtail.webp", alt: "pink beaded mermaid fishtail lace applique on a pink card", text: "Pink beaded mermaid fishtail applique, shown on a pink card.", caption: "Pink beaded mermaid fishtail applique." },
  { title: "Dark Blue Beaded Floral Applique Pair with Ruler", image: "/products/3d-rose-applique/27-dark-blue-beaded-floral-pair-ruler.webp", alt: "dark blue beaded floral lace applique pair photographed with a ruler for scale", text: "Dark blue beaded floral pair photographed with a ruler for scale.", caption: "Dark blue beaded floral applique pair, ruler for scale." },
  { title: "Silver Sequin Butterfly Applique", image: "/products/3d-rose-applique/28-silver-sequin-butterfly.webp", alt: "silver sequin and pearl butterfly lace applique on a black dress form", text: "Silver sequin and pearl butterfly applique, shown on a black dress form.", caption: "Silver sequin butterfly applique." },
  { title: "Silver Beaded Mermaid Applique Pair", image: "/products/3d-rose-applique/29-silver-beaded-mermaid-pair.webp", alt: "silver beaded mermaid lace applique pair on a coral card", text: "Silver beaded mermaid applique pair, shown on a coral card.", caption: "Silver beaded mermaid applique pair." },
  { title: "Silver Bodice Panel with Dimensions", image: "/products/3d-rose-applique/30-silver-bodice-panel-dimensions.webp", alt: "silver beaded long bodice panel lace applique labelled 130 by 33 cm", text: "Long silver beaded bodice panel, labelled 130 by 33 cm in the photo.", caption: "Silver bodice panel, labelled 130 × 33 cm." }
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
  ["What size is the rose applique shown on this page?", "The featured black rose style is approximately 14 × 30 cm. Other sizes are reviewed for feasibility before sampling."],
  ["Can you customize the size and color of a 3D flower applique?", "Yes. Send the target dimensions, color reference and intended garment placement. Size and color feasibility are reviewed before sampling."],
  ["Can you make mirrored left-and-right applique pairs?", "Yes. Matched left-and-right pairs can be developed for bodices, necklines, shoulders, waistlines and other symmetrical garment areas."],
  ["Is 3D flower applique suitable for bridal gowns and evening dresses?", "Yes. Dimensional floral appliques are commonly developed as focal decoration for bridal gowns, couture dresses, eveningwear and occasionwear. The final construction should be reviewed against the garment fabric and placement."],
  ["What are the sample and bulk lead times?", "Sample Time: Confirmed after design review. Bulk Lead Time: Confirmed after design review. We do not publish a fixed number before the construction, handwork and quantity are assessed."],
  ["Can you customize from a reference photo?", "Yes. Send a product photo, dress photo, sketch, artwork or physical sample. We review whether the design can be adapted for production and advise the sampling route."],
  ["Can pearls, beads or sequins be added?", "Yes, depending on the motif. Decoration materials, placement and attachment are confirmed during design review."],
  ["Are 3D appliques more expensive and harder to sew than flat embroidery?", "Usually, yes. Layered petals and embellishment often require more materials, more complex sampling and more careful sewing, but the actual cost and workload depend on the design."],
];

export default function ThreeDFlowerAppliquePage() {
  const url = absoluteUrl(pagePath);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "ProductGroup", "@id": `${url}#product-group`, name: "3D Flower Lace Applique", description: pageDescription, url, image: showcase.slice(0, 8).map((item) => absoluteUrl(item.image)), brand: { "@type": "Brand", name: "VELORACE LACE" }, manufacturer: { "@id": `${siteUrl}/#organization` }, audience: { "@type": "BusinessAudience", audienceType: "Bridal designers, couture studios, fashion brands and garment manufacturers" }, additionalProperty: specifications.map(([name, value]) => ({ "@type": "PropertyValue", name, value })) },
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
          <p>Custom dimensional floral appliques for wedding gowns, couture dresses, eveningwear and fashion collections. Develop a single motif, a coordinated set or a mirrored pair from your reference. These appliques can also decorate two-piece bridal sets and matching veils.</p>
          <p className="hero-proof"><strong>MOQ: 10 pieces.</strong> Sample Time and Bulk Lead Time are confirmed after design review.</p>
          <div className="hero-actions"><WhatsAppLink className="button button-dark" message={whatsappMessage} productCategory="3D Flower Lace Applique" placement="3d_money_page_hero">Send a reference photo on WhatsApp → Get MOQ, price &amp; sampling options</WhatsAppLink><a className="text-link" href="/blog/3d-lace-applique-vs-flat-embroidered-applique">Compare 3D vs flat applique <ArrowRight size={15} /></a></div>
        </div>
        <figure className="inner-hero-image applique-concept-figure"><Image src={heroImage} alt="ivory 3D floral lace applique pair with layered petals and sequins on a dress form" width={1200} height={1200} priority sizes="(max-width: 900px) 100vw, 50vw" /><figcaption>Rose applique sample reference for color, size and construction discussion. Final details are confirmed during design review.</figcaption></figure>
      </section>

      <section className="section buyer-spec-section" aria-labelledby="buyer-spec-title">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Buyer specifications</p><h2 id="buyer-spec-title">The details buyers need before sampling.</h2></div><p>Unconfirmed timelines are deliberately left as “Confirmed after design review” because construction, handwork and material availability vary by design.</p></div>
        <div className="spec-table-wrap"><table className="procurement-table"><tbody>{specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></div>
      </section>

      <section className="section" aria-labelledby="applique-how-to-use">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Application guide</p><h2 id="applique-how-to-use">How to use and apply 3D flower lace appliques</h2></div><p>Practical sewing guidance; test the method on a fabric sample before finishing the garment.</p></div>
        <div className="comparison-cards">
          <article><h3>How to sew on</h3><p>Sew-on is the default attachment method. Hand-sew with small, secure stitches around stable motif edges, or machine-sew slowly where the base allows; avoid catching raised petals and embellishments.</p></article>
          <article><h3>How to position and secure</h3><p>Arrange the motif on the garment and check the drape before stitching. Temporarily baste or pin through safe flat areas, then sew and remove temporary fixings.</p></article>
          <article><h3>How to shape 3D flowers</h3><p>Gently arrange the raised petals by hand after attachment to restore their dimension. Avoid crushing them with heavy pressure or direct heat; test any pressing method on a sample first.</p></article>
          <article><h3>Where to use</h3><p>Use as focal decoration on wedding gowns, matching veils, two-piece bridal sets (crop tops with wide-leg trousers or long skirts), flower-girl dresses, dancewear and performance costumes.</p></article>
        </div>
      </section>

      <section className="section design-showcase-section" aria-labelledby="showcase-title">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Product sample references</p><h2 id="showcase-title">3D flower applique sample gallery — 30 designs.</h2></div><p>Thirty high-resolution sample references in white, ivory, silver, champagne, red, burgundy, black, gold and blue — review the motif, colour direction and decoration before sending your reference for sampling.</p></div>
        <div className="design-showcase-grid">{showcase.map((item) => <article key={item.title}><figure><Image src={item.image} alt={item.alt} width={900} height={900} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><figcaption>{item.caption}</figcaption></figure><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <p className="process-link-note"><strong>Reverse-side note:</strong> the reverse finish depends on the approved motif, decoration and attachment method. Because no verified backside photo is shown here, reverse-side construction is confirmed during sample approval rather than represented by a generic image.</p>
      </section>

      <section className="section quick-comparison-section">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Quick comparison</p><h2>3D applique or flat embroidery?</h2></div><p>3D styles create stronger depth and visual impact. Flat embroidered appliques are generally lighter, more flexible and easier to sew or alter.</p></div>
        <div className="comparison-cards"><article><h3>Choose 3D applique when</h3><p>Raised petals, couture focal points, pearl or bead detail and strong bridal impact are the priority.</p></article><article><h3>Choose flat embroidery when</h3><p>Lower weight, flexibility, easier seam handling and repeatable all-over placement matter more.</p></article><article><h3>Important cost note</h3><p>3D is usually more expensive, more complex to sample and more labor-intensive to sew, but the actual result depends on the design.</p></article></div>
        <a className="text-link comparison-deep-link" href="/blog/3d-lace-applique-vs-flat-embroidered-applique">Read the full bridal applique comparison <ArrowRight size={15} /></a>
      </section>

      <section className="section applique-process-section" aria-labelledby="process-title">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Custom development</p><h2 id="process-title">Send Reference → Design Review → Sample → Approval → Bulk Production → QC → Shipment</h2></div>
        <div className="seven-step-process">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="process-link-note">Need a motif developed around a garment pattern? Continue to <a href="/custom-design">custom lace design and sampling</a>, or review <a href="/custom-multicolor-embroidered-lace">custom multicolor embroidered lace trim</a>.</p>
      </section>

      <section className="section related-section" aria-labelledby="related-guides-title">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Related sourcing guides</p><h2 id="related-guides-title">Continue your applique and garment-material review.</h2></div><p>Use these related pages to compare construction, garment application and custom development before sampling.</p></div>
        <div className="related-links">
          <a href="/bridal-lace"><span>3D bridal appliques &amp; bridal lace</span><ArrowRight size={17} /></a>
          <a href="/embroidery-lace"><span>3D embroidered appliques &amp; embroidery lace</span><ArrowRight size={17} /></a>
          <a href="/custom-design"><span>Custom 3D applique development</span><ArrowRight size={17} /></a>
          <a href="/beaded-patches"><span>Beaded patches with rope for Gulf gifts &amp; accessories</span><ArrowRight size={17} /></a>
          <a href="/blog/wedding-dress-trends-2027"><span>2027 wedding dress trends and 3D floral applique styling</span><ArrowRight size={17} /></a>
          <a href="/blog/3d-lace-applique-vs-flat-embroidered-applique"><span>3D vs flat embroidered applique</span><ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="section faq-section category-faq" id="faq"><div className="section-heading centered-heading"><p className="eyebrow"><span /> Buyer FAQ</p><h2>3D flower lace applique sourcing.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <p className="mx-auto max-w-6xl px-5 py-5">For gown placement and coordinated motifs, explore <a className="font-semibold underline" href="/bridal-lace-applique">bridal lace appliqué wholesale options</a>. Compare 3D floral appliqués with other constructions in our <a className="font-semibold underline" href="/types-of-lace-fabric">types of lace fabric guide</a>.</p>
      <section className="final-cta"><p>MOQ 10 pieces · timelines confirmed after design review</p><h2>Send a reference photo.<br />Get MOQ, price &amp; sampling options.</h2><WhatsAppLink className="button button-light" message={whatsappMessage} productCategory="3D Flower Lace Applique" placement="3d_money_page_final">Send a reference photo on WhatsApp <ArrowRight size={17} /></WhatsAppLink></section>
    </main>
  );
}
