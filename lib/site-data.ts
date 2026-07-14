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
  faqs?: { question: string; answer: string }[];
  related?: { href: string; label: string }[];
  readTime?: string;
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
  {
    slug: "lace-applique-placement-wedding-dress",
    title: "How to Plan Lace Applique Placement on Wedding Dresses",
    keyword: "lace applique placement",
    description: "Plan lace applique placement for wedding dresses with practical guidance on motif scale, symmetry, seams, tulle bases and production handoff.",
    image: mediaUrl("luxury-beaded.jpg"),
    alt: "lace applique placement planning for a wedding dress bodice",
    date: "2026-07-14",
    readTime: "8 minute read",
    related: [
      { href: "/bridal-lace", label: "Explore bridal lace" },
      { href: "/3d-flower-applique", label: "Explore 3D flower appliques" },
      { href: "/custom-design", label: "Plan a custom applique" },
    ],
    sections: [
      {
        heading: "Start with the garment map, not the loose motif",
        paragraphs: [
          "Lace applique placement should begin on the full garment pattern or toile. Mark center front, center back, waist, neckline, armhole, princess seams, darts and planned closures before arranging any motifs. These lines control how the embroidery will read when the dress is worn rather than when it is lying flat on a table.",
          "Photograph the approved layout from directly above and add reference measurements from fixed construction points. A beautiful arrangement that exists only in a designer's memory is difficult to reproduce across samples, sizes and repeat orders.",
        ],
      },
      {
        heading: "Choose motif scale for the silhouette",
        paragraphs: [
          "Large floral appliques create strong focal areas on a clean bodice or skirt, while smaller motifs are easier to graduate around necklines, straps and fitted seams. A mixed set can include hero flowers, secondary leaves and small connector motifs so the composition feels intentional instead of scattered.",
          "View the placement from normal fitting distance. Fine details may disappear in photographs, while oversized motifs can overwhelm a narrow bodice. The right scale supports the gown silhouette and the brand's visual language.",
        ],
      },
      {
        heading: "Plan symmetry without making the dress look mechanical",
        paragraphs: [
          "Mirrored applique pairs are useful around necklines, waist points and center-back closures. Exact symmetry gives a formal, architectural result; controlled asymmetry can feel softer and more organic. Decide which effect the collection needs before requesting matched pairs from the supplier.",
          "When using asymmetry, keep visual balance through motif weight and direction. A large flower on one side may need a longer vine or a cluster of smaller motifs on the other rather than an identical copy.",
        ],
      },
      {
        heading: "Resolve seams, darts and edges before sewing",
        paragraphs: [
          "Avoid placing the densest embroidered area directly over a bulky seam allowance unless the construction has been tested. Motifs can bridge princess seams and darts, but the dress should first be fitted. The applique is then positioned across the finished seam so it does not distort during alteration.",
          "At a neckline or hem, decide whether the motif will finish the edge, sit inside a clean tulle margin or be partially trimmed to create an organic outline. This decision changes the usable size of the applique and should be shown in the placement map.",
        ],
      },
      {
        heading: "Test the applique on the final tulle and lining",
        paragraphs: [
          "The same applique can look very different on nude illusion tulle, ivory net, satin or multiple layers of soft mesh. Test transparency, thread color, bead weight and edge visibility on the actual base materials. Review the sample in daylight and the lighting expected for fittings and photography.",
          "For close-to-skin areas, assess the reverse side as carefully as the front. Thread ends, stiff backing and bead attachment points may require lining, edge refinement or a different construction.",
        ],
      },
      {
        heading: "Translate the approved layout into production instructions",
        paragraphs: [
          "A production-ready placement file should show the garment view, motif codes, orientation, quantity per dress, fixed measurement points and any mirrored pairs. State whether appliques are supplied loose, pre-joined as a neckline or panel, or attached to the garment by the sewing factory.",
          "Keep one approved physical set with the signed-off sample. When the style is graded, review whether the same motif arrangement works across all sizes or whether spacing and connector motifs need adjustment. This protects the design through bulk production and future reorders.",
        ],
      },
    ],
    faqs: [
      { question: "Should bridal lace appliques always be symmetrical?", answer: "No. Mirrored pairs create a formal result, while controlled asymmetry can feel more natural. The important step is documenting the approved balance and orientation for production." },
      { question: "Can lace appliques be sewn directly onto tulle?", answer: "Yes, when the tulle, applique weight and stitch method are compatible. Test on the final tulle because heavy embroidery or beads may need reinforcement or lining." },
      { question: "When should appliques be attached to a fitted gown?", answer: "Complete the main fitting and resolve seam adjustments first. Final appliques can then bridge seams or darts without being displaced by later alterations." },
    ],
  },
  {
    slug: "bridal-lace-color-guide",
    title: "Bridal Lace Color Guide: White, Ivory, Champagne & Black",
    keyword: "bridal lace colors",
    description: "Compare white, ivory, champagne, blush and black bridal lace, and learn how fashion teams approve color across lace, tulle and gown fabrics.",
    image: mediaUrl("embroidered-lace/embroidered-lace-blush-floral.webp"),
    alt: "blush floral embroidery illustrating bridal lace color matching",
    date: "2026-07-14",
    readTime: "8 minute read",
    related: [
      { href: "/bridal-lace", label: "Source bridal lace" },
      { href: "/embroidery-lace", label: "Explore embroidery lace" },
      { href: "/custom-design", label: "Request custom color development" },
    ],
    sections: [
      {
        heading: "Bridal color names are not universal standards",
        paragraphs: [
          "White, soft white, ivory and champagne can mean different shades to different mills, designers and markets. A name is useful for initial selection, but it is not precise enough for production approval. Always match lace against an approved physical swatch of the gown fabric.",
          "The base and embroidery thread also affect the final appearance. Ivory thread on a white tulle ground reads differently from the same thread on nude mesh, especially where layers overlap on the bodice.",
        ],
      },
      {
        heading: "White, soft white and ivory",
        paragraphs: [
          "Bright white gives a crisp, modern contrast and can suit clean silhouettes or cool-toned palettes. Soft white reduces the blue cast that some bright whites show, while ivory introduces warmth without necessarily appearing yellow.",
          "For a tonal gown, compare lace, lining, tulle and embellishment together. Pearls, sequins and backing yarns may each reflect light differently even when their color names match.",
        ],
      },
      {
        heading: "Champagne, blush and nude illusion tones",
        paragraphs: [
          "Champagne and blush create depth under ivory embroidery and are often used for vintage, romantic or illusion effects. Their appearance changes noticeably with skin tone, lining color and venue lighting, so a small isolated swatch is not enough for final approval.",
          "Build a layered mock-up using the intended number of tulle and lining layers. Evaluate it in daylight, warm indoor light and photography conditions before confirming bulk color.",
        ],
      },
      {
        heading: "Black and alternative bridal lace",
        paragraphs: [
          "Black floral lace, deep green, brown and other non-traditional colors are increasingly relevant to alternative bridal collections. A colored gown can still read as bridal through motif scale, silhouette, train treatment and coordinated veil or accessory design.",
          "Dark lace makes construction details more visible. Check thread sheen, mesh transparency, cut edges and any color difference between beads, sequins and embroidery before approving the design.",
        ],
      },
      {
        heading: "Match fiber and construction before custom dyeing",
        paragraphs: [
          "Color development starts with fiber content. Polyester embroidery, nylon tulle, cotton lace and mixed embellishments do not respond to color processes in the same way. Confirm the complete construction before requesting a custom shade rather than approving color on one component only.",
          "If several lace qualities must coordinate in one dress, develop them as a group and identify an acceptable shade range. A technically identical formula may still appear different because surface texture and thread luster change how light is reflected.",
        ],
      },
      {
        heading: "Use a disciplined color approval workflow",
        paragraphs: [
          "Send a clean, labeled fabric swatch and specify which face is the approved side. Request a lace sample on the intended base, review it beside the lining and keep one signed reference for the supplier and one for the design team.",
          "For bulk orders, confirm that production is compared with the approved reference and that different dye lots are identified. Reorders should refer to the original approval, but a fresh comparison is still necessary because materials and lots can vary over time.",
        ],
      },
    ],
    faqs: [
      { question: "Is ivory the same color from every lace supplier?", answer: "No. Ivory is a commercial color name, not one universal shade. Approve it against the actual gown fabric and keep a physical reference for production." },
      { question: "Why does champagne lace look darker after layering?", answer: "Multiple layers of tulle, lining and embroidery increase visual density. Test the complete layer stack rather than judging one loose swatch." },
      { question: "Can bridal lace be custom dyed black or another color?", answer: "Often yes, but the result depends on the fiber content, base fabric and embellishments. Confirm the construction first and approve a physical sample before bulk production." },
    ],
  },
  {
    slug: "lace-trim-tech-pack-guide",
    title: "Lace Trim Tech Pack: What Manufacturers Need",
    keyword: "lace trim tech pack",
    description: "Build a clear lace trim tech pack with motif, base, width, repeat, color, application and approval details for faster custom sample development.",
    image: "/images/home/production-workflow-reference.webp",
    alt: "lace trim development workflow for a manufacturer tech pack",
    date: "2026-07-14",
    readTime: "9 minute read",
    related: [
      { href: "/custom-design", label: "Start custom lace development" },
      { href: "/embroidery-lace", label: "Explore embroidery options" },
      { href: "/#contact", label: "Send a sourcing brief" },
    ],
    sections: [
      {
        heading: "A lace tech pack turns visual intent into repeatable instructions",
        paragraphs: [
          "A mood board explains the feeling of a collection; a tech pack explains what must be sampled and produced. For lace trims, the critical information is not limited to a sketch. The supplier also needs the base material, embroidery construction, dimensions, repeat, colors, application and expected order context.",
          "Clear information reduces avoidable sampling rounds. It also gives the buyer and supplier one version-controlled reference when decisions change during development.",
        ],
      },
      {
        heading: "Page 1: design reference and intended application",
        paragraphs: [
          "Include a clean artwork file or flat reference plus close-up images that show the motif direction. State whether the trim is for a neckline, hem, strap, veil, lingerie edge, childrenswear detail or removable applique. Application determines softness, weight, edge finish and backing recommendations.",
          "Mark the design elements that are essential and those that can be interpreted. If a reference image belongs to another brand, use it to communicate construction only and provide original artwork for the new motif.",
        ],
      },
      {
        heading: "Page 2: construction and materials",
        paragraphs: [
          "Specify the preferred lace family, such as embroidered mesh, guipure, eyelash lace or a separate applique. Record the base fabric, thread character, edge shape and any dimensional flowers, cords, sequins, pearls or beads.",
          "When the exact material is undecided, describe the required performance instead: soft against skin, stable for a hem, transparent on illusion tulle, lightweight for a veil or structured for a statement panel. The supplier can then propose suitable constructions for approval.",
        ],
      },
      {
        heading: "Page 3: width, repeat and motif measurements",
        paragraphs: [
          "Show finished trim width, motif height, repeat length and the measurement points used. For paired appliques, label left and right orientation. For allover lace, identify the usable width, border placement and whether the design must match across seams.",
          "Do not rely on a scaled image alone. Add written dimensions and indicate which measurements are critical to fit or placement so the sampling team knows where tolerance matters most.",
        ],
      },
      {
        heading: "Page 4: color and visual standards",
        paragraphs: [
          "List each colorway and separate the base, embroidery and embellishment colors when they differ. Provide physical swatches or an agreed color reference and explain whether the target is tonal, contrast or ombre.",
          "State the lighting or matching context when color is sensitive. Bridal ivory, nude illusion mesh and metallic threads should be evaluated with the garment fabrics rather than approved as isolated digital colors.",
        ],
      },
      {
        heading: "Page 5: commercial and packing information",
        paragraphs: [
          "Share estimated sampling quantity, expected bulk quantity, target delivery window and destination. Note whether the trim will be purchased by yard, meter, pair, piece or matched set, and describe roll length, labeling or protective packing needs.",
          "A target price can help the supplier propose a realistic construction, but it should be considered together with handwork, material choice and quality expectations. Do not remove essential performance details simply to reach a number before sampling.",
        ],
      },
      {
        heading: "Control revisions from first sample to bulk approval",
        paragraphs: [
          "Give every update a version number and date. Consolidate comments into one marked document, identify approved elements and keep rejected versions out of production communication. Physical samples should carry the same version or sample code as the digital file.",
          "The final approval pack should include the signed sample, confirmed construction, color reference, measurements, packing method and any agreed tolerances. This becomes the basis for bulk inspection and repeat orders.",
        ],
      },
    ],
    faqs: [
      { question: "Can a supplier develop lace from only a reference photo?", answer: "A reference photo can start the conversation, but original artwork, dimensions, application and material expectations are needed for a controlled custom result." },
      { question: "What measurements belong in a lace trim tech pack?", answer: "Include finished width, motif height, repeat length and any placement-critical dimensions. Label the exact points used for every measurement." },
      { question: "Should the tech pack include order quantity?", answer: "Yes. Sampling and bulk quantity affect feasible construction, handwork, packing and commercial recommendations, so estimated quantities should be shared early." },
    ],
  },
  {
    slug: "lace-quality-control-checklist",
    title: "Lace Quality Control Checklist for Bulk Orders",
    keyword: "lace quality control",
    description: "Use this lace quality control checklist to review color, dimensions, embroidery, edges, embellishment, packing and bulk consistency.",
    image: mediaUrl("embroidered-lace/embroidered-lace-gold-floral.webp"),
    alt: "gold floral embroidery lace inspected for bulk quality control",
    date: "2026-07-14",
    readTime: "9 minute read",
    related: [
      { href: "/lace-trim", label: "Source wholesale lace trim" },
      { href: "/embroidery-lace", label: "Explore embroidery lace" },
      { href: "/blog/china-lace-manufacturer-guide", label: "Read the supplier evaluation guide" },
    ],
    sections: [
      {
        heading: "Define quality with an approved physical sample",
        paragraphs: [
          "Quality control needs a reference. Keep an approved lace sample with its construction, color, dimensions and sample code clearly identified. Product photos and written descriptions support the process, but they cannot replace the physical standard for hand feel, shade and workmanship.",
          "Before bulk production, agree which characteristics are critical to the garment: softness at a neckline, stable width at a hem, mirrored applique pairs, clean scallops or secure bead attachment. Inspection should focus on the risks that matter to the final use.",
        ],
      },
      {
        heading: "Check motif, embroidery and base fabric",
        paragraphs: [
          "Compare motif shape, stitch density and thread direction with the approved sample. Look for skipped areas, loose threads, distorted mesh, holes, puckering and visible joins. On repeating trims, check that the transition from one repeat to the next is consistent.",
          "Inspect the back as well as the face. A clean front can still hide rough thread ends, backing residue or construction that may irritate skin or interfere with sewing.",
        ],
      },
      {
        heading: "Measure width, repeat and applique orientation",
        paragraphs: [
          "Measure finished width and repeat using the points defined in the tech pack. For appliques, check overall dimensions, motif direction and left-right matching. For scalloped trims, confirm that the decorative edge and any sewing margin remain usable along the roll.",
          "Review measurements at several positions rather than only at the roll end. Variation can appear after tension changes, joins or finishing processes.",
        ],
      },
      {
        heading: "Review color as a complete material system",
        paragraphs: [
          "Compare bulk lace with the approved swatch under consistent lighting and beside the actual garment fabric. Check the base, embroidery thread and embellishments separately because one component may shift even when the overall shade initially looks acceptable.",
          "Identify production lots and avoid mixing visibly different shades in the same garment set. For matched appliques or neckline pairs, compare the pieces directly before packing.",
        ],
      },
      {
        heading: "Test edges, embellishment and sewing performance",
        paragraphs: [
          "Gently handle scallops, cutwork bridges and motif edges to identify weak points or unexpected fraying. Check whether beads, pearls, sequins and dimensional petals remain secure during normal handling and whether their reverse-side attachment is suitable for the garment.",
          "Run a sewing trial on the intended fabric before approving the bulk lot. This reveals curling, stretching, needle damage, excessive stiffness and seam behavior that may not be visible during table inspection.",
        ],
      },
      {
        heading: "Confirm packing, labels and reorder traceability",
        paragraphs: [
          "Inspect roll or piece quantity, protective wrapping, labels and orientation. Delicate beaded lace may require separation so surface decoration does not catch on neighboring pieces during transport.",
          "Record the supplier, style code, color, lot, inspection date and approved sample version. Traceability makes it easier to isolate a variation and gives the next reorder a clearer starting point.",
        ],
      },
      {
        heading: "Turn the checklist into a shared production record",
        paragraphs: [
          "Use photos and measurement results to document inspection, but keep comments specific: identify the location, quantity and effect of each issue. Separate cosmetic variation from defects that affect sewing, appearance or garment performance.",
          "Share the same checklist with the lace supplier and garment factory. When both teams understand the approved standard and final application, problems are more likely to be identified before cutting and assembly.",
        ],
      },
    ],
    faqs: [
      { question: "What is the most important reference for lace inspection?", answer: "The approved physical sample is the primary reference for shade, hand feel and workmanship. It should match the version and specifications in the final tech pack." },
      { question: "Should lace be tested on the final garment fabric?", answer: "Yes. A sewing and layering test can reveal distortion, stiffness, transparency and color effects that are not visible when the lace is inspected alone." },
      { question: "How should different lace dye lots be handled?", answer: "Identify lots, compare them with the approved reference and avoid mixing visibly different shades within matched garment components or sets." },
    ],
  },
];

export const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));
