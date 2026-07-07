"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ phone, message }: { phone: string; message: string }) {
  return (
    <button 
      onClick={() => window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg"
    >
      <MessageCircle size={28} />
    </button>
  );
}
