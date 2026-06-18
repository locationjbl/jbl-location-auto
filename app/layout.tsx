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

const SITE_URL = "https://locationjbl.com";
const titrePrincipal = `${site.nom} — Location de voitures à ${site.ville}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: titrePrincipal,
    template: `%s | ${site.nom}`,
  },
  description: site.description,
  keywords: [
    "location de voiture",
    "location auto",
    "location véhicule",
    "location VUS",
    site.nom,
    "Location JBL",
    site.ville,
    "Longueuil",
    "Rive-Sud",
    "Montréal",
    "Turo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: SITE_URL,
    siteName: site.nom,
    title: titrePrincipal,
    description: site.description,
    images: [
      {
        url: "https://images.turo.com/media/vehicle/images/dBYXhGHgQoyjgyOx8N23aw.960x540.jpg",
        width: 960,
        height: 540,
        alt: site.nom,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Données structurées (JSON-LD) : indique à Google qu'il s'agit d'une
// entreprise de location de voitures à Saint-Hubert.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: site.nom,
  image: `${SITE_URL}/jbl-logo-marin.png`,
  url: SITE_URL,
  telephone: "+1-438-969-0922",
  email: site.courriel,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint-Hubert",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  areaServed: ["Saint-Hubert", "Longueuil", "Rive-Sud", "Montréal"],
  sameAs: [site.turoProfil],
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
        {/* Données structurées pour Google (entreprise de location d'auto) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}

        {/* Bandeau de consentement aux cookies — charge Google Analytics
            uniquement si l'utilisateur accepte. Présent sur toutes les pages. */}
        <CookieConsent gaId={GA_ID} />
      </body>
    </html>
  );
}
