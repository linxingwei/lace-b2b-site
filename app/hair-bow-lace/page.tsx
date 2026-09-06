import { HairBowBreadcrumb, HairBowCards, HairBowCTA, HairBowFAQ } from "@/components/HairBowLace";
import { conceptNotice, hairBowPath, orderingAnswer } from "@/lib/hair-bow-lace";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "US Hair Bow Lace Trim & Tulle Ribbon",
  "Explore 12 embroidered tulle lace concepts for US boutique hair bows. Target 1.5 inch lace ribbon, custom motifs and colors; ask about sampling and ordering.",
  hairBowPath,
);

const faq = [
  { q: "What is embroidered tulle lace trim for hair bows?", a: "VELORACE LACE hair bow lace is a collection of narrow embroidered tulle trim concepts for decorative ribbon overlays. The 12 designs cover Christmas, Halloween, school, cross and floral, ballet, teddy bear, bunny and cherry themes." },
  { q: "How is a hair bow lace overlay used?", a: "Place the lace over a coordinating ribbon, align the motifs with the intended loops, and test the center fold and attachment. Review the finished bow with a physical sample before making a production run." },
  { q: "Is this 1.5 inch lace ribbon?", a: "Approximately 1.5 inches (38.1 mm) is the requested development target. The final width, mesh, scalloped edge, repeat and fit on your ribbon are confirmed through sample review." },
  { q: "What can be customized?", a: "Share your thread colors, motif scale, repeat spacing, mesh base, edge finish and desired width. VELORACE LACE reviews feasibility for your boutique hair bow supplies program before confirming the sample specification." },
  { q: "Are these finished products or real factory photos?", a: conceptNotice },
  { q: "How do I request a sample or place an order?", a: orderingAnswer + " Sample scope is agreed before development; a bulk order follows approval of the physical sample and written specification." },
  { q: "Who is this collection designed for in the United States?", a: "The collection is intended for US boutique hair bow brands, hair accessory designers, bow makers and wholesale bow supply buyers developing seasonal or evergreen collections. It is supplied as custom lace trim rather than finished retail hair bows." },
];

export default function HairBowCollection() {
  return <main className="bow-page">
    <HairBowBreadcrumb />
    <section className="bow-intro">
      <p className="eyebrow">VELORACE LACE · For US boutique hair bow brands</p>
      <h1>Custom Embroidered Lace Trim for Hair Bows</h1>
      <p className="bow-lead">1.5 Inch Embroidered Tulle Lace Trim · 12 design concepts</p>
      <p>Decorative tulle lace overlays developed for children&apos;s boutique hair bows and hair accessories in the United States. Choose a motif direction and develop a custom lace ribbon around your backing ribbon, bow shape and brand colors.</p>
      <HairBowCTA placement="hair_bow_collection_hero" />
      <p className="bow-notice">{conceptNotice}</p>
    </section>
    <section className="bow-guide">
      <h2>Designed for the US boutique hair bow market</h2>
      <p>This B2B collection supports boutique bow brands, hair accessory designers, bow makers and wholesale supply buyers. Christmas, Halloween, back-to-school, ballet, faith, bunny, teddy bear and cherry concepts help buyers plan seasonal and evergreen releases for the US market.</p>
      <p>Product development uses inches and yards first for US buying conversations. Final production documents may also include millimeters and meters. Send the backing ribbon width, bow size and intended launch season so the motif repeat can be reviewed around the finished bow.</p>
    </section>
    <section id="designs"><h2>Choose your hair bow lace design</h2><HairBowCards /></section>
    <section className="bow-guide">
      <h2>From lace concept to a finished bow</h2>
      <ol>
        <li><strong>Define the fit.</strong> Send your ribbon width and intended bow size. A 1.5 inch target is a development request, not a measured guarantee.</li>
        <li><strong>Plan the overlay.</strong> Align the embroidered repeat with the loops; check what the center wrap will cover.</li>
        <li><strong>Review customization.</strong> Discuss thread colors, motif scale, mesh and edge finish. Confirm technical feasibility before sampling.</li>
        <li><strong>Approve a physical sample.</strong> Check hand feel, edge fit, motif visibility and your attachment method on the finished accessory.</li>
        <li><strong>Confirm the order.</strong> Agree the approved specification, order length and commercial terms before bulk production.</li>
      </ol>
      <p>{orderingAnswer}</p>
      <p>Explore our <a href="/custom-embroidered-lace-trim">custom embroidered lace trim development</a>, <a href="/kids-lace-trim">kids lace trims</a> and <a href="/custom-design">custom design process</a>.</p>
    </section>
    <HairBowFAQ items={faq} />
    <section className="bow-inquiry"><h2>Develop your next US boutique bow collection</h2><p>Send the design names, requested colors, width in inches, length in yards and US delivery ZIP code.</p><HairBowCTA placement="hair_bow_collection_bottom" /></section>
  </main>;
}
