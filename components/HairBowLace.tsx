import Image from "next/image";
import WhatsAppLink from "@/components/WhatsAppLink";
import { hairBowDesigns, hairBowPath, hairBowUrl, type HairBowDesign } from "@/lib/hair-bow-lace";
import { absoluteUrl } from "@/lib/seo";

export function HairBowImage({ design, priority = false }: { design: HairBowDesign; priority?: boolean }) {
  return design.image ? <Image src={design.image} alt={design.alt} width={1400} height={1400} sizes="(max-width: 700px) 100vw, 50vw" priority={priority} /> : <div className="bow-image-pending"><span>DESIGN CONCEPT</span><strong>{design.name}</strong><small>Original concept image pending</small></div>;
}
export function HairBowCTA({ design, placement }: { design?: HairBowDesign; placement: string }) {
  return <WhatsAppLink className="button button-whatsapp" productCategory={design ? `Hair Bow Lace / ${design.name}` : "Hair Bow Lace"} placement={placement} message={`Hello VELORACE LACE, I am interested in ${design?.name ?? "the Hair Bow Lace Collection"} for children&apos;s boutique hair bows. Please review a 1.5 inch finished width. I will share colors, required yards/meters and delivery ZIP code. Please confirm MOQ, price and sampling options.`}>Discuss {design ? "this design" : "hair bow lace"} on WhatsApp</WhatsAppLink>;
}
export function HairBowCards({ designs = hairBowDesigns }: { designs?: HairBowDesign[] }) {
  return <div className="bow-grid">{designs.map(design => <a className="bow-card" key={design.slug} href={hairBowUrl(design)}><HairBowImage design={design} /><div><small>{design.theme}</small><h3>{design.name}</h3><p>{design.description}</p><span>Explore design & customization →</span></div></a>)}</div>;
}
export function HairBowBreadcrumb({ design }: { design?: HairBowDesign }) {
  const items = [{ name: "Home", path: "/" }, { name: "Hair Bow Lace", path: hairBowPath }, ...(design ? [{ name: design.name, path: hairBowUrl(design) }] : [])];
  return <><nav className="bow-breadcrumb" aria-label="Breadcrumb">{items.map((item, i) => <span key={item.path}>{i > 0 && " / "}{i === items.length - 1 ? <span aria-current="page">{item.name}</span> : <a href={item.path}>{item.name}</a>}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })) }) }} /></>;
}
export function HairBowFAQ({ items }: { items: { q: string; a: string }[] }) {
  return <section className="bow-faq"><h2>Hair bow lace questions</h2>{items.map(item => <details key={item.q} open><summary>{item.q}</summary><p>{item.a}</p></details>)}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }) }} /></section>;
}
export function FeaturedHairBowLace() {
  return <section className="section bow-featured" id="featured-hair-bow-lace"><p className="eyebrow">New development collection · US boutique bow makers</p><h2>Featured Hair Bow Lace Collection</h2><p>Custom embroidered tulle lace trim for children&apos;s hair bows and accessories. Explore 12 design concepts with a target width of 1.5 inches, then discuss your ribbon, colors and sample requirements.</p><a className="button button-dark" href={hairBowPath}>Explore all 12 hair bow lace designs →</a><HairBowCards designs={[hairBowDesigns[0], hairBowDesigns[4], hairBowDesigns[8]]} /></section>;
}
