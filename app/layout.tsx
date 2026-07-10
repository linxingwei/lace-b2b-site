import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veloracelace.com"),
  title: { default: "Wholesale Lace Trim Manufacturer in China | Velorace Lace", template: "%s | Velorace Lace" },
  description: "China lace trim manufacturer and garment accessories supplier for fashion brands, bridal designers, garment factories and textile wholesalers.",
  keywords: ["lace trim supplier", "lace trim manufacturer", "wholesale lace supplier", "bridal lace supplier", "embroidery lace manufacturer", "China lace manufacturer"],
  alternates: { canonical: "/" },
  openGraph: { title: "Velorace Lace | China Lace Trim Manufacturer", description: "Wholesale lace trims, bridal lace, embroidery and 3D appliques for global fashion buyers.", type: "website", locale: "en_US", url: "https://www.veloracelace.com", siteName: "Velorace Lace" },
  twitter: { card: "summary_large_image", title: "Velorace Lace | China Lace Trim Manufacturer", description: "Wholesale lace trims, bridal lace, embroidery and 3D appliques for global fashion buyers." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#251d18" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Velorace Lace", legalName: "Guangzhou Ruiyuelai Trading Co., Ltd.", url: "https://www.veloracelace.com", telephone: "+86 157 6795 6637", address: { "@type": "PostalAddress", addressLocality: "Guangzhou", addressCountry: "CN" }, sameAs: ["https://wa.me/message/IXEEGXESENF6F1"] };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="footer-brand"><a className="logo logo-light" href="/"><strong>VELORACE</strong><span>LACE</span></a><p>China lace trim manufacturer and fashion accessories supplier for brands, bridal designers, garment factories and wholesalers worldwide.</p></div>
          <div><h3>Collections</h3><a href="/lace-trim">Lace Trim</a><a href="/embroidery-lace">Embroidery Lace</a><a href="/bridal-lace">Bridal Lace</a><a href="/3d-flower-applique">3D Applique</a></div>
          <div><h3>Company</h3><a href="/custom-design">Custom Design</a><a href="/about-us">About Us</a><a href="/blog">Blog</a><a href="/#contact">Contact</a></div>
          <div><h3>Get in touch</h3><a href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">WhatsApp Business</a><span>+86 157 6795 6637</span><span>Guangzhou, China</span><small>Monday-Saturday - 9:00-18:00 CST</small></div>
          <div className="footer-bottom"><span>Copyright 2026 Velorace Lace. All rights reserved.</span><span>Wholesale supply - Custom development - Worldwide shipping</span></div>
        </footer>
        <WhatsAppButton businessUrl="https://wa.me/message/IXEEGXESENF6F1" />
      </body>
    </html>
  );
}
