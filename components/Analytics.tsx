"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const storageKey = "velora_analytics_consent";
type Consent = "granted" | "denied" | null;

export default function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "granted" || saved === "denied") setConsent(saved);
    setReady(true);
  }, []);

  if (!measurementId) return null;

  function choose(nextConsent: Exclude<Consent, null>) {
    window.localStorage.setItem(storageKey, nextConsent);
    setConsent(nextConsent);
  }

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="velora-ga4" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${measurementId}', { anonymize_ip: true, send_page_view: true });
          `}</Script>
        </>
      ) : null}

      {ready && consent === null ? (
        <aside className="cookie-banner" aria-label="Analytics preferences">
          <div>
            <strong>Help us improve your sourcing experience</strong>
            <p>We use Google Analytics only with your permission to understand page visits and wholesale inquiry actions. <a href="/privacy">Privacy details</a></p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="cookie-secondary" onClick={() => choose("denied")}>Necessary only</button>
            <button type="button" className="cookie-primary" onClick={() => choose("granted")}>Allow analytics</button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
