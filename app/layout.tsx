import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import { site } from "@/data/site";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

// Identifiant de mesure Google Analytics (gtag.js). Pour le changer ou le
// retirer, modifiez/videz cette valeur. Ajouté une seule fois ici → couvre
// automatiquement toutes les pages du site.
const GA_ID = "G-C1DQDMJ3KJ";

// --- Polices (next/font/google) ---
// Sora : police d'affichage forte pour les grands titres (display).
// Manrope : police de corps lisible et moderne (sans).
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.nom} — Location de voitures à ${site.ville}`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Injecte les couleurs de la marque comme variables CSS, utilisables partout.
  const styleVars = {
    "--primaire": site.couleurs.primaire,
    "--primaire-fonce": site.couleurs.primaireFonce,
    "--fonce": site.couleurs.fonce,
    "--texte-sur-primaire": site.couleurs.texteSurPrimaire,
  } as React.CSSProperties;

  return (
    <html lang="fr" className={`${sora.variable} ${manrope.variable}`}>
      <body style={styleVars}>
        {children}

        {/* Bandeau de consentement aux cookies — charge Google Analytics
            uniquement si l'utilisateur accepte. Présent sur toutes les pages. */}
        <CookieConsent gaId={GA_ID} />
      </body>
    </html>
  );
}
