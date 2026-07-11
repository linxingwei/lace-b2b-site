import { ArrowUpRight } from "lucide-react";

type ProductCardProps = { id: string; name: string; category: string; image: string; alt?: string; description?: string; moq: string; tag?: string };

export default function ProductCard({ id, name, category, image, alt, description, moq, tag }: ProductCardProps) {
  const message = encodeURIComponent(`Hi, I would like a quote for ${name} (${id}). Please send pricing and available colors.`);
  return (
    <article className="product-card">
      <a className="product-image" href={`https://wa.me/8615767956637?text=${message}`} target="_blank" rel="noreferrer" aria-label={`Inquire about ${name}`}>
        <img src={image} alt={alt || name} width="900" height="980" loading="lazy" decoding="async" />
        {tag && <span className="product-tag">{tag}</span>}
        <span className="product-action"><ArrowUpRight size={19} /></span>
      </a>
      <div className="product-meta"><span>{category}</span><span>SKU {id}</span></div>
      <h3>{name}</h3>
      {description && <p className="product-description">{description}</p>}
      <p>MOQ: {moq}</p>
    </article>
  );
}
