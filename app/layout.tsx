import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Premium Lace | Wholesale Factory Direct",
  description: "High-end lace supplier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="fixed top-0 w-full z-50 bg-white border-b h-16 flex items-center px-4 justify-between font-bold">
          <div>LACE PREMIER</div>
        </nav>
        {children}
        <WhatsAppButton phone="8613352991594" message="Hi, I am interested in your lace!" />
      </body>
    </html>
  );
}
