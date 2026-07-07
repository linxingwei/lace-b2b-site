"use client";
import { MessageCircle } from "lucide-react";
export default function WhatsAppButton({ phone, message }) {
  return (
    <button onClick={() => window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`)} className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full">
      <MessageCircle size={28} />
    </button>
  );
}
