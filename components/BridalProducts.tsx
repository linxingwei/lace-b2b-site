import Image from "next/image";
import WhatsAppLink from "./WhatsAppLink";
import styles from "./BridalProducts.module.css";

const photos = [
  ["off-shoulder-wedding-gown", "Off-shoulder wedding gown application with floral embroidered tulle lace and scalloped hem", "Wedding gown application", 550, 740],
  ["full-fabric-panel", "Fine embroidered bridal tulle lace panel with repeating floral motifs and scalloped borders", "Full fabric panel", 550, 550],
  ["repeating-floral-motifs", "Repeating floral embroidery with open tulle spaces on bridal lace fabric", "Floral motif distribution", 550, 545],
  ["floral-border-layout", "Floral embroidered bridal lace transitioning into an ornate scalloped border", "Border layout", 550, 553],
  ["draped-scalloped-border", "Embroidered tulle bridal lace draped over a surface showing the scalloped edge", "Draped border", 551, 549],
  ["ornate-border-close-up", "Close-up of ornate embroidered bridal lace border held against a hand", "Border close-up", 551, 546],
  ["floral-embroidery-detail", "Fine floral stitching and mesh detail on embroidered bridal tulle lace", "Embroidery detail", 550, 550],
  ["botanical-border-detail", "Botanical floral motifs beside the decorative bridal lace border", "Botanical border detail", 553, 548],
  ["sheer-tulle-hand-detail", "Hand visible through sheer embroidered tulle bridal lace showing mesh transparency", "Tulle transparency", 549, 555],
  ["v-neck-wedding-gown", "V-neck wedding gown application with floral tulle lace overlay and scalloped train", "Second gown application", 550, 734],
] as const;

const products = [
  { sku: "ZY526", name: "Luxury Beaded Embroidered Bridal Lace", position: "Embellished lace for statement gowns, skirts and trains.", facts: ["100% polyester", "Width: 130 cm", "Beaded and embroidered details"], confirm: "Weight and unit, MOQ, selling unit, price, sample terms and color options." },
  { sku: "3DTL1647", name: "3D Floral Embroidered Bridal Lace with Sequins", position: "Raised floral texture for bodices and statement skirts.", facts: ["MOQ: 5 yards for available colors", "Custom color: from 100 yards", "Weight: approx. 300 g/m²"], confirm: "Current color availability, width, material composition, price, sample terms and production timing." },
  { sku: "ML0717", name: "Beaded Sequin Embroidered Bridal Lace", position: "Heavier embellishment for gowns, bodices, sleeves and trains.", facts: ["Supplier model: ML-0717-1", 'Width: 58–60 inches (approx. 147–152 cm)', "Weight: approx. 520 g per meter"], confirm: "MOQ, selling unit, material composition, price, sample terms, color availability and lead time." },
];

export default function BridalProducts() {
  return <section className={"section " + styles.section} id="bridal-products" aria-labelledby="bridal-products-title">
    <p className="eyebrow"><span /> Featured bridal fabric</p>
    <h2 id="bridal-products-title">Fine Embroidered Tulle Bridal Lace Fabric</h2>
    <div className={styles.intro}>
      <p>Floral embroidery, open tulle spaces and an ornate scalloped border create a defined pattern for wedding gown overlays, bodices, sleeves and hems. Explore the fabric details alongside two gown application images.</p>
      <p>For a finer embroidered look, start with this fabric. For raised flowers or heavier embellishment, compare the three styles below. Request a physical sample to assess feel, drape, color and suitability for your design.</p>
    </div>
    <div className={styles.gallery}>
      {photos.map(([file, alt, caption, width, height]) => <figure key={file}>
        <a href={`/products/fine-embroidered-tulle/${file}.png`} target="_blank" rel="noreferrer" aria-label={`Open full image: ${caption}`}>
          <Image src={`/products/fine-embroidered-tulle/${file}.png`} alt={alt} width={width} height={height} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
        </a><figcaption>{caption}</figcaption>
      </figure>)}
    </div>
    <div className={styles.procurement}>
      <div><h3>Request this fabric</h3><p>Send the product name or a photo, intended application, required quantity and unit, preferred color, destination postcode and target delivery date.</p></div>
      <dl>
        <div><dt>MOQ &amp; price</dt><dd>Request a quotation and confirm the selling unit.</dd></div>
        <div><dt>Sample</dt><dd>Ask about availability, sample cost and delivery.</dd></div>
        <div><dt>Custom color</dt><dd>Send your target shade for feasibility and minimum quantity review.</dd></div>
        <div><dt>Specifications</dt><dd>Confirm width, weight with unit and fiber composition before ordering.</dd></div>
        <div><dt>Shipping</dt><dd>Provide your destination to confirm shipping cost and timing.</dd></div>
      </dl>
      <WhatsAppLink className="button button-whatsapp" productCategory="Bridal Lace" placement="bridal_fine_tulle_quote" message="Hello VELORACE LACE, I am interested in Fine Embroidered Tulle Bridal Lace Fabric shown on /bridal-lace. Please confirm MOQ, price and selling unit, width, weight, fiber composition, sample terms, custom color options and shipping. Application: __. Quantity/unit: __. Color: __. Destination/postcode: __. Target date: __.">Ask about this fabric on WhatsApp</WhatsAppLink>
      <a className="text-link" href="/contact">Request samples &amp; a quote via our inquiry form</a>
    </div>
    <h2 className={styles.matrixTitle}>Compare bridal lace styles</h2>
    <p>Choose by construction and garment placement. Confirm current specifications and order terms when requesting a sample.</p>
    <div className={styles.matrix}>{products.map(product => <article key={product.sku} id={product.sku.toLowerCase()}>
      <p className="eyebrow">{product.sku}</p><h3>{product.name}</h3><p>{product.position}</p>
      <ul>{product.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
      <p><strong>Confirm with your quote:</strong> {product.confirm}</p>
      <WhatsAppLink className="text-link" productCategory="Bridal Lace" placement={`bridal_${product.sku.toLowerCase()}_quote`} message={`Hello VELORACE LACE, please quote ${product.sku} — ${product.name}. Please confirm current specifications, MOQ, sample terms, color options, price and shipping. Quantity/unit: __. Destination: __.`}>Inquire about {product.sku}</WhatsAppLink>
    </article>)}</div>
    <p className={styles.guide}>Planning garment placement? Explore <a href="/embroidery-lace">embroidered lace</a>, <a href="/3d-flower-applique">3D floral appliques</a> and our <a href="/blog/lace-applique-placement-wedding-dress">wedding dress applique placement guide</a>.</p>
  </section>;
}
