import type { Metadata } from "next";
import Link from "next/link";

const base = "https://www.veloracelace.com";
const path = "/back-to-school-embroidered-lace-trim";
const whatsapp = "https://wa.me/8615767956637?text=Hello%20VELORACE%20LACE%2C%20I%20need%20custom%20back-to-school%20multicolor%20embroidered%20lace%20trim.%20I%20will%20send%20my%20apple%2C%20pencil%2C%20book%20or%20school%20bow%20reference%2C%20colors%2C%20width%2C%20application%20and%20quantity.";

export const metadata: Metadata = {
  title: "Back-to-School Embroidered Lace Trim | Custom Multicolor",
  description: "Develop custom multicolor back-to-school embroidered lace trim with apple, pencil, book and school-bow motifs for hair bows, children's accessories and boutique collections.",
  alternates: { canonical: path },
  openGraph: { title: "Custom Back-to-School Embroidered Lace Trim | VELORACE LACE", description: "Develop school-themed multicolor embroidered lace from buyer artwork with custom colors, repeat, width and physical sample review.", url: path, type: "website" },
};

const faqs = [
  ["What back-to-school motifs can be developed?", "Apple, pencil, book, school bow and other school-themed motifs can be reviewed from buyer artwork or references. The final motif construction should be confirmed through sampling."],
  ["Can I use my school or brand colors?", "Yes. Send the intended color palette or Pantone references. Thread-color feasibility and the final combination should be reviewed with the design and sample."],
  ["Can this lace be developed for boutique hair bows?", "Yes. Send the backing ribbon width and finished bow size so motif scale and repeat can be reviewed around the bow loops and center wrap."],
  ["Can several school motifs repeat in one trim?", "Yes, subject to the available trim width and embroidery construction. A small set of readable motifs is usually easier to recognize than many tiny details."],
  ["Can I approve a sample before bulk production?", "Yes. A physical sample is recommended to check color balance, stitch definition, motif readability, repeat, width and application fit before bulk specifications are confirmed."],
] as const;

export default function BackToSchoolLacePage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base }, { "@type": "ListItem", position: 2, name: "Seasonal Embroidered Lace", item: `${base}/seasonal-embroidered-lace-trim` }, { "@type": "ListItem", position: 3, name: "Back-to-School Embroidered Lace Trim", item: `${base}${path}` }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  return <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className="mb-6 text-sm text-neutral-600"><Link href="/">Home</Link> / <Link href="/seasonal-embroidered-lace-trim">Seasonal Lace</Link> / Back-to-School Lace</nav>
    <section className="max-w-4xl"><p className="mb-3 text-sm font-semibold uppercase tracking-wider">School-season collection development · Multicolor embroidery</p><h1 className="text-4xl font-semibold leading-tight md:text-6xl">Custom Back-to-School Multicolor Embroidered Lace Trim</h1><p className="mt-6 text-lg leading-8 text-neutral-700">Develop school-themed embroidered lace around your boutique collection, brand palette and finished product. Apple, pencil, book and school-bow motifs can be adapted into repeating multicolor embroidery for children&apos;s hair bows, accessories, garments and decorative trims.</p><div className="mt-7 flex flex-wrap gap-3"><a className="rounded-full bg-black px-6 py-3 text-white" href={whatsapp}>Send school-season design</a><Link className="rounded-full border border-neutral-300 px-6 py-3" href="/hair-bow-lace">View hair bow concepts</Link></div></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Back-to-school motif directions</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{[["Apple + pencil + bow","A clear school-season combination for boutique accessories. Develop motif spacing around the intended trim width and bow construction."],["Books + apple + school bow","A multi-motif direction that can create a stronger back-to-school story while keeping each element large enough to read."],["Pencil-led repeat","A cleaner repeat can focus on one primary school motif with a supporting bow or apple when a simpler embroidery construction is preferred."],["Boutique color palette","Use school colors, brand colors or a coordinated seasonal palette instead of relying on one generic color scheme."],["Limited readable motifs","For narrow trims, prioritize a few recognizable shapes rather than many tiny classroom details that may lose definition in embroidery."],["Buyer artwork development","Send your own school-themed artwork or reference. Important visual identity can be retained while small details are adapted for embroidery feasibility."]].map(([h,p]) => <article className="rounded-2xl border border-neutral-200 p-6" key={h}><h3 className="text-xl font-semibold">{h}</h3><p className="mt-3 leading-7 text-neutral-700">{p}</p></article>)}</div></section>

    <section className="mt-16 rounded-2xl bg-neutral-100 p-7 md:p-10"><h2 className="text-3xl font-semibold">Plan school motifs around the finished hair bow.</h2><p className="mt-4 max-w-4xl leading-7 text-neutral-700">A back-to-school motif must remain recognizable after the trim is folded into bow loops. Send the backing ribbon width, finished bow dimensions and center-wrap reference so the apple, pencil, book or bow motifs can be reviewed at an appropriate scale and repeat.</p><Link className="mt-5 inline-block font-semibold underline" href="/hair-bow-lace">Explore custom multicolor hair bow lace</Link></section>

    <section className="mt-16 grid gap-6 md:grid-cols-3"><article className="rounded-2xl border border-neutral-200 p-6"><h2 className="text-xl font-semibold">1. Send the collection brief</h2><p className="mt-3 leading-7 text-neutral-700">Share artwork, school motifs, target colors, application and approximate finished width.</p></article><article className="rounded-2xl border border-neutral-200 p-6"><h2 className="text-xl font-semibold">2. Review layout & construction</h2><p className="mt-3 leading-7 text-neutral-700">Discuss motif scale, repeat, thread colors, mesh base and edge direction before sampling.</p></article><article className="rounded-2xl border border-neutral-200 p-6"><h2 className="text-xl font-semibold">3. Approve the sample</h2><p className="mt-3 leading-7 text-neutral-700">Check color contrast, stitch definition, motif visibility, width, repeat and fit before bulk confirmation.</p></article></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Related seasonal embroidery</h2><p className="mt-4 leading-7 text-neutral-700">Build a wider collection through <Link className="font-semibold underline" href="/seasonal-embroidered-lace-trim">seasonal multicolor embroidered lace trim</Link>, compare <Link className="font-semibold underline" href="/christmas-embroidered-lace-trim">Christmas embroidery</Link> and <Link className="font-semibold underline" href="/halloween-embroidered-lace-trim">Halloween embroidery</Link>, or start with the broader <Link className="font-semibold underline" href="/custom-multicolor-embroidered-lace">custom multicolor embroidered lace</Link> service.</p></section>

    <section className="mt-16"><h2 className="text-3xl font-semibold">Back-to-school embroidered lace FAQ</h2><div className="mt-6 divide-y">{faqs.map(([q,a]) => <div className="py-5" key={q}><h3 className="text-xl font-semibold">{q}</h3><p className="mt-2 leading-7 text-neutral-700">{a}</p></div>)}</div></section>
    <section className="mt-16 rounded-2xl bg-black p-8 text-white md:p-10"><h2 className="text-3xl font-semibold">Develop your back-to-school lace collection.</h2><p className="mt-4 max-w-3xl leading-7 text-neutral-200">Send the motifs, colors, target width, application, estimated quantity and destination. The brief can then be reviewed for sample development and commercial specification.</p><a className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black" href={whatsapp}>Send school-season reference</a></section>
  </main>;
}
