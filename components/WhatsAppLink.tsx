import type { ComponentProps, ReactNode } from "react";

type WhatsAppLinkProps = Omit<ComponentProps<"a">, "href" | "onClick"> & {
  children: ReactNode;
  message: string;
  placement: string;
  productCategory: string;
};

const whatsappNumber = "8615767956637";

export default function WhatsAppLink({ children, message, placement, productCategory, ...props }: WhatsAppLinkProps) {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return <a {...props} href={href} target="_blank" rel="noreferrer" data-product-category={productCategory} data-cta-placement={placement}>{children}</a>;
}
