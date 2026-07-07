"use client";
export default function ProductCard({ id, name, category, image }) {
  return (
    <div className="border p-4">
      <img src={image} className="w-full h-48 object-cover" />
      <h3 className="font-bold">{name}</h3>
      <button onClick={() => window.open(`https://wa.me/8613352991594?text=Inquiry ${id}`)} className="mt-2 border-b border-black">Inquire</button>
    </div>
  );
}
