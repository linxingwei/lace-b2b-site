import { ArrowRight, Menu, MessageCircle } from "lucide-react";

const links = [
  ["Home", "/"], ["Products", "/products"], ["Lace Trim", "/lace-trim"],
  ["Applique", "/3d-flower-applique"], ["Custom Design", "/custom-design"],
  ["About Us", "/about"], ["Blog", "/blog"], ["Contact", "/#contact"],
];

export default function SiteHeader() {
  return (
    <>
      <div className="announcement"><span>OEM & Custom Design - Flexible MOQ - Worldwide Shipping</span><a href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">Wholesale replies within 24 hours <ArrowRight size={13} /></a></div>
      <header className="site-header">
        <a className="logo" href="/" aria-label="Velora Lace home"><strong>VELORA</strong><span>LACE</span></a>
        <nav aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
        <a className="header-quote" href="/#contact">Request samples <ArrowRight size={15} /></a>
        <details className="mobile-menu"><summary aria-label="Open navigation"><Menu /></summary><div>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a href="/#contact"><MessageCircle size={17} /> Request samples</a></div></details>
      </header>
    </>
  );
}
