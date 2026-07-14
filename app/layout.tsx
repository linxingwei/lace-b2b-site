import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import AnalyticsEvents from "@/components/AnalyticsEvents";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veloracelace.com"),
  title: { default: "China Lace & Garment Accessories Supplier | Velora Lace", template: "%s | Velora Lace" },
  description: "China lace trim manufacturer and garment accessories supplier for fashion brands, bridal designers, garment factories and textile wholesalers.",
  keywords: ["lace trim supplier", "lace trim manufacturer", "wholesale lace supplier", "bridal lace supplier", "embroidery lace manufacturer", "China lace manufacturer"],
  authors: [{ name: "Velora Lace" }],
  creator: "Velora Lace",
  publisher: "Velora Lace",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { title: "Velora Lace | China Lace Trim Manufacturer", description: "Wholesale lace trims, bridal lace, embroidery and 3D appliques for global fashion buyers.", type: "website", locale: "en_US", url: "https://www.veloracelace.com", siteName: "Velora Lace", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Velora Lace wholesale lace trim and custom development" }] },
  twitter: { card: "summary_large_image", title: "Velora Lace | China Lace Trim Manufacturer", description: "Wholesale lace trims, bridal lace, embroidery and 3D appliques for global fashion buyers.", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#251d18" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", "@id": "https://www.veloracelace.com/#organization", name: "Velora Lace", legalName: "Guangzhou Ruiyuelai Trading Co., Ltd.", description: "B2B lace trim and garment accessories supplier supporting fashion brands, bridal designers and garment manufacturers.", url: "https://www.veloracelace.com", logo: "https://www.veloracelace.com/og.png", telephone: "+86 157 6795 6637", email: "sales@veloracelace.com", address: { "@type": "PostalAddress", addressLocality: "Guangzhou", addressRegion: "Guangdong", addressCountry: "CN" }, areaServed: ["US", "EU", "GB", "AE", "SA"], contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "sales@veloracelace.com", telephone: "+86 157 6795 6637", availableLanguage: ["English", "Chinese"] }, sameAs: ["https://wa.me/message/IXEEGXESENF6F1"] };
  const website = { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://www.veloracelace.com/#website", name: "Velora Lace", url: "https://www.veloracelace.com", inLanguage: "en", publisher: { "@id": "https://www.veloracelace.com/#organization" } };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="footer-brand"><a className="logo logo-light" href="/"><strong>VELORA</strong><span>LACE</span></a><p>Guangzhou lace and fashion accessories supplier coordinating custom development and wholesale production for global buyers.</p></div>
          <div><h3>Collections</h3><a href="/products">All Products</a><a href="/lace-trim">Lace Trim</a><a href="/embroidery-lace">Embroidery Lace</a><a href="/eyelash-lace">Eyelash Lace</a><a href="/bridal-lace">Bridal Lace</a><a href="/3d-flower-applique">3D Applique</a><a href="/kids-lace-trim">Kids Lace Trim</a></div>
          <div><h3>Company</h3><a href="/custom-design">Custom Design</a><a href="/about">About Us</a><a href="/blog">Blog</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a></div>
          <div><h3>Get in touch</h3><a href="mailto:sales@veloracelace.com">sales@veloracelace.com</a><a href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">WhatsApp Business</a><span>+86 157 6795 6637</span><span>Guangzhou, China</span><small>Monday-Saturday - 9:00-18:00 CST</small></div>
          <div className="footer-bottom"><span>Copyright 2026 Velora Lace. All rights reserved.</span><span>Wholesale supply - Custom development - Worldwide shipping</span></div>
        </footer>
        <WhatsAppButton businessUrl="https://wa.me/message/IXEEGXESENF6F1" />
        <AnalyticsEvents />
        <Analytics />
      </body>
    </html>
  );
}
