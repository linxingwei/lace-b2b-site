"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const storageKey = "velora_analytics_consent";
type Consent = "granted" | "denied" | null;

export default function Analytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "granted" || saved === "denied") {
      setConsent(saved);
      if (saved === "granted") {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("consent", "update", { analytics_storage: "granted" });
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || consent !== "granted" || lastTrackedPath.current === pathname) return;
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
    lastTrackedPath.current = pathname;
  }, [ready, consent, pathname]);

  function choose(nextConsent: Exclude<Consent, null>) {
    window.localStorage.setItem(storageKey, nextConsent);
    setConsent(nextConsent);
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("consent", "update", { analytics_storage: nextConsent });
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
