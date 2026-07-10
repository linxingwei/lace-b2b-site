import { ArrowRight, Menu, MessageCircle } from "lucide-react";

export default function SiteHeader() {
  return (
    <>
      <div className="announcement"><span>OEM / ODM · Flexible MOQ · Worldwide delivery</span><a href="https://wa.me/8615767956637" target="_blank" rel="noreferrer">Quotes within 24 hours <ArrowRight size={13} /></a></div>
      <header className="site-header">
        <a className="logo" href="#home" aria-label="Velorace Lace home"><strong>VELORACE</strong><span>LACE</span></a>
        <nav aria-label="Main navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#catalog">Collections</a><a href="#products">Products</a><a href="#faq">FAQ</a></nav>
        <a className="header-quote" href="#quote">Request a quote <ArrowRight size={15} /></a>
        <details className="mobile-menu"><summary aria-label="Open navigation"><Menu /></summary><div><a href="#home">Home</a><a href="#about">About</a><a href="#catalog">Collections</a><a href="#products">Products</a><a href="#faq">FAQ</a><a href="#quote"><MessageCircle size={17} /> Request a quote</a></div></details>
      </header>
    </>
  );
}
