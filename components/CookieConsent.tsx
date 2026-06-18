"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { site } from "@/data/site";

/**
 * Bandeau de consentement aux cookies (Loi 25 / RGPD).
 * - Tant qu'aucun choix n'est fait, le bandeau s'affiche.
 * - « Accepter » → Google Analytics se charge et le choix est mémorisé.
 * - « Refuser »  → Google Analytics NE se charge PAS du tout.
 * Le choix est conservé dans le navigateur (localStorage) : le bandeau ne
 * réapparaît pas aux visites suivantes.
 */
const STORAGE_KEY = "jbl-cookie-consent"; // valeurs : "accepted" | "refused"

export default function CookieConsent({ gaId }: { gaId: string }) {
  // null = on ne sait pas encore (avant lecture du localStorage)
  const [choix, setChoix] = useState<"accepted" | "refused" | null>(null);
  const [pret, setPret] = useState(false);

  useEffect(() => {
    const stocke = localStorage.getItem(STORAGE_KEY);
    if (stocke === "accepted" || stocke === "refused") setChoix(stocke);
    setPret(true);
  }, []);

  const accepter = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setChoix("accepted");
  };
  const refuser = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setChoix("refused");
  };

  return (
    <>
      {/* Google Analytics — chargé UNIQUEMENT si l'utilisateur a accepté */}
      {choix === "accepted" && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {/* Bandeau : affiché seulement si aucun choix n'a encore été fait */}
      {pret && choix === null && (
        <div
          role="dialog"
          aria-label="Consentement aux cookies"
          aria-live="polite"
          className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-5"
        >
          <div className="glass mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 p-5 shadow-2xl shadow-black/40 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-white/85">
              🍪 Nous utilisons des cookies (Google Analytics) pour comprendre
              comment notre site est utilisé et l&apos;améliorer. Vous pouvez
              accepter ou refuser ce suivi.
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                onClick={refuser}
                className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
              >
                Refuser
              </button>
              <button
                onClick={accepter}
                className="rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: site.couleurs.primaire,
                  color: site.couleurs.texteSurPrimaire,
                }}
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
