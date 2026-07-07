"use client";
export default function ProductCard({ id, name, category, image }: { id: string; name: string; category: string; image: string }) {
  return (
    <div className="border p-4">
      <img src={image} alt={name} className="w-full h-64 object-cover mb-4" />
      <div className="text-xs uppercase text-gray-400">{category}</div>
      <h3 className="font-bold text-lg">{name}</h3>
      <button 
        onClick={() => window.open(`https://wa.me/8613352991594?text=Inquiry SKU: ${id}`, "_blank")}
        className="mt-4 border-b border-black font-bold text-sm"
      >
        INQUIRE PRICE
      </button>
    </div>
  );
}
