import { site, avis } from "@/data/site";

function Etoiles() {
  return (
    <span aria-hidden className="text-lg tracking-tight" style={{ color: "#f5b50a" }}>
      ★★★★★
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="avis" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* En-tête + statistiques Turo */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Ce que disent nos clients
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Etoiles />
              <span className="font-bold text-slate-900">{site.turo.note}</span>
              <span className="text-slate-500">· {site.turo.nbAvis} avis</span>
            </div>
            <span className="hidden h-5 w-px bg-slate-200 sm:block" />
            <span className="text-slate-500">{site.turo.nbVoyages} voyages réalisés</span>
            {site.turo.hoteStar && (
              <>
                <span className="hidden h-5 w-px bg-slate-200 sm:block" />
                <span
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold"
                  style={{ backgroundColor: site.couleurs.primaire, color: site.couleurs.texteSurPrimaire }}
                >
                  ⭐ Hôte Star
                </span>
              </>
            )}
          </div>
          <p className="mt-3 text-sm text-slate-400">Avis vérifiés sur Turo</p>
        </div>

        {/* Cartes d'avis */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {avis.map((a) => (
            <figure
              key={a.nom + a.date}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <Etoiles />
              <blockquote className="mt-3 flex-1 text-slate-700">“{a.texte}”</blockquote>
              <figcaption className="mt-4 border-t border-slate-200 pt-4">
                <span className="font-semibold text-slate-900">{a.nom}</span>
                <span className="ml-2 text-sm text-slate-400">{a.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Lien vers tous les avis */}
        <div className="mt-10 text-center">
          <a
            href={site.turoProfil}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-4 hover:underline"
            style={{ color: site.couleurs.fonce }}
          >
            Voir les {site.turo.nbAvis} avis sur Turo →
          </a>
        </div>
      </div>
    </section>
  );
}
