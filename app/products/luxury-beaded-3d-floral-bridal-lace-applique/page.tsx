import { absoluteUrl, createPageMetadata, siteUrl } from "@/lib/seo";
import { bridalApplique as product } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";

const path = `/products/${product.slug}`;
const seoTitle = "Beaded 3D Floral Bridal Lace Appliqué | VELORACE LACE";
const seoDescription = "Luxury ivory beaded 3D floral bridal lace appliqué for wedding gowns and eveningwear. Custom colors, sizes and motifs. MOQ 30 pairs.";
export const metadata = createPageMetadata(seoTitle, seoDescription, path, product.image);

export default function BridalAppliquePage() {
  const url = absoluteUrl(path);
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Product", "@id": `${url}#product`, name: product.fullName, description: product.description, sku: product.sku, url, image: [absoluteUrl(product.image)], category: product.category, material: "Mesh, polyester embroidery thread, pearls and sequins", color: "Ivory", brand: { "@type": "Brand", name: "VELORACE LACE" }, additionalProperty: product.specifications.filter(({ label }) => ["MOQ", "Sample Time", "Production Time", "Customization", "Availability"].includes(label)).map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` }, { "@type": "ListItem", position: 3, name: "Bridal Lace", item: `${siteUrl}/bridal-lace` }, { "@type": "ListItem", position: 4, name: product.name, item: url }] },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><ProductDetail product={product} /></>;
}
