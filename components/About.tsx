import { site } from "@/data/site";

const atouts = [
  {
    titre: "Livraison jusqu'à 30 km",
    texte: "On vous livre le véhicule là où vous êtes, dans un rayon de 30 km.",
    icone: "🚗",
  },
  {
    titre: "Livraison à l'aéroport",
    texte: "Récupérez votre voiture directement à l'aéroport, sans détour.",
    icone: "✈️",
  },
  {
    titre: "Réservation 24h/24",
    texte: "Réservez à tout moment, jour et nuit, directement en ligne sur Turo.",
    icone: "🕐",
  },
  {
    titre: "La qualité avant tout",
    texte: "Des véhicules propres, fiables et soigneusement entretenus à chaque location.",
    icone: "⭐",
  },
];

export default function About() {
  return (
    <section id="apropos" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Pourquoi {site.nom} ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            La livraison à votre porte, un service disponible en tout temps, et des
            véhicules de qualité. Tout simplement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map((a) => (
            <div
              key={a.titre}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <div className="text-3xl">{a.icone}</div>
              <h3 className="mt-3 font-bold text-slate-900">{a.titre}</h3>
              <p className="mt-2 text-sm text-slate-500">{a.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
