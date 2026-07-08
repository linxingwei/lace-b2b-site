"use client";
export default function ProductCard({ id, name, category, image }: { id: string; name: string; category: string; image: string }) {
  return (
    <div className="border p-4 bg-white group">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
        <img src={image} alt={name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-xs text-gray-500 uppercase tracking-widest">SKU: {id}</p>
      <button 
        onClick={() => window.open(`https://wa.me/8615767956637?text=Inquiry for SKU: ${id}`, "_blank")}
        className="mt-4 border-b-2 border-black font-bold text-xs tracking-widest uppercase hover:text-[#25D366] hover:border-[#25D366] transition-colors"
      >
        Inquire via WhatsApp
      </button>
    </div>
  );
}
