import Image from "next/image";
import { site } from "@/data/site";

/**
 * Pied de page sombre premium : logo, liens, profil Turo.
 * Server Component (aucune animation requise).
 */
export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 py-12"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Image
            src={site.logo}
            alt={site.nom}
            width={150}
            height={38}
            className="h-9 w-auto opacity-90"
          />

          <div className="flex items-center gap-6 text-sm text-white/60">
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram
              </a>
            )}
            {site.facebook && (
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Facebook
              </a>
            )}
            <a
              href={`tel:${site.telephone}`}
              className="transition-colors hover:text-white"
            >
              {site.telephone}
            </a>
            <a
              href={site.turoProfil}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Profil Turo
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center text-sm text-white/40">
          © {2026} {site.nom}. Tous droits réservés. · {site.emplacement}
        </div>
      </div>
    </footer>
  );
}
