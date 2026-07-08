import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Premium Lace | High-end B2B Supplier",
  description: "Wholesale high-end lace for global fashion brands. Factory direct, low MOQ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="fixed top-0 w-full z-50 bg-white border-b h-16 flex items-center px-8 justify-between font-bold">
          <div className="text-xl tracking-tighter">LACE PREMIER</div>
        </nav>
        {children}
        <WhatsAppButton phone="8615767956637" message="Hi, I am interested in your lace!" />
      </body>
    </html>
  );
}
