export type BridalProductImage = { src: string; alt: string; caption: string };
export type BridalProduct = {
  id: string;
  reference: string;
  sku?: string;
  name: string;
  type: string;
  description: string;
  construction: string;
  technique: string;
  dimensions: string;
  weight?: string;
  moq: string;
  unit: string;
  customColor: string;
  supply: string;
  origin?: string;
  application: string;
  images: BridalProductImage[];
};

// Only confirmed product facts belong here. Missing photos must remain empty;
// do not substitute another design's photography or generate product imagery.
export const bridalProducts: BridalProduct[] = [
  {
    id: "zy526",
    reference: "ZY526",
    sku: "ZY526",
    name: "Luxury Beaded Embroidered Bridal Lace",
    type: "Beaded bridal lace fabric",
    description: "A richly embellished wedding dress lace fabric for gowns and occasionwear. All-over embroidery and a scalloped border help define the skirt and train, while beaded and sequin details add texture to the gown.",
    construction: "100% polyester; embroidered mesh base",
    technique: "Embroidery with beaded / sequin embellishment and scalloped border",
    dimensions: "Width: 130 cm",
    moq: "Contact for MOQ",
    unit: "Confirm with quote",
    customColor: "Confirm with quote",
    supply: "Confirm with quote",
    application: "Wedding gowns, bridal skirts and trains, occasion dresses",
    images: [],
  },
  {
    id: "3dtl1647",
    reference: "3DTL1647",
    sku: "3DTL1647",
    name: "3D Floral Embroidered Bridal Lace",
    type: "3D floral bridal lace fabric",
    description: "Raised fabric flowers sit over botanical embroidery and sequins. Consider this dimensional construction for a statement bridal bodice or skirt, with a physical sample to assess volume and drape against the gown design.",
    construction: "Mesh / tulle base with 3D fabric flowers; fiber composition: Confirm with quote",
    technique: "Botanical embroidery, applied fabric flowers and sequins",
    dimensions: "Width: Confirm with quote",
    weight: "Approx. 300 g/m²",
    moq: "5 yards for available colors; confirm current availability with quote",
    unit: "Confirm with quote; order minimum stated in yards",
    customColor: "From 100 yards; confirm shade and feasibility with quote",
    supply: "In-stock + made-to-order; confirm color availability and lead time",
    origin: "Guangdong, China",
    application: "Wedding gowns, bridal bodices, statement skirts, trains and evening gowns",
    images: [],
  },
  {
    id: "ml0717",
    reference: "ML0717 · model ML-0717-1",
    sku: "ML-0717-1",
    name: "Beaded Sequin Bridal Lace",
    type: "Beaded sequin bridal lace fabric",
    description: "A substantial embellished mesh for gowns that call for visible sparkle and texture. Embroidery, sequins and bugle beads give this construction a fuller finish for bodices, sleeves and skirts; assess the finished garment weight during sampling.",
    construction: "Mesh base; fiber composition: Confirm with quote",
    technique: "Embroidery with sequins and bugle beads",
    dimensions: "Width: 58/60 in (approx. 147–152 cm)",
    weight: "Approx. 520 g per linear meter",
    moq: "Contact for MOQ",
    unit: "Confirm with quote",
    customColor: "Confirm with quote",
    supply: "Made-to-order; lead time: Confirm with quote",
    origin: "China",
    application: "Wedding gowns, bridal bodices, sleeves, skirts, trains and evening dresses",
    images: [],
  },
  {
    id: "fine-floral-tulle",
    reference: "Fine floral tulle · quote by product name",
    name: "Fine Floral Embroidered Tulle Bridal Lace",
    type: "Embroidered tulle bridal lace fabric",
    description: "Fine floral motifs are spaced across a transparent tulle ground, building into a denser embroidered hem with a scalloped border. The layout gives designers a clear direction for gown overlays, sleeves and trains.",
    construction: "Transparent fine tulle with white / ivory-appearance embroidery; fiber composition: Confirm with quote",
    technique: "Fine floral embroidery, scattered motifs and dense scalloped embroidered border",
    dimensions: "Width: Confirm with quote",
    moq: "Contact for MOQ",
    unit: "Confirm with quote",
    customColor: "Confirm with quote; approve the actual white / ivory shade on a sample",
    supply: "Confirm with quote",
    application: "Wedding gown overlays, bodices, sleeves, skirts and trains. For a veil, confirm softness, weight and border suitability on a sample.",
    images: [],
  },
  {
    id: "large-leaf-applique",
    reference: "40 × 25 cm leaf applique · quote by product name",
    name: "Large Beaded Floral / Leaf Bridal Lace Applique",
    type: "Large floral lace applique",
    description: "An embroidered botanical motif on transparent mesh for placing decoration around a bridal neckline, shoulder or waist. The photographed arrangements show possible placement; the quoted selling unit must be confirmed separately.",
    construction: "Transparent mesh / tulle base; fiber composition: Confirm with quote",
    technique: "Botanical / leaf embroidery with visible sequins and bead-like embellishment",
    dimensions: "Approx. 40 × 25 cm for one motif (15.75 × 9.84 in)",
    moq: "Contact for MOQ",
    unit: "Confirm with quote; a two-motif display does not establish pair pricing",
    customColor: "Confirm with quote; white / ivory appearance in photographs",
    supply: "Confirm with quote",
    application: "Wedding dress bodice, neckline, shoulder, back and waist",
    images: [
      { src: "/products/bridal-lace/large-beaded-leaf-applique-bodice.webp", alt: "White botanical leaf bridal lace applique with sequin embellishment on a mannequin bodice", caption: "Single motif placed on a bodice" },
      { src: "/products/bridal-lace/large-beaded-leaf-applique-size.webp", alt: "Single embroidered leaf bridal lace applique with measurements of 40 by 25 centimeters", caption: "Approximate dimensions of one motif" },
      { src: "/products/bridal-lace/large-beaded-leaf-applique-flat.webp", alt: "Two white embroidered botanical lace motifs laid flat to show mirrored placement options", caption: "Placement reference; selling unit confirmed with quote" },
    ],
  },
];

export const bridalFaqs = [
  ["Which bridal lace types can I compare here?", "Compare ZY526 beaded embroidered lace, 3DTL1647 3D floral bridal lace, ML0717 beaded sequin lace, fine floral embroidered tulle and a large leaf lace applique. VELORACE LACE coordinates sourcing and quotation for bridal designers, studios and garment buyers."],
  ["What is the MOQ for wholesale bridal lace?", "3DTL1647 has a confirmed minimum of 5 yards for available colors and custom color from 100 yards. Current availability is confirmed with the quote. For ZY526, ML0717, fine floral tulle and the large applique, contact for MOQ; no universal minimum applies to all five designs."],
  ["Is bridal lace priced per yard, meter, piece or pair?", "Confirm the selling and pricing unit with each quote. The 3DTL1647 minimum is stated in yards, but an order minimum does not establish the pricing unit. The large applique measures approximately 40 × 25 cm for one motif; photographs showing two motifs do not mean it is sold as a pair."],
  ["Can I order a custom ivory or white shade?", "3DTL1647 custom color starts from 100 yards, subject to shade and production review. For the other designs, custom color availability and minimums are confirmed with the quote. Photographs are color references; approve the intended shade against your gown fabric using a physical sample."],
  ["Can I request samples before a bulk order?", "Ask for sample availability, dimensions, cost and lead time for the selected design. All sample terms are confirmed with the quote. Review color, base transparency, embroidery, embellishment, width and drape before approving a bulk order; custom work may require a strike-off for approval."],
  ["Which lace is suitable for a bridal veil?", "Fine floral embroidered tulle is a starting point for discussing a veil border or overlay, subject to sample approval for softness, weight and layout. The dimensional 3DTL1647 and substantial beaded ML0717 are presented for gowns and bodices. For custom cathedral veil embroidery, send the veil dimensions, artwork and border placement for feasibility and sampling review."],
  ["How are lead time and international shipping quoted?", "Share the product reference, color, quantity, destination country, postcode and required arrival date. We confirm availability or production lead time, packing and shipping options with the quotation. Freight, transit time and any destination charges must be reviewed for the specific order."],
];
