"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function linkText(anchor: HTMLAnchorElement) {
  return (anchor.getAttribute("aria-label") || anchor.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120);
}

function productCategory(pathname: string) {
  if (pathname.startsWith("/3d-flower-applique")) return "3D Flower Lace Applique";
  if (pathname.startsWith("/bridal-lace")) return "Bridal Lace";
  if (pathname.startsWith("/embroidery-lace")) return "Embroidery Lace";
  return "General Lace & Embellishments";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const referrer = document.referrer ? (() => { try { return new URL(document.referrer).hostname; } catch { return document.referrer.slice(0, 100); } })() : "direct";
    if (!window.sessionStorage.getItem("velora_landing_page")) {
      window.sessionStorage.setItem("velora_landing_page", window.location.pathname);
      window.sessionStorage.setItem("velora_utm_source", params.get("utm_source") || "");
      window.sessionStorage.setItem("velora_utm_medium", params.get("utm_medium") || "");
      window.sessionStorage.setItem("velora_utm_campaign", params.get("utm_campaign") || "");
      window.sessionStorage.setItem("velora_referrer", referrer);
    }

    function handleClick(event: MouseEvent) {
      const attribution = {
        landing_page: window.sessionStorage.getItem("velora_landing_page") || window.location.pathname,
        utm_source: window.sessionStorage.getItem("velora_utm_source") || undefined,
        utm_medium: window.sessionStorage.getItem("velora_utm_medium") || undefined,
        utm_campaign: window.sessionStorage.getItem("velora_utm_campaign") || undefined,
        referrer: window.sessionStorage.getItem("velora_referrer") || "direct",
      };
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.href;
      const common = { link_url: href, link_text: linkText(anchor), page_path: window.location.pathname };
      if (/wa\.me|whatsapp/i.test(href)) {
        const lead = {
          ...common,
          ...attribution,
          inquiry_method: "whatsapp",
          product_category: anchor.dataset.productCategory || productCategory(window.location.pathname),
          cta_placement: anchor.dataset.ctaPlacement || "unclassified_whatsapp_link",
        };
        trackEvent("whatsapp_lead_click", lead);
        trackEvent("generate_lead", lead);
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", common);
      } else if (anchor.hasAttribute("download") || /\.pdf(?:$|\?)/i.test(href)) {
        trackEvent("file_download", common);
      } else if (/catalog|yupoo/i.test(`${href} ${anchor.textContent || ""}`)) {
        trackEvent("catalog_click", common);
      } else if (href.includes("#contact") || /request (?:samples|a quote)|get free samples/i.test(anchor.textContent || "")) {
        trackEvent("inquiry_cta_click", common);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
