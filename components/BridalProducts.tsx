import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { bridalProducts } from "@/lib/bridal-products";
import styles from "./BridalProducts.module.css";

export default function BridalProducts() {
  return (
    <section id="bridal-products" className={`section ${styles.section}`} aria-labelledby="bridal-products-heading">
      <div className="section-heading split-heading">
        <div><p className="eyebrow"><span /> Shop by construction</p><h2 id="bridal-products-heading">Five directions for your next bridal collection.</h2></div>
        <p>Compare wedding dress lace fabric and placement appliques from a bridal lace supplier in China. Select a design for a focused quote on quantity, color, samples and delivery.</p>
      </div>
      <nav className={styles.jumpLinks} aria-label="Bridal lace product types">
        {bridalProducts.map((product) => <a key={product.id} href={`#${product.id}`}>{product.type}<ArrowRight size={14} aria-hidden="true" /></a>)}
      </nav>
      <div className={styles.grid}>
        {bridalProducts.map((product) => {
          const fields = [
            ["Product type", product.type], ["Material / construction", product.construction],
            ["Technique", product.technique], ["Width / size", product.dimensions],
            ...(product.weight ? [["Weight", product.weight]] : []),
            ["MOQ", product.moq], ["Selling / pricing unit", product.unit],
            ["Custom color", product.customColor], ["Supply", product.supply],
            ...(product.origin ? [["Origin", product.origin]] : []),
            ["Sample", "Availability, cost and lead time: Confirm with quote"],
            ["Shipping", "Share destination and postcode; Confirm with quote"],
          ];
          const message = `Hello VELORACE LACE, I am interested in ${product.name} (${product.reference}) from /bridal-lace. Please confirm MOQ, selling unit, price, color options, sample cost and lead time, and shipping. My required color: __. Quantity: __. Application: __. Destination / postcode: __. Required arrival date: __.`;
          return (
            <article key={product.id} id={product.id} className={styles.card} aria-labelledby={`${product.id}-heading`}>
              {product.images.length ? <div className={styles.gallery}>
                <a href={product.images[0].src} target="_blank" rel="noreferrer" aria-label={`Open full photo: ${product.images[0].alt}`}>
                  <Image className={styles.mainImage} src={product.images[0].src} alt={product.images[0].alt} width={800} height={800} sizes="(max-width: 760px) 90vw, 44vw" />
                </a>
                <div className={styles.thumbnails}>{product.images.slice(1).map((photo) => <figure key={photo.src}><a href={photo.src} target="_blank" rel="noreferrer" aria-label={`Open full photo: ${photo.alt}`}><Image src={photo.src} alt={photo.alt} width={240} height={240} sizes="(max-width: 760px) 40vw, 20vw" /></a><figcaption>{photo.caption}</figcaption></figure>)}</div>
              </div> : null}
              <div className={styles.copy}>
                <p className={styles.reference}>{product.reference}</p>
                <h3 id={`${product.id}-heading`}>{product.name}</h3>
                <p>{product.description}</p>
                <div className={styles.keyFacts}><span>{product.dimensions}</span><span>MOQ: {product.moq}</span></div>
                <p className={styles.application}><strong>Application</strong>{product.application}</p>
                <details className={styles.specs}>
                  <summary>View buyer specifications <span aria-hidden="true">+</span></summary>
                  <dl>{fields.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                </details>
                <WhatsAppLink className={`button button-whatsapp ${styles.quote}`} message={message} productCategory="Bridal Lace" placement={`bridal_product_${product.id}_quote`}>Get MOQ &amp; quote <ArrowRight size={16} aria-hidden="true" /></WhatsAppLink>
                <small className={styles.note}>Include your color, quantity and destination. {product.images.length ? "Confirm shade and finish on a physical sample." : "Request product photos and sample options with your quote."}</small>
              </div>
            </article>
          );
        })}
      </div>
      <div id="bridal-sampling" className={styles.procurement}>
        <div><p className="eyebrow"><span /> From selection to order</p><h2>Make the sample answer the buying questions.</h2><p>VELORACE LACE coordinates product sourcing and quotation for your garment brief. Confirm the practical details for each design before placing an order.</p></div>
        <ol>
          <li><h3>Choose the construction</h3><p>Send a product reference, color, quantity and a gown or veil sketch. Use our <a href="/blog/how-to-choose-bridal-lace">bridal lace selection guide</a> to compare applications.</p></li>
          <li><h3>Confirm the quote &amp; sample</h3><p>Review MOQ, pricing unit, sample availability and cost. For a custom shade or motif, confirm feasibility and any strike-off cost first. See <a href="/custom-design">custom lace development</a>.</p></li>
          <li><h3>Approve the garment details</h3><p>Check the physical shade, transparency, drape, embroidery and dimensions. Fine tulle may suit veil development after testing; substantial beadwork and 3D flowers need a gown-focused assessment.</p></li>
          <li><h3>Plan production &amp; delivery</h3><p>Confirm stock or production timing, packing and shipping to your country and postcode. Freight and arrival dates are confirmed for the specific order.</p></li>
        </ol>
      </div>
    </section>
  );
}
