"use client";

import type { ComponentProps, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type WhatsAppLinkProps = Omit<ComponentProps<"a">, "href" | "onClick"> & {
  children: ReactNode;
  message: string;
  placement: string;
};

const whatsappNumber = "8615767956637";

export default function WhatsAppLink({ children, message, placement, ...props }: WhatsAppLinkProps) {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  function trackWhatsAppClick() {
    trackEvent("generate_lead", {
      inquiry_method: "whatsapp",
      product_category: "3D Flower Lace Applique",
      cta_placement: placement,
    });
  }

  return <a {...props} href={href} target="_blank" rel="noreferrer" onClick={trackWhatsAppClick}>{children}</a>;
}
