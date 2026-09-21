import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Lace Products | Embroidered Lace & Lace Trim", "Browse embroidered lace, lace trim and custom lace development for fashion, garment, bridal, childrenswear and accessory buyers.", "/products");

const construction = categories.filter((item) => ["embroidery-lace", "lace-trim", "eyelash-lace", "3d-flower-applique"].includes(item.slug));
const application = categories.filter((item) => ["bridal-lace", "kids-lace-trim"].includes(item.slug));

function Group({ title, intro, items }: { title: string; intro: string; items: typeof categories }) {
  return <section className="section product-hub-group"><div className="section-heading split-heading"><div><p className="eyebrow"><span /> Product categories</p><h2>{title}</h2></div><p>{intro}</p></div><div className="category-grid">{items.map((item, index) => <a className="category-card" href={`/${item.slug}`} key={item.slug}><Image src={item.image} alt={item.alt} width={900} height={700} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" /><span className="category-shade" /><span className="category-index">0{index + 1}</span><span className="category-copy"><strong>{item.name}</strong><small>{item.description}</small></span><span className="round-arrow"><ArrowRight size={18} /></span></a>)}</div></section>;
}

export default function ProductsPage() {
  return <main><section className="page-hero"><p className="eyebrow"><span /> B2B lace product center</p><h1>Embroidered lace &amp; lace trim<br /><em>for sourcing and development.</em></h1><p>Start with our core lace categories, then refine by construction, finish, customization or final application. Custom multicolor embroidery can be developed from artwork or reference images.</p></section><Group title="Core lace products." intro="Start with embroidered lace and lace trim, then refine the construction, edge finish, color direction or dimensional decoration." items={construction} /><Group title="Lace by application." intro="Use these collections when the final application is already defined, such as bridal or childrenswear." items={application} /><section className="final-cta"><p>Not sure which category fits your design?</p><h2>Send your reference and<br />let us recommend options.</h2><a className="button button-light" href="/#contact">Ask our sourcing team <ArrowRight size={17} /></a></section></main>;
}
