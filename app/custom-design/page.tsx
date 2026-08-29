import Image from "next/image";
import { ArrowRight, BadgeCheck, Factory, Palette, Send, Truck } from "lucide-react";
import { mediaUrl } from "@/lib/media";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Custom Lace Design & OEM Development",
  "Custom lace and applique development from sketches, samples and tech packs for fashion brands and garment manufacturers.",
  "/custom-design",
  mediaUrl("pastel-collection.jpg"),
);

export default function CustomDesignPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="inner-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Custom Design</span></nav>
          <p className="eyebrow"><span /> OEM and custom service</p>
          <h1>Custom lace development<br /><em>from idea to production.</em></h1>
          <p>Send a sketch, reference image, tech pack or physical sample. We help define the material, size, color, embellishment and production method.</p>
          <a className="button button-dark" href="/#contact">Send your design idea <ArrowRight size={17} /></a>
        </div>
        <div className="inner-hero-image"><Image src={mediaUrl("pastel-collection.jpg")} alt="Custom embroidered lace and 3D floral applique sample references" width={1200} height={1200} priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
      </section>

      <section className="section">
        <div className="section-heading centered-heading"><p className="eyebrow"><span /> Development workflow</p><h2>Clear approvals at every stage.</h2></div>
        <div className="service-grid">
          <article><Send /><h3>Share the brief</h3><p>Reference, size, application, quantity and target date.</p></article>
          <article><Palette /><h3>Develop the sample</h3><p>Material, motif, color and handwork are confirmed.</p></article>
          <article><BadgeCheck /><h3>Approve the standard</h3><p>Your signed sample becomes the bulk quality reference.</p></article>
          <article><Factory /><h3>Produce and inspect</h3><p>Controlled production with pre-shipment inspection.</p></article>
          <article><Truck /><h3>Ship worldwide</h3><p>Export packing and suitable freight coordination.</p></article>
        </div>
      </section>

      <section className="custom-design-context" aria-labelledby="custom-applique-brief-title">
        <div><p className="eyebrow"><span /> Applique development</p><h2 id="custom-applique-brief-title">Choose the construction before final artwork.</h2></div>
        <div>
          <p>If the reference uses raised petals, matched pairs or hand-applied decoration, review the <a href="/3d-flower-applique">3D flower applique Buyer Specifications</a> so the brief includes the fields needed for MOQ and sampling review.</p>
          <p>If the construction is not yet decided, compare <a href="/blog/3d-lace-applique-vs-flat-embroidered-applique">3D lace applique vs flat embroidered applique</a> by weight, placement, sewing, care and repeatability before requesting both samples.</p>
        </div>
      </section>
    </main>
  );
}
