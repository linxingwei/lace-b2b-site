import Link from "next/link";
import { HairBowCTA } from "@/components/HairBowLace";

type Variant = "multicolor" | "hairBow" | "embroidery";
const data: Record<Variant, { title: string; rows: readonly (readonly [string, string])[] }> = {
  multicolor: {
    title: "Custom Multicolor Embroidered Lace - Product Specifications",
    rows: [
      ["Product Type", "Custom multicolor embroidered lace trim"],
      ["Base Fabric", "Tulle or mesh options; subject to design review"],
      ["Embroidery", "Multicolor embroidery developed from buyer artwork"],
      ["Finished Width", "To be confirmed"],
      ["Material Composition", "To be confirmed"],
      ["Thread Colors", "Custom palette; final color count to be confirmed"],
      ["Color Reference", "Pantone references, swatch or visual palette accepted for review"],
      ["Motif & Repeat", "Customizable from artwork or references"],
      ["Edge Finish", "Scalloped or other requested edge; feasibility review required"],
      ["MOQ", "To be confirmed"],
      ["Sample Lead Time", "To be confirmed"],
      ["Bulk Lead Time", "To be confirmed"],
      ["Unit Price", "Quoted per approved specification"],
      ["Applications", "Hair bows, childrenswear, fashion accessories, decorative trims"],
      ["Customization", "Artwork, colors, motif scale, repeat, base and width"],
    ],
  },
  hairBow: {
    title: "Hair Bow Lace Trim - Product Specifications",
    rows: [
      ["Product Type", "Custom embroidered tulle lace trim for hair bows"],
      ["Design Collection", "12 motif-led design concepts"],
      ["Intended Application", "Boutique hair bows and hair accessories"],
      ["Base Fabric", "Tulle or mesh; final construction subject to approval"],
      ["Target Width", "Approx. 1.5 inches (38.1 mm), development target only"],
      ["Confirmed Finished Width", "To be confirmed after sampling"],
      ["Material Composition", "To be confirmed"],
      ["Thread Colors", "Customizable; final specification to be confirmed"],
      ["Motif & Repeat", "Customizable to fit backing ribbon and bow shape"],
      ["Edge Finish", "Decorative or scalloped edge, subject to review"],
      ["MOQ", "To be confirmed"],
      ["Sample Lead Time", "To be confirmed"],
      ["Bulk Lead Time", "To be confirmed"],
      ["Order Unit", "Yards or meters, confirmed in quotation"],
      ["Quotation Quantities", "Quantity-based quotation review available at 100, 250, 500 and 1,000 yards, after design and construction are defined"],
      ["Sample Approval", "Physical sample before bulk production"],
    ],
  },
  embroidery: {
    title: "Embroidery Lace - Product Specifications",
    rows: [
      ["Product Type", "Embroidered lace for garment and accessory development"],
      ["Base Options", "Mesh, organza and suitable specialty bases"],
      ["Material Composition", "To be confirmed by selected style"],
      ["Finished Width", "To be confirmed by selected style"],
      ["Embroidery Design", "Floral, butterfly, multicolor and other reference styles"],
      ["Representative References", "Multicolor Butterfly, Gold Floral, Aqua Floral, Blush Floral, Forest Floral, Scalloped Embroidered Lace"],
      ["Thread Colors", "Custom color references and multicolor development"],
      ["Motif & Repeat", "Reviewed according to buyer requirements"],
      ["Edge Finish", "To be confirmed by selected style"],
      ["MOQ", "To be confirmed"],
      ["Sample Lead Time", "To be confirmed"],
      ["Bulk Lead Time", "To be confirmed"],
      ["Unit Price", "Quoted after style and construction review"],
      ["Applications", "Dresses, blouses, bridal accessories, garment panels"],
      ["Sample Approval", "Physical sample recommended before bulk"],
    ],
  },
};
const destinations = [
  { href: "/custom-multicolor-embroidered-lace", label: "Custom Multicolor Lace", key: "multicolor" },
  { href: "/hair-bow-lace", label: "Hair Bow Lace Trim", key: "hairBow" },
  { href: "/embroidery-lace", label: "Embroidery Lace", key: "embroidery" },
] as const;

export default function ProductSpecifications({ variant, whatsapp }: { variant: Variant; whatsapp: string }) {
  const { title, rows } = data[variant];
  return (
    <section id="product-specifications" aria-labelledby={`product-specifications-${variant}`} className="mx-auto my-12 w-full max-w-6xl min-w-0 px-5">
      <h2 id={`product-specifications-${variant}`} className="mb-5 text-2xl font-semibold md:text-3xl">{title}</h2>
      <div className="w-full max-w-full overflow-x-auto rounded-xl border border-neutral-200" role="region" aria-label={title} tabIndex={0}>
        <table className="w-full min-w-[580px] border-collapse text-left text-sm md:text-base">
          <thead className="bg-neutral-900 text-white"><tr><th scope="col" className="w-[34%] p-3">Specification</th><th scope="col" className="p-3">Published / Proposed Display</th></tr></thead>
          <tbody>{rows.map(([label, value], index) => <tr key={label} className={index % 2 === 0 ? "bg-neutral-50" : "bg-white"}><th scope="row" className="p-3 align-top font-semibold">{label}</th><td className="p-3 align-top break-words">{value}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-neutral-600">On narrow screens, scroll the table horizontally to view all specifications. Unconfirmed production terms are subject to factory review.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {variant === "hairBow" ? <HairBowCTA placement="hair_bow_product_specifications" /> : <a href={whatsapp} className="inline-block rounded-full bg-black px-5 py-3 font-semibold text-white">Send inquiry on WhatsApp</a>}
        <Link href="/contact" className="inline-block rounded-full border border-neutral-400 px-5 py-3 font-semibold text-neutral-900">{variant === "hairBow" ? "Request quote by online form" : "Request quote by form"}</Link>
      </div>
      <nav aria-label="Related product sourcing pages" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {destinations.filter(item => item.key !== variant).map(item => <Link key={item.href} className="font-semibold underline" href={item.href}>{item.label}</Link>)}
        <Link className="font-semibold underline" href="/contact">Contact VELORACE LACE</Link>
      </nav>
    </section>
  );
}
