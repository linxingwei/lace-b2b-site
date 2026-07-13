import { ArrowRight, ChevronDown, Menu, MessageCircle } from "lucide-react";

const mainLinks = [
  ["Home", "/"],
  ["Custom Lace", "/custom-design"],
  ["Manufacturing", "/#manufacturing"],
  ["About Us", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const productLinks = [
  ["Bridal Lace", "/bridal-lace", "Lace for gowns, veils and couture bridalwear"],
  ["Fashion Lace", "/embroidery-lace", "Embroidered lace for contemporary collections"],
  ["Lolita Lace", "/kids-lace-trim", "Decorative trims for Lolita and playful fashion"],
  ["Lace Trim", "/lace-trim", "Borders, edgings and garment finishing details"],
  ["Applique", "/3d-flower-applique", "Dimensional motifs and floral embellishments"],
];

function ProductDropdown() {
  return (
    <details className="nav-products">
      <summary>
        Products <ChevronDown size={13} aria-hidden="true" />
      </summary>
      <div className="product-dropdown">
        <div className="product-dropdown-intro">
          <span>Product collections</span>
          <strong>Lace selected for bridal and fashion development.</strong>
          <a href="/products">View all products <ArrowRight size={14} /></a>
        </div>
        <div className="product-dropdown-links">
          {productLinks.map(([label, href, description]) => (
            <a href={href} key={label}>
              <span>{label}</span>
              <small>{description}</small>
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </details>
  );
}

export default function SiteHeader() {
  return (
    <>
      <div className="announcement">
        <span>OEM & Custom Design · Flexible MOQ · Worldwide Shipping</span>
        <a href="https://wa.me/message/IXEEGXESENF6F1" target="_blank" rel="noreferrer">
          Wholesale replies within 24 hours <ArrowRight size={13} />
        </a>
      </div>
      <header className="site-header">
        <a className="logo" href="/" aria-label="Velora Lace home">
          <strong>VELORA</strong><span>LACE</span>
        </a>

        <nav className="desktop-navigation" aria-label="Main navigation">
          <a href="/">Home</a>
          <ProductDropdown />
          {mainLinks.slice(1).map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>

        <a className="header-quote" href="/#contact">Request samples <ArrowRight size={15} /></a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <div className="mobile-menu-panel">
            <div className="mobile-menu-heading"><span>Navigation</span><small>Velora Lace</small></div>
            <a href="/">Home</a>
            <details className="mobile-products">
              <summary>Products <ChevronDown size={15} aria-hidden="true" /></summary>
              <div>
                <a href="/products">All Products</a>
                {productLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
              </div>
            </details>
            {mainLinks.slice(1).map(([label, href]) => <a href={href} key={label}>{label}</a>)}
            <a className="mobile-inquiry-link" href="/#contact"><MessageCircle size={17} /> Request samples</a>
          </div>
        </details>
      </header>
    </>
  );
}
