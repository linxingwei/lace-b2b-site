"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ phone, message }: { phone: string; message: string }) {
  return <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Chat with Velorace Lace on WhatsApp"><MessageCircle size={23} /><span>Chat with us</span></a>;
}
