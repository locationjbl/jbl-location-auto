"use client";

import { motion, useReducedMotion } from "framer-motion";
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
    texte:
      "Réservez à tout moment, jour et nuit, directement en ligne sur Turo.",
    icone: "🕐",
  },
  {
    titre: "La qualité avant tout",
    texte:
      "Des véhicules propres, fiables et soigneusement entretenus à chaque location.",
    icone: "⭐",
  },
];

/**
 * Section « Pourquoi nous » — atouts en cartes verre sombre, lueurs,
 * révélations en cascade au scroll et survols soignés (Framer Motion).
 */
export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="apropos"
      className="relative scroll-mt-20 overflow-hidden py-24 md:py-28"
      style={{ backgroundColor: "var(--bg-2)" }}
    >
      {/* Lueur d'ambiance */}
      <div
        aria-hidden
        className="glow-primary pointer-events-none absolute right-0 top-0 h-96 w-96 opacity-15 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: site.couleurs.primaire }}
          >
            Pourquoi nous
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Pourquoi {site.nom} ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            La livraison à votre porte, un service disponible en tout temps, et
            des véhicules de qualité. Tout simplement.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map((a, i) => (
            <motion.div
              key={a.titre}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="glass group rounded-3xl p-7 text-center transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${site.couleurs.primaire}1f`,
                  border: `1px solid ${site.couleurs.primaire}40`,
                }}
              >
                {a.icone}
              </div>
              <h3 className="mt-5 font-display font-bold text-white">
                {a.titre}
              </h3>
              <p className="mt-2 text-sm text-white/60">{a.texte}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
