export type ProductData = {
  slug: string;
  sku: string;
  name: string;
  fullName: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  conceptNote: string;
  buyingInfo: { label: string; value: string }[];
  highlights: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  customization: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
};

export const bridalApplique: ProductData = {
  slug: "luxury-beaded-3d-floral-bridal-lace-applique",
  sku: "VL-BR-001",
  name: "Luxury Beaded 3D Floral Bridal Lace Appliqué",
  fullName: "Luxury Beaded 3D Floral Bridal Lace Appliqué for Wedding Dresses",
  category: "Bridal Lace / 3D Appliqué",
  description: "An elegant pair of ivory bridal lace appliqués featuring dimensional organza flowers, fine embroidery, pearls and delicate sequin details. Designed for wedding gowns, evening dresses and couture garments, this statement embellishment can be customized in color, size, floral arrangement and decorative finish.",
  image: "/images/products/vl-br-001/luxury-beaded-3d-floral-bridal-lace-applique.webp",
  imageAlt: "luxury ivory beaded 3D floral bridal lace applique pair for wedding dresses",
  conceptNote: "Original Custom Design Concept — Sample Development Available",
  buyingInfo: [
    { label: "MOQ", value: "30 Pairs" },
    { label: "Sample Time", value: "3–7 Days" },
    { label: "Production", value: "15–25 Days" },
    { label: "Customization", value: "Colors & Motifs Available" },
  ],
  highlights: ["Layered 3D organza floral details", "Fine ivory embroidery on a soft mesh base", "Hand-finished pearls and delicate sequins", "Mirrored appliqué pair for symmetrical garment placement", "Custom colors, dimensions and motifs available", "Suitable for sampling and flexible wholesale production"],
  specifications: [
    { label: "SKU", value: "VL-BR-001" }, { label: "Product Type", value: "Bridal Lace / 3D Appliqué" },
    { label: "Material", value: "Mesh, polyester embroidery thread, pearls and sequins" }, { label: "Color", value: "Ivory" },
    { label: "Custom Colors", value: "Available" }, { label: "Approximate Size", value: "42 × 20 cm per piece" },
    { label: "Set", value: "Mirrored left-and-right pair" }, { label: "MOQ", value: "30 pairs" },
    { label: "Sample Time", value: "3–7 business days" }, { label: "Production Time", value: "Approximately 15–25 days after sample approval" },
    { label: "Applications", value: "Wedding gowns, evening dresses, bridal veils, couture garments and stage costumes" },
    { label: "Customization", value: "Color, size, motif, mesh base, pearls, sequins and floral arrangement" },
    { label: "Packaging", value: "Individually packed in protective bags" },
    { label: "Availability", value: "Made to order; similar or selected designs may be available after confirmation" },
    { label: "Worldwide Shipping", value: "Supported" },
  ],
  applications: ["Wedding gown bodices", "Bridal waist and hip decoration", "Evening dress panels", "Sleeves and shoulder details", "Bridal veils and trains", "Stage and performance costumes", "Couture fashion accessories"],
  customization: ["Color customization", "Appliqué length and width", "Floral motif and arrangement", "Mesh base color and softness", "Pearl size and placement", "Sequin color and density", "Crystal or rhinestone additions", "Left-and-right matching sets", "Private-label packaging"],
  process: ["Send Your Requirements", "Confirm Design Details", "Sample Development", "Sample Approval", "Production and Inspection", "Worldwide Delivery"],
  faqs: [
    { question: "What is the MOQ for VL-BR-001?", answer: "The MOQ is 30 pairs. Final order details are confirmed after we review your required workmanship and quantity." },
    { question: "Can I order a sample before bulk production?", answer: "Yes. Sample development is available and typically takes 3–7 business days after the design details are confirmed." },
    { question: "Can the color and size be customized?", answer: "Yes. Color, dimensions, motif, mesh base, pearls, sequins and floral arrangement can be adjusted for your project." },
    { question: "Can you develop a similar appliqué from my reference image?", answer: "Yes. Send a clear reference image with target dimensions, color, application and quantity so we can evaluate the construction and sampling approach." },
    { question: "How long does bulk production take?", answer: "Bulk production is approximately 15–25 days after sample approval, subject to the confirmed workmanship and quantity." },
    { question: "Is this design available in stock?", answer: "This concept is made to order. Similar or selected designs may be available after confirmation, but stock is not guaranteed." },
    { question: "Do you ship worldwide?", answer: "Yes. We support worldwide shipping and coordinate suitable delivery options for the destination and order volume." },
  ],
};

export const products = [bridalApplique];
