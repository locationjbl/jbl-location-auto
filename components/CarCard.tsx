import Image from "next/image";
import { site, type Voiture } from "@/data/site";

export default function CarCard({ voiture }: { voiture: Voiture }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
      {/* Photo */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={voiture.image}
          alt={voiture.nom}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: site.couleurs.primaire, color: site.couleurs.texteSurPrimaire }}
        >
          {voiture.categorie}
        </span>
      </div>

      {/* Infos */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-900">
            {voiture.nom}
            <span className="ml-1 font-normal text-slate-400">{voiture.annee}</span>
          </h3>
          <div className="text-right">
            {voiture.prixParJour ? (
              <>
                <div className="text-xl font-extrabold" style={{ color: site.couleurs.fonce }}>
                  dès {voiture.prixParJour}$
                </div>
                <div className="text-xs text-slate-400">/ jour</div>
              </>
            ) : (
              <div className="text-xs font-medium text-slate-400 leading-tight">
                Tarif
                <br />
                sur Turo
              </div>
            )}
          </div>
        </div>

        {/* Caractéristiques */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {voiture.caracteristiques.map((c) => (
            <li
              key={c}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
            >
              {c}
            </li>
          ))}
        </ul>

        {/* Bouton Turo */}
        <a
          href={voiture.turoLien}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block rounded-xl py-3 text-center font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: site.couleurs.fonce }}
        >
          Réserver sur Turo →
        </a>
      </div>
    </article>
  );
}
