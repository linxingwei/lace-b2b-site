import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
const PRODUCTS = [
  { id: "001", name: "Water-Soluble Lace", category: "Guipure", image: "https://sc01.alicdn.com/kf/Ha4d5c6df90d14178a4fabe6eacbbf8bbz.png" },
  { id: "002", name: "Floral Lace", category: "Embroidery", image: "https://sc01.alicdn.com/kf/Hd3a24c03dc7f4c6ba027b6c961241a54Z.png" }
];
export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <div className="grid grid-cols-2 gap-8 p-8">
        {PRODUCTS.map(p => <ProductCard key={p.id} {...p} />)}
      </div>
    </main>
  );
}
