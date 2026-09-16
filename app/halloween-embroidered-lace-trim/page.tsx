import type { Metadata } from "next";
import Link from "next/link";

const base = "https://www.veloracelace.com";
const path = "/halloween-embroidered-lace-trim";
const whatsapp = "https://wa.me/8615767956637?text=Hello%20VELORACE%20LACE%2C%20I%20need%20custom%20Halloween%20multicolor%20embroidered%20lace%20trim.%20I%20will%20send%20my%20ghost%2C%20pumpkin%20or%20other%20motif%20reference%2C%20colors%2C%20width%2C%20application%20and%20quantity.";

export const metadata: Metadata = {
  title: "Custom Halloween Embroidered Lace Trim | Multicolor Supplier",
  description: "Develop custom multicolor Halloween embroidered lace trim with ghost, pumpkin, bow and other motifs for hair bows, children's accessories and fashion trims.",
  alternates: { canonical: path },
  openGraph: { title: "Custom Halloween Multicolor Embroidered Lace Trim | VELORACE LACE", description: "Custom Halloween motif lace trim from artwork or references with coordinated thread colors, repeat, width and physical sample review.", url: path, type: "website" },
};

const faqs = [
  ["Can I customize ghost and pumpkin motifs?", "Yes. Send your artwork or reference images and identify the motifs that matter most. Motif scale, spacing and embroidery feasibility are reviewed before sampling."],
  ["Can Halloween lace include pink?", "Yes. A Halloween palette can combine pink with black, white, orange, purple or other coordinated colors according to the buyer's collection. Send the intended palette for development review."],
  ["Can this trim be developed for hair bows?", "Yes. Send the backing ribbon width and finished bow size so the motif repeat can be reviewed around the bow loops and center fold."],
  ["Should small decorative details be simplified?", "Often, yes. Very small details may lose definition in embroidery. The important motif identity should be preserved while scale, outlines and stitchable details are reviewed during sample development."],
  ["Can I approve a physical sample before bulk production?", "Yes. A physical sample is recommended to review color balance, stitch definition, motif readability, width, repeat and application fit before confirming bulk specifications."],
] as const;

export default function HalloweenLacePage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base }, { "@type": "ListItem", position: 2, name: "Seasonal Embroidered Lace", item: `${base}/seasonal-embroidered-lace-trim` }, { "@type": "ListItem", position: 3, name: "Halloween Embroidered Lace Trim", item: `${base}${path}` }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  return <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className="mb-6 text-sm text-neutral-600"><Link href="/">Home</Link> / <Link href="/seasonal-embroidered-lace-trim">Seasonal Lace</Link> / Halloween Lace</nav>
    <section className="max-w-4xl"><p className="mb-3 text-sm font-semibold uppercase tracking-wider">Halloween collection development · Multicolor embroidery</p><h1 className="text-4xl font-semibold leading-tight md:text-6xl">Custom Halloween Multicolor Embroidered Lace Trim</h1><p className="mt-6 text-lg leading-8 text-neutral-700">Develop Halloween embroidered lace trim around your own motif direction and color palette. Ghosts, pumpkins, bows and other recognizable Halloween elements can be adapted into repeating multicolor embroidery for children's boutique hair bows, accessories, garments and decorative fashion trims.</p><div className="mt-7 flex flex-wrap gap-3"><a className="rounded-full bg-black px-6 py-3 text-white" href={whatsapp}>Send Halloween design</a><Link className="rounded-full border border-neutral-300 px-6 py-3" href="/hair-bow-lace">View hair bow concepts</Link></div></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Halloween motif and color directions</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{[["Ghost + pumpkin + bow","A strong boutique-accessory direction. Keep the main motifs large enough to remain recognizable in a narrow repeating trim."],["Pink Halloween palette","Combine pink with selected Halloween colors for children's boutique collections rather than relying only on orange and black."],["Ghost-led repeat","Use one strong ghost direction with supporting motifs when a cleaner, more embroidery-friendly repeat is preferred."],["Pumpkin-led repeat","Build the repeat around a readable pumpkin motif and coordinate supporting colors with the finished product."],["Limited color plan","When production simplicity matters, reduce the palette to a purposeful set of clearly separated thread colors instead of many similar shades."],["Buyer artwork development","Send original sketches, references or motifs. Important shapes can be retained while small details are simplified for embroidery feasibility."]].map(([h,p]) => <article className="rounded-2xl border border-neutral-200 p-6" key={h}><h3 className="text-xl font-semibold">{h}</h3><p className="mt-3 leading-7 text-neutral-700">{p}</p></article>)}</div></section>

    <section className="mt-16 rounded-2xl bg-neutral-100 p-7 md:p-10"><h2 className="text-3xl font-semibold">Make Halloween motifs readable on the finished bow.</h2><p className="mt-4 max-w-4xl leading-7 text-neutral-700">For boutique hair-bow trim, the flat lace strip is only the starting point. Once folded into loops, small motifs can disappear behind the center wrap or turn away from the viewer. Send the backing ribbon width and finished bow dimensions so motif scale and repeat can be reviewed around the actual application.</p><Link className="mt-5 inline-block font-semibold underline" href="/hair-bow-lace">Explore custom multicolor hair bow lace</Link></section>

    <section className="mt-16 grid gap-6 md:grid-cols-3"><article className="rounded-2xl border border-neutral-200 p-6"><h2 className="text-xl font-semibold">1. Send motifs</h2><p className="mt-3 leading-7 text-neutral-700">Share ghost, pumpkin, bow or other artwork plus the intended product application.</p></article><article className="rounded-2xl border border-neutral-200 p-6"><h2 className="text-xl font-semibold">2. Define palette & repeat</h2><p className="mt-3 leading-7 text-neutral-700">Review thread colors, target width, motif scale, spacing, mesh base and edge direction.</p></article><article className="rounded-2xl border border-neutral-200 p-6"><h2 className="text-xl font-semibold">3. Review sample</h2><p className="mt-3 leading-7 text-neutral-700">Check stitch definition, color contrast, motif readability, repeat and fit before bulk confirmation.</p></article></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Related seasonal embroidery</h2><p className="mt-4 leading-7 text-neutral-700">Build a broader seasonal program through <Link className="font-semibold underline" href="/seasonal-embroidered-lace-trim">seasonal multicolor embroidered lace trim</Link>, compare the <Link className="font-semibold underline" href="/christmas-embroidered-lace-trim">Christmas embroidered lace</Link> direction, or start from the broader <Link className="font-semibold underline" href="/custom-multicolor-embroidered-lace">custom multicolor embroidered lace</Link> development page.</p></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Halloween embroidered lace FAQ</h2><div className="mt-6 divide-y">{faqs.map(([q,a]) => <div className="py-5" key={q}><h3 className="text-xl font-semibold">{q}</h3><p className="mt-2 leading-7 text-neutral-700">{a}</p></div>)}</div></section>
    <section className="mt-16 rounded-2xl bg-black p-8 text-white md:p-10"><h2 className="text-3xl font-semibold">Develop your Halloween lace collection.</h2><p className="mt-4 max-w-3xl leading-7 text-neutral-200">Send the motifs, colors, target width, application, estimated quantity and destination. We can use that brief to discuss sample development without assuming unconfirmed production specifications.</p><a className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black" href={whatsapp}>Send Halloween reference</a></section>
  </main>;
}
