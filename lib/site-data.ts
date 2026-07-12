import { mediaUrl } from "@/lib/media";

export type CategoryData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  alt: string;
  applications: string[];
  highlights: string[];
  gallery?: { image: string; alt: string }[];
  catalogUrl?: string;
};

export const categories: CategoryData[] = [
  {
    slug: "lace-trim",
    name: "Lace Trim",
    title: "Wholesale Lace Trim Manufacturer in China | Velora Lace",
    description: "Professional lace trim supplier offering embroidery lace, cotton lace, eyelash lace and fashion trims for global buyers.",
    intro: "Source dependable lace trims for fashion, bridal, lingerie, childrenswear and accessories. We support stock selection, color matching and custom motif development for wholesale buyers.",
    image: mediaUrl("yellow-floral.jpg"),
    alt: "white and yellow embroidery lace trim supplier",
    applications: ["Dresses and fashion apparel", "Lingerie and sleepwear", "Children's clothing", "Accessories and craft collections"],
    highlights: ["Stock and custom designs", "Color and width customization", "Flexible wholesale MOQ", "Export packing available"],
  },
  {
    slug: "embroidery-lace",
    name: "Embroidery Lace",
    title: "Embroidery Lace Supplier & Manufacturer China",
    description: "Custom embroidery lace manufacturer for garment factories, fashion brands and textile wholesalers worldwide.",
    intro: "Develop precise embroidered motifs on mesh, organza and specialty bases. Our team helps translate references and sketches into production-ready lace for repeat wholesale supply.",
    image: mediaUrl("embroidered-lace/embroidered-lace-butterfly.webp"),
    alt: "pastel butterfly embroidered mesh lace trim",
    applications: ["Designer dresses", "Blouses and occasionwear", "Bridal accessories", "Decorative garment panels"],
    highlights: ["Custom motif development", "Pantone color matching", "Bead and sequin options", "Sample approval before bulk"],
    gallery: [
      { image: mediaUrl("embroidered-lace/embroidered-lace-butterfly.webp"), alt: "white mesh lace trim with pastel embroidered butterfly motifs" },
      { image: mediaUrl("embroidered-lace/embroidered-lace-gold-floral.webp"), alt: "gold floral embroidery lace trim on mesh" },
      { image: mediaUrl("embroidered-lace/embroidered-lace-aqua-floral.webp"), alt: "aqua floral embroidered mesh lace trim" },
      { image: mediaUrl("embroidered-lace/embroidered-lace-forest-floral.webp"), alt: "dark green floral embroidery lace trim" },
      { image: mediaUrl("embroidered-lace/embroidered-lace-blush-floral.webp"), alt: "blush pink floral embroidered lace trim" },
      { image: mediaUrl("embroidered-lace/embroidered-lace-scallop.webp"), alt: "pink scalloped floral embroidery lace with measured width" },
    ],
    catalogUrl: "https://ruiyuelai.x.yupoo.com/albums/244212977?uid=1",
  },
  {
    slug: "eyelash-lace",
    name: "Eyelash Lace Trim",
    title: "Eyelash Lace Trim Wholesale Supplier",
    description: "Wholesale eyelash lace trim for lingerie, dresses, bridal fashion and designer apparel with custom colors and widths.",
    intro: "Fine scalloped edges and soft eyelash fringes give garments a delicate finish. Choose classic floral looks or develop exclusive patterns for your collection.",
    image: mediaUrl("yellow-floral.jpg"),
    alt: "decorative floral lace trim sample for wholesale development",
    applications: ["Lingerie finishing", "Bridal veils and gowns", "Evening dresses", "Fashion accessories"],
    highlights: ["Soft hand feel", "Multiple widths", "Custom dyeing", "Roll or cut-piece packing"],
  },
  {
    slug: "bridal-lace",
    name: "Bridal Lace",
    title: "Bridal Lace Fabric Supplier for Wedding Dress Designers",
    description: "Bridal lace fabric and applique supplier for wedding dress designers, couture studios and bridal manufacturers.",
    intro: "Create distinctive wedding gowns with refined embroidery, dimensional flowers, sequins, pearls and hand-beaded details. We support both studio sampling and scalable production.",
    image: mediaUrl("luxury-beaded.jpg"),
    alt: "luxury bridal lace applique manufacturer",
    applications: ["Wedding gowns", "Bridal veils", "Couture bodices", "Bridal belts and accessories"],
    highlights: ["Couture handwork", "Matching applique sets", "Custom ivory tones", "Design confidentiality"],
  },
  {
    slug: "3d-flower-applique",
    name: "3D Flower Applique",
    title: "3D Flower Lace Applique Manufacturer",
    description: "3D flower lace applique manufacturer for bridal gowns, couture fashion, eveningwear and garment decoration.",
    intro: "Dimensional petals, layered embroidery and hand-applied embellishment turn a simple garment into a statement piece. Custom sizes, colors and backing options are available.",
    image: mediaUrl("pastel-assortment.jpg"),
    alt: "3D flower lace applique manufacturer",
    applications: ["Couture gowns", "Bridal bodices", "Statement sleeves", "Bags and fashion accessories"],
    highlights: ["Layered 3D construction", "Pearl and crystal options", "Sew-on or iron-on backing", "Matched pairs available"],
  },
  {
    slug: "kids-lace-trim",
    name: "Kids Lace Trim",
    title: "Cute Kids Lace Trim Supplier China",
    description: "Cute embroidered lace trims for babywear, children's clothing, accessories and DIY craft collections.",
    intro: "Playful motifs, soft colors and lightweight constructions designed for childrenswear and baby product collections. Ask about animal, bow, floral and seasonal designs.",
    image: mediaUrl("pastel-assortment.jpg"),
    alt: "pastel floral applique sample for kids fashion development",
    applications: ["Baby clothing", "Children's dresses", "Hair accessories", "DIY craft products"],
    highlights: ["Cute motif library", "Soft color palettes", "Low MOQ options", "Custom seasonal designs"],
  },
];

export const categoryBySlug = Object.fromEntries(categories.map((category) => [category.slug, category]));

export const trendingProducts = [
  { id: "VL-2601", name: "Yellow Floral Guipure Lace Applique Pair", category: "Floral Lace Applique", description: "A bright floral applique pair for dresses, accessories, childrenswear and decorative fashion applications.", image: mediaUrl("yellow-floral.jpg"), alt: "yellow floral guipure lace applique pair", moq: "30 pairs", tag: "Trending" },
  { id: "VL-2602", name: "Pastel Embroidered 3D Flower Applique", category: "3D Flower Applique", description: "Layered pastel flower appliques with embroidered leaves for dresses, accessories and occasionwear.", image: mediaUrl("pastel-collection.jpg"), alt: "pastel embroidered 3D flower applique collection", moq: "30 pairs", tag: "New" },
  { id: "VL-2603", name: "Floral 3D Lace Applique Collection", category: "3D Flower Applique", description: "Luxury dimensional floral appliques for bridal gowns, eveningwear and fashion designers.", image: mediaUrl("pastel-assortment.jpg"), alt: "floral 3D lace applique collection", moq: "30 pairs", tag: "Bridal" },
];

export type ArticleData = {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  image: string;
  alt: string;
  date: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles: ArticleData[] = [
  {
    slug: "lace-trim-trends-2026",
    title: "Top 10 Lace Trim Trends for Fashion Designers in 2026",
    keyword: "lace trim trends",
    description: "Explore the leading lace trim trends for 2026, from dimensional florals and playful motifs to refined bridal embroidery.",
    image: mediaUrl("pastel-assortment.jpg"), alt: "lace trim trends for fashion designers in 2026", date: "2026-07-10",
    sections: [
      { heading: "What buyers are requesting in 2026", paragraphs: ["Fashion teams are moving toward trims that feel tactile, collectible and easy to identify at a glance. Dimensional flowers, miniature bows, nature motifs and refined metallic details are appearing across bridal, childrenswear and occasion collections."] },
      { heading: "The ten directions to watch", paragraphs: ["Key directions include layered 3D petals, fine tonal embroidery, soft vintage eyelash edges, playful animal motifs, pastel bow trims, pearl accents, metallic vines, laser-clean guipure, modular applique sets and custom brand-specific motifs.", "Select a trim that supports the garment silhouette, target price and care requirements rather than simply choosing the newest look."] },
      { heading: "Developing a commercial collection", paragraphs: ["Start with a small color and motif family, confirm the base fabric and approve a physical sample before scaling. A reliable supplier should record the approved materials, dimensions and workmanship for repeat consistency."] },
    ],
  },
  {
    slug: "how-to-choose-bridal-lace", title: "How to Choose Bridal Lace for Wedding Dresses", keyword: "bridal lace supplier",
    description: "A practical guide to choosing bridal lace for wedding gowns, including base fabric, motif scale, color and embellishment.",
    image: mediaUrl("luxury-beaded.jpg"), alt: "bridal lace supplier guide for wedding dresses", date: "2026-07-10",
    sections: [
      { heading: "Begin with the gown silhouette", paragraphs: ["A fitted bodice, fluid skirt and structured ball gown require different lace weights and motif scales. Evaluate drape, transparency and seam placement before choosing the decorative style."] },
      { heading: "Match color and hand feel", paragraphs: ["Ivory is not a single color. Send the final dress fabric or an approved swatch for matching. The lace base should also feel appropriate against skin when used on necklines, sleeves or illusion panels."] },
      { heading: "Confirm embellishment and repeat", paragraphs: ["Check pearl, sequin and crystal attachment, motif repeat and usable width. Approve a production sample under the same lighting used for the gown fabric before bulk ordering."] },
    ],
  },
  {
    slug: "china-lace-manufacturer-guide", title: "China Lace Manufacturer Guide for Global Buyers", keyword: "China lace manufacturer",
    description: "How global fashion buyers can evaluate a China lace manufacturer for samples, quality, MOQ, lead time and shipping.",
    image: mediaUrl("grey-rhinestone.jpg"), alt: "China lace manufacturer guide for global buyers", date: "2026-07-10",
    sections: [
      { heading: "What to prepare before sourcing", paragraphs: ["Prepare reference images, dimensions, target colors, application, estimated quantity and destination. Clear information allows a supplier to recommend the right construction and quote accurately."] },
      { heading: "How to evaluate the supplier", paragraphs: ["Look for clear sample procedures, material knowledge, realistic lead times and documented quality checks. Ask how the approved sample is translated into bulk production and how variation is controlled."] },
      { heading: "MOQ, pricing and logistics", paragraphs: ["MOQ depends on whether a design is stocked or custom, and on the amount of handwork. Compare total landed value including sampling, packing, freight and the risk of inconsistent quality."] },
    ],
  },
  {
    slug: "embroidery-lace-vs-guipure-lace", title: "Difference Between Embroidery Lace and Guipure Lace", keyword: "embroidery lace supplier",
    description: "Understand the structural and visual differences between embroidery lace and guipure lace before sourcing for a collection.",
    image: mediaUrl("beaded-neckline.jpg"), alt: "embroidery lace supplier comparing guipure lace", date: "2026-07-10",
    sections: [
      { heading: "Embroidery lace", paragraphs: ["Embroidery lace is created by stitching motifs onto a base such as mesh, tulle or organza. The base affects transparency, softness and stability, while thread and embellishment create the visible design."] },
      { heading: "Guipure lace", paragraphs: ["Guipure connects motifs with bars or bridges rather than a visible net ground. It usually feels more structured and graphic, making it useful for borders, panels and statement garment sections."] },
      { heading: "Which one should you choose?", paragraphs: ["Choose embroidery lace for lightness, tonal effects and detailed placement. Choose guipure when you need stronger edges, bold motifs or a self-supporting decorative panel. Sampling both against the final fabric is safest."] },
    ],
  },
];

export const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));
