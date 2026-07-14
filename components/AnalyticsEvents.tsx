"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function linkText(anchor: HTMLAnchorElement) {
  return (anchor.getAttribute("aria-label") || anchor.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.href;
      const common = { link_url: href, link_text: linkText(anchor), page_path: window.location.pathname };
      if (/wa\.me|whatsapp/i.test(href)) {
        trackEvent("whatsapp_click", common);
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
