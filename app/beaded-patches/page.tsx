import type { Metadata } from "next";
import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import Link from "next/link";
import products from "@/lib/beaded-patches.json";
import { absoluteUrl } from "@/lib/seo";

const path = "/beaded-patches";
const title = "Wholesale Beaded Patches with Rope | VELORACE LACE";
const description = "Wholesale beaded patches with rope for UAE & Saudi gift buyers — falcon, UAE emblem, camel, palm tree and Hamsa designs. Custom colors on request. Ask for samples.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: absoluteUrl(path), type: "website", images: [{ url: absoluteUrl("/products/beaded-patches/01.jpg"), alt: "Gold UAE emblem falcon beaded patch with rope" }] },
};

const buyers = [
  ["Gift & souvenir shops (UAE, Saudi Arabia, Qatar, Kuwait)", "falcon, UAE emblem, camel and palm tree designs for tourist and National Day gifting."],
  ["Falconry & National Day gifts", "falcon and UAE emblem patches as hanging charms."],
  ["Bag, shoe & accessory brands", "patches as ready-to-attach decoration on bags, shoes and garments."],
  ["Ramadan & Eid gifting", "gold and pearl-white designs, Hamsa and evil eye for protective-gift lines."],
  ["Fashion boutiques", "crowns, unicorns and bows for girls' accessories and gift sets."],
] as const;

const steps = [
  "Choose a design from the list below, or send your reference artwork.",
  "Confirm colors and quantity — we confirm feasibility and price after review.",
  "Approve a physical sample before bulk production.",
  "Bulk order ships from China. For prices, minimum order quantities and lead times, message us on WhatsApp with the designs and quantities you need — we quote per design and quantity.",
] as const;

const faqs = [
  ["What are beaded patches with rope?", "Hand-finished patches made of beads and sequins, each with a hanging cord (approx. 14 cm). They hang on bags, garments, shoes and gifts, or sew on as decoration."],
  ["What sizes are beaded patches?", "Most designs in this collection are approx. 3.5–13.8 cm wide and 4–17.5 g; exact size and weight are listed per design above and are as annotated on the product photos — please confirm before ordering."],
  ["Which beaded patch designs sell best in the UAE and Saudi Arabia?", "Falcon and UAE emblem designs, camels, palm trees, and Hamsa and evil eye charms — with gold and pearl white the most requested colors for gifting."],
  ["How do I get a price and MOQ?", "Message us on WhatsApp (+86 157 6795 6637) with the designs and quantities you need — we quote per design and quantity."],
  ["Can I request custom colors or designs?", "Send your reference artwork and the colors you need — we confirm feasibility and pricing after review. 7-day rapid sampling is supported for the falcon, camel and UAE flag designs."],
  ["How do I order or request samples?", "Message us on WhatsApp (+86 157 6795 6637) or use the contact form. We recommend approving a physical sample before a bulk order."],
] as const;

export default function BeadedPatchesPage() {
  // Do not publish a 30-card page with broken images. The collection becomes
  // available automatically after all original JPEGs are committed and deployed.
  if (!products.every((product) => existsSync(join(process.cwd(), "public", product.image)))) notFound();
  const url = absoluteUrl(path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList", "@id": `${url}#collection`, name: "Beaded Patches with Rope — 30 Wholesale Designs",
        numberOfItems: products.length, itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem", position: index + 1,
          item: {
            "@type": "Product", name: product.name,
            description: product.description,
            image: absoluteUrl(product.image),
            url: `${url}#design-${product.number}`,
            brand: { "@type": "Brand", name: "VELORACE LACE" },
            additionalProperty: [
              { "@type": "PropertyValue", name: "Original collection number", value: `#${product.number}` },
              { "@type": "PropertyValue", name: "Color", value: product.color },
              { "@type": "PropertyValue", name: "Approximate size", value: product.size },
              { "@type": "PropertyValue", name: "Approximate weight", value: product.weight },
            ],
          },
        })),
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question", name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-8 text-sm text-neutral-600" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/products">Products</Link> / Beaded Patches</nav>
      <header className="max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">Wholesale gift and fashion accessories · UAE & Saudi Arabia</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Beaded Patches with Rope — Wholesale for Middle East Gift & Fashion Buyers</h1>
        <p className="mt-6 text-lg leading-8">VELORACE LACE supplies wholesale beaded patches with rope for gift shops, bag and accessory brands, and fashion buyers in the UAE, Saudi Arabia and across the Gulf. Each patch is hand-finished with beads and sequins and comes with a hanging cord (approx. 14 cm), ready to hang on bags, garments, shoes and gifts.</p>
        <p className="mt-4 leading-8">This first collection of 30 designs leads with the Gulf&apos;s most recognised symbols — the falcon and the UAE emblem, the camel, the palm tree, and the Hamsa and evil eye — in gold and pearl white for gifting, National Day, Ramadan and Eid.</p>
        <p className="mt-4 leading-8">For prices and minimum order quantities, message us on WhatsApp (+86 157 6795 6637) — we quote per design and quantity.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white">Request samples &amp; quote</Link>
          <a href="https://wa.me/8615767956637" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-300 px-6 py-3 font-semibold">WhatsApp inquiry</a>
        </div>
      </header>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Who buys these beaded patches?</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {buyers.map(([name, detail]) => <li key={name} className="rounded-2xl border border-neutral-200 p-5"><strong>{name}</strong> — {detail}</li>)}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">How ordering works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => <li key={step} className="rounded-2xl bg-neutral-100 p-6"><span className="text-2xl font-bold text-amber-800">{String(index + 1).padStart(2, "0")}</span><p className="mt-3 leading-7">{step}</p></li>)}
        </ol>
      </section>

      <section className="mt-16" aria-labelledby="beaded-collection-title">
        <h2 id="beaded-collection-title" className="text-3xl font-semibold">30 Beaded Patch Designs with Rope</h2>
        <p className="mt-4 max-w-5xl leading-7 text-neutral-700">Sizes and weights below are as annotated on the product photos (approx.) — please confirm exact size and weight with us before ordering. Rope length is approx. 14 cm on most designs. For prices, MOQ and lead times, message us on WhatsApp — we quote per design and quantity.</p>
        <p className="mt-2 text-sm text-neutral-600">Original design numbers #1–#30 are preserved, including #7 White Dove. Original RYL photo watermarks are retained.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article id={`design-${product.number}`} key={product.number} className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className="relative aspect-square bg-neutral-100">
                <Image src={product.image} alt={`${product.name} — original product photo with RYL watermark`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Design #{product.number}</p>
                <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
                  <dt className="font-semibold">Color</dt><dd>{product.color}</dd>
                  <dt className="font-semibold">Size</dt><dd>{product.size}</dd>
                  <dt className="font-semibold">Weight</dt><dd>{product.weight}</dd>
                </dl>
                <p className="mt-4 flex-1 text-sm leading-7 text-neutral-700">{product.description}</p>
                <Link href="/contact" className="mt-5 block rounded-full bg-neutral-900 px-4 py-3 text-center text-sm font-semibold text-white">Request samples &amp; quote</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-5xl">
        <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6 space-y-5">{faqs.map(([question, answer]) => <article key={question} className="border-b border-neutral-200 pb-5"><h3 className="text-lg font-semibold">{question}</h3><p className="mt-2 leading-7 text-neutral-700">{answer}</p></article>)}</div>
      </section>

      <section className="mt-16 rounded-2xl bg-neutral-100 p-7 md:p-10">
        <h2 className="text-3xl font-semibold">Related product collections and custom development</h2>
        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4">
          <Link className="font-semibold underline" href="/embroidery-lace">Embroidery Lace</Link>
          <Link className="font-semibold underline" href="/3d-flower-applique">3D Flower Applique</Link>
          <Link className="font-semibold underline" href="/custom-design">Custom Design</Link>
          <Link className="font-semibold underline" href="/contact">Request samples &amp; quote</Link>
        </div>
      </section>
    </main>
  );
}
