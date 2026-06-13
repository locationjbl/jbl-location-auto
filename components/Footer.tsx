import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:flex-row">
        <span>
          © {2026} {site.nom}. Tous droits réservés.
        </span>
        <div className="flex items-center gap-5">
          {site.instagram && (
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
              Instagram
            </a>
          )}
          {site.facebook && (
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
              Facebook
            </a>
          )}
          <a
            href={site.turoProfil}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            Profil Turo
          </a>
        </div>
      </div>
    </footer>
  );
}
