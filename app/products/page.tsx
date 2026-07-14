import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";
import { bridalApplique } from "@/lib/products";
import Image from "next/image";

export const metadata = createPageMetadata("Wholesale Lace Products & Garment Accessories", "Browse lace trims by construction, finish and garment application, including embroidery lace, eyelash lace, bridal lace and 3D appliques.", "/products");

const construction = categories.filter((item) => ["embroidery-lace", "eyelash-lace", "3d-flower-applique"].includes(item.slug));
const application = categories.filter((item) => ["lace-trim", "bridal-lace", "kids-lace-trim"].includes(item.slug));

function Group({ title, intro, items }: { title: string; intro: string; items: typeof categories }) {
  return <section className="section product-hub-group"><div className="section-heading split-heading"><div><p className="eyebrow"><span /> Product categories</p><h2>{title}</h2></div><p>{intro}</p></div><div className="category-grid">{items.map((item, index) => <a className="category-card" href={`/${item.slug}`} key={item.slug}><img src={item.image} alt={item.alt} width="900" height="700" loading="lazy" decoding="async" /><span className="category-shade" /><span className="category-index">0{index + 1}</span><span className="category-copy"><strong>{item.name}</strong><small>{item.description}</small></span><span className="round-arrow"><ArrowRight size={18} /></span></a>)}</div></section>;
}

export default function ProductsPage() {
  return <main><section className="page-hero"><p className="eyebrow"><span /> Wholesale product center</p><h1>Lace trims organized for<br /><em>faster sourcing.</em></h1><p>Browse by lace construction or by end-use collection. Every category supports wholesale supply, sample evaluation and custom development.</p></section><section className="section featured-product-section"><div className="section-heading split-heading"><div><p className="eyebrow"><span /> Featured custom design</p><h2>Our first detailed product.</h2></div><p>A made-to-order bridal appliqué concept with sample development and flexible customization.</p></div><a className="featured-product-card" href={`/products/${bridalApplique.slug}`}><Image src={bridalApplique.image} alt={bridalApplique.imageAlt} width={1122} height={1402} sizes="(max-width: 800px) 100vw, 46vw" /><div><span>Custom Design</span><h3>{bridalApplique.name}</h3><p>SKU {bridalApplique.sku}</p><p>{bridalApplique.category}</p><strong>MOQ: 30 Pairs</strong><b>View Product <ArrowRight size={16} /></b></div></a></section><Group title="By construction and finish." intro="Start here when your technical requirement is defined by embroidery method, edge finish or dimensional decoration." items={construction} /><Group title="By collection and application." intro="Start here when you are sourcing for bridal, childrenswear or a broader garment trim program." items={application} /><section className="final-cta"><p>Not sure which category fits your design?</p><h2>Send your reference and<br />let us recommend options.</h2><a className="button button-light" href="/#contact">Ask our sourcing team <ArrowRight size={17} /></a></section></main>;
}
