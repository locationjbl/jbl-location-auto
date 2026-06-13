import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.nom} — Location de voitures`,
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
    <html lang="fr">
      <body style={styleVars}>{children}</body>
    </html>
  );
}
