import Image from "next/image";
import { ArrowRight, BadgeCheck, Factory, Palette, Send, Truck } from "lucide-react";
import { mediaUrl } from "@/lib/media";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Custom Multicolor Lace Design & OEM Development",
  "Develop custom multicolor embroidered lace from artwork, samples and tech packs. Review thread colors, motif, repeat, width, mesh base and sample construction with VELORACE LACE.",
  "/custom-design",
  mediaUrl("pastel-collection.jpg"),
);

export default function CustomDesignPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Custom Design</span></nav>
          <p className="eyebrow"><span /> OEM and custom embroidery development</p>
          <h1>Custom multicolor lace development<br /><em>from artwork to sample.</em></h1>
          <p>Send a sketch, reference image, tech pack or physical sample. We can review multicolor embroidery direction together with motif size, thread colors, repeat spacing, width, mesh base, edge construction and embellishment requirements before sampling.</p>
          <a className="button button-dark" href="/custom-multicolor-embroidered-lace">Develop multicolor embroidered lace <ArrowRight size={17} /></a>
        </div>
        <div className="inner-hero-image"><Image src={mediaUrl("pastel-collection.jpg")} alt="Multicolor custom embroidered lace and floral applique development references" width={1200} height={1200} priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
      </section>

      <section className="section">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Development workflow</p><h2>Define the design before bulk production.</h2></div>
        <div className="service-grid">
          <article><Send /><h3>Share the brief</h3><p>Send artwork or a reference plus application, quantity, target width and destination.</p></article>
          <article><Palette /><h3>Plan colors and construction</h3><p>Review thread colors, motif scale, repeat, base material and edge structure for the requested design.</p></article>
          <article><BadgeCheck /><h3>Approve the sample</h3><p>Review the physical sample and written specification before moving to bulk production.</p></article>
          <article><Factory /><h3>Confirm production</h3><p>Bulk production follows the approved construction and agreed commercial specification.</p></article>
          <article><Truck /><h3>Arrange shipment</h3><p>Confirm destination and shipping requirements when requesting the quotation.</p></article>
        </div>
      </section>

      <section className="custom-design-context" aria-labelledby="multicolor-design-title">
        <div><p className="eyebrow"><span /> Core capability</p><h2 id="multicolor-design-title">Need several embroidery colors in one lace design?</h2></div>
        <div>
          <p>VELORACE LACE focuses on custom embroidered trims where color is part of the design rather than an afterthought. For seasonal motifs, children&apos;s accessories, fashion trims and branded patterns, send the artwork and intended palette so the embroidery direction can be reviewed for sampling.</p>
          <p>See our dedicated <a href="/custom-multicolor-embroidered-lace">custom multicolor embroidered lace trim</a> page for the information to include in a development brief, then explore <a href="/hair-bow-lace">multicolor hair bow lace concepts</a> for motif-led application ideas.</p>
        </div>
      </section>

      <section className="custom-design-context" aria-labelledby="custom-applique-brief-title">
        <div><p className="eyebrow"><span /> Applique development</p><h2 id="custom-applique-brief-title">Choose the construction before final artwork.</h2></div>
        <div>
          <p>If the reference uses raised petals, matched pairs or hand-applied decoration, review the <a href="/3d-flower-applique">3D flower applique buyer specifications</a> so the brief includes the fields needed for sampling and quotation review.</p>
          <p>If the construction is not yet decided, compare <a href="/blog/3d-lace-applique-vs-flat-embroidered-applique">3D lace applique vs flat embroidered applique</a> by weight, placement, sewing, care and repeatability before requesting samples.</p>
        </div>
      </section>
    </main>
  );
}
