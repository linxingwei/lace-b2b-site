"use client";

import { useEffect, useState } from "react";

const storageKey = "velora_analytics_consent";
type Consent = "granted" | "denied" | null;

export default function Analytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "granted" || saved === "denied") {
      setConsent(saved);
      if (saved === "granted") {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("consent", "update", { analytics_storage: "granted" });
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "page_view");
      }
    }
    setReady(true);
  }, []);


  function choose(nextConsent: Exclude<Consent, null>) {
    window.localStorage.setItem(storageKey, nextConsent);
    setConsent(nextConsent);
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("consent", "update", { analytics_storage: nextConsent });
    if (nextConsent === "granted") (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "page_view");
  }

  return (
    <>
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
