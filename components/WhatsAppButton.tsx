"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ businessUrl }: { businessUrl: string }) {
  return <a href={businessUrl} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Chat with VELORACE LACE on WhatsApp Business" data-cta-placement="floating_whatsapp_button"><MessageCircle size={23} /><span>Chat with us</span></a>;
}
