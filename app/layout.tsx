import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://veloracelace.com"),
  title: "Velorace Lace | Custom Lace & Garment Accessories Manufacturer",
  description: "Factory-direct lace trims, embroidered appliqués, 3D flowers and custom garment embellishments for fashion brands and importers worldwide.",
  keywords: ["lace manufacturer", "garment accessories supplier", "lace trim wholesale", "embroidery applique factory", "custom lace China"],
  openGraph: { title: "Velorace Lace | Made for remarkable fashion", description: "OEM / ODM lace trims, appliqués and garment embellishments from Guangzhou, China.", type: "website", locale: "en_US", url: "https://veloracelace.com" },
  twitter: { card: "summary", title: "Velorace Lace | Made for remarkable fashion", description: "Custom lace, appliqués and garment embellishments for fashion brands." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#251d18" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="footer-brand"><a className="logo logo-light" href="#home"><strong>VELORACE</strong><span>LACE</span></a><p>Professional manufacturer of lace trims, embroidery appliqués, 3D flowers and garment embellishments for fashion brands worldwide.</p></div>
          <div><h3>Explore</h3><a href="#about">About us</a><a href="#catalog">Product ranges</a><a href="#products">Featured products</a><a href="#faq">FAQ</a></div>
          <div><h3>Production</h3><a href="#quote">OEM / ODM</a><a href="#quote">Sample development</a><a href="#quote">Private label</a><a href="#quote">Request a catalog</a></div>
          <div><h3>Get in touch</h3><a href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">WhatsApp Business</a><span>+86 157 6795 6637</span><span>Guangzhou, China</span><small>Monday–Saturday · 9:00–18:00 CST</small></div>
          <div className="footer-bottom"><span>© 2026 Velorace Lace. All rights reserved.</span><span>veloracelace.com · Factory direct · Worldwide delivery</span></div>
        </footer>
        <WhatsAppButton businessUrl="https://wa.me/message/IXEEGXESENF6F1" />
      </body>
    </html>
  );
}
