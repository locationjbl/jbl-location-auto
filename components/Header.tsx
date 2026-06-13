import Image from "next/image";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b border-white/10"
      style={{ backgroundColor: `${site.couleurs.fonce}ee` }}
    >
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        {/* Logo ou nom */}
        <a href="#accueil" className="flex items-center gap-2 text-white font-bold text-lg">
          {site.logo ? (
            <Image src={site.logo} alt={site.nom} width={150} height={36} priority className="h-9 w-auto" />
          ) : (
            <span>{site.nom}</span>
          )}
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
          <a href="#flotte" className="hover:text-white transition">Nos voitures</a>
          <a href="#apropos" className="hover:text-white transition">À propos</a>
          <a href="#avis" className="hover:text-white transition">Avis</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Bouton Turo */}
        <a
          href={site.turoProfil}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 text-sm font-semibold transition hover:opacity-90"
          style={{ backgroundColor: site.couleurs.primaire, color: site.couleurs.texteSurPrimaire }}
        >
          Réserver sur Turo
        </a>
      </div>
    </header>
  );
}
