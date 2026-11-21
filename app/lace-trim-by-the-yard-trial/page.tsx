import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {title:"Lace Trim by the Yard — Trial Orders | VELORACE LACE",description:"Trial lace trim by the yard for wholesale buyers — check quality, color and fit on a small order before custom bulk. Quotation review at 100–1,000 yards.",alternates:{canonical:"/lace-trim-by-the-yard-trial"}};
const steps=[
["Choose a direction.","Start from an existing design direction: the 12 hair-bow motif concepts, multicolor embroidery development, or the embroidery lace references (Multicolor Butterfly, Gold Floral, Aqua Floral, Blush Floral, Forest Floral, Scalloped Embroidered Lace)."],
["Order a trial length.","Buy a small length to evaluate. Trial length and trial MOQ: To be confirmed per design."],
["Check it on your product.","Review the mesh/tulle base, embroidery definition, color balance, scalloped edge and fit on your finished product — the same checks as a physical sample approval."],
["Approve and scale up.","Approve the physical sample and written specification; bulk production follows the approved specification, with MOQ, price and lead time confirmed for the selected construction."]
] as const;
const comparison=[
["Purpose","Evaluate lace quality, color and fit before committing","Full production run of your approved design"],
["Design","Start from existing design directions","Developed from your artwork or reference"],
["Colors","Existing directions; custom palette reviewed per design","Custom palette; Pantone references, swatch or visual palette accepted for review"],
["Length","Small trial length — To be confirmed per design","Quantity-based quotation review at 100, 250, 500 and 1,000 yards, after design and construction are defined"],
["Price","Quoted per design — To be confirmed","Quoted per approved specification"],
["Lead time","To be confirmed","To be confirmed"],
["Next step","Approve the physical sample and written specification","Bulk production follows the approved sample"]
] as const;
const specs=[
["Product Type","Custom embroidered lace trim — trial-length orders for wholesale buyers"],
["Base Fabric","Tulle or mesh options; subject to design review"],
["Target Width","Approx. 1.5 inches (38.1 mm), development target only (hair-bow trim)"],
["Confirmed Finished Width","To be confirmed after sampling"],
["Material Composition","To be confirmed"],
["Thread Colors","Customizable; final specification to be confirmed"],
["Color Reference","Pantone references, swatch or visual palette accepted for review"],
["Motif & Repeat","Customizable from artwork or references; 12 motif-led design concepts for hair bows"],
["Edge Finish","Decorative or scalloped edge, subject to review"],
["Trial Length","To be confirmed"],
["Trial MOQ","To be confirmed"],
["MOQ (Bulk)","To be confirmed"],
["Quotation Quantities","Quantity-based quotation review available at 100, 250, 500 and 1,000 yards, after design and construction are defined"],
["Sample Lead Time","To be confirmed"],
["Bulk Lead Time","To be confirmed"],
["Unit Price","Quoted per approved specification"],
["Order Unit","Yards or meters, confirmed in quotation"],
["Applications","Hair bows, childrenswear, fashion accessories, decorative trims, bridal accessories"],
["Sample Approval","Physical sample before bulk production"]
] as const;
const faqs=[
["Is this a retail lace shop?","No. VELORACE LACE is a B2B custom embroidery development supplier. Trial lengths are for wholesale buyers to evaluate lace before a custom bulk order; we do not sell finished retail lace by the yard as a shop."],
["How much can I order for a trial?","Trial length and trial MOQ are To be confirmed per design. For bulk planning, quantity-based quotation review is available at 100, 250, 500 and 1,000 yards after design and construction are defined."],
["What can I check with a trial length?","The mesh/tulle base, embroidery definition, color balance, scalloped edge and fit on your finished product — the same checks as a physical sample approval."],
["What happens after the trial?","Approve the physical sample and written specification. Bulk production follows the approved specification, with MOQ, price and lead time confirmed for the selected construction."]
] as const;
export default function TrialOrdersPage(){return <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
<nav className="mb-6 text-sm"><Link href="/">Home</Link> / Lace Trim Trial Orders</nav>
<header className="max-w-4xl"><p className="text-sm uppercase tracking-wider">B2B sampling and evaluation</p><h1 className="mt-3 text-4xl font-semibold md:text-6xl">Lace Trim by the Yard — Trial Orders for Wholesale Buyers</h1><p className="mt-6 text-lg leading-8">Buy a small trial length of embroidered lace trim first, check it on your finished product, then move to custom bulk. This page is for wholesale buyers — boutique bow brands, bridal designers and small-batch labels — who want to evaluate the lace before committing to a custom production run.</p><p className="mt-4 leading-7">This is not a retail lace shop. Trial lengths are for sampling and evaluation; bulk pricing is quoted per approved specification, not sold as retail yardage.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/contact" className="rounded-full bg-black px-6 py-3 text-white">Request a trial quotation</Link><a href="https://wa.me/8615767956637" className="rounded-full border px-6 py-3" target="_blank" rel="noreferrer">WhatsApp inquiry</a></div></header>
<section className="mt-16"><h2 className="text-3xl font-semibold">How a trial order works</h2><ol className="mt-6 grid gap-5 md:grid-cols-2">{steps.map(([h,p],i)=><li key={h} className="rounded-xl bg-neutral-100 p-6"><h3 className="text-xl font-semibold">{i+1}. {h}</h3><p className="mt-3 leading-7">{p}</p></li>)}</ol></section>
<section className="mt-16"><h2 className="text-3xl font-semibold">Trial order vs. custom bulk</h2><div className="mt-5 overflow-x-auto rounded-xl border" role="region" aria-label="Trial versus bulk comparison" tabIndex={0}><table className="w-full min-w-[580px] text-left text-sm md:text-base"><thead className="bg-neutral-900 text-white"><tr><th className="p-3">Comparison</th><th className="p-3">Trial order</th><th className="p-3">Custom bulk</th></tr></thead><tbody>{comparison.map(([h,a,b],i)=><tr key={h} className={i%2?"bg-white":"bg-neutral-50"}><th className="p-3 align-top">{h}</th><td className="p-3 align-top">{a}</td><td className="p-3 align-top">{b}</td></tr>)}</tbody></table></div></section>
<section className="mt-16"><h2 className="text-3xl font-semibold">Who trial orders are for</h2><ul className="mt-5 list-disc space-y-4 pl-6"><li><strong>Boutique hair-bow brands (US)</strong> — narrow embroidered tulle trim overlays in 12 motif-led design concepts; seasonal collections for Christmas, Halloween, back-to-school and Valentine&apos;s.</li><li><strong>Bridal designers</strong> — embroidered tulle and applique directions to evaluate before committing to gown quantities.</li><li><strong>Small-batch fashion and accessory brands</strong> — check the trim on the finished product first, then scale to a custom bulk order.</li></ul></section>
<section className="mt-16"><h2 className="text-3xl font-semibold">Lace Trim by the Yard (Trial) — Product Specifications</h2><div className="mt-5 w-full overflow-x-auto rounded-xl border" role="region" aria-label="Trial order specifications" tabIndex={0}><table className="w-full min-w-[580px] text-left text-sm md:text-base"><thead className="bg-neutral-900 text-white"><tr><th className="p-3">Specification</th><th className="p-3">Published / Proposed Display</th></tr></thead><tbody>{specs.map(([h,p],i)=><tr key={h} className={i%2?"bg-white":"bg-neutral-50"}><th className="p-3 align-top">{h}</th><td className="p-3">{p}</td></tr>)}</tbody></table></div><p className="mt-2 text-xs">On narrow screens, scroll horizontally to view all specifications.</p></section>
<section className="mt-16"><h2 className="text-3xl font-semibold">FAQ</h2>{faqs.map(([q,a])=><article key={q} className="mt-6"><h3 className="text-xl font-semibold">{q}</h3><p className="mt-2 leading-7">{a}</p></article>)}</section>
<nav className="mt-16 border-t pt-8" aria-label="Related pages"><h2 className="text-2xl font-semibold">Related pages</h2><ul className="mt-4 space-y-3"><li><Link className="underline" href="/hair-bow-lace">Hair Bow Lace Trim</Link> — 12 motif-led design concepts for US boutique hair bows; quotation review at 100–1,000 yards.</li><li><Link className="underline" href="/custom-multicolor-embroidered-lace">Custom Multicolor Embroidered Lace</Link> — multicolor embroidery developed from buyer artwork; Pantone references accepted.</li><li><Link className="underline" href="/embroidery-lace">Embroidery Lace</Link> — floral and butterfly embroidered lace references for garment development.</li><li><Link className="underline" href="/contact">Contact</Link> — send a reference for sampling and quotation.</li></ul><Link href="/contact" className="mt-7 inline-block rounded-full bg-black px-6 py-3 text-white">Request trial samples</Link></nav>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))})}}/>
</main>}