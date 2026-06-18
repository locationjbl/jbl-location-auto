"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

/**
 * Section « Secteur / Zone desservie » — texte de proximité + villes.
 * Renforce le référencement local (Saint-Hubert, Longueuil, Rive-Sud…).
 * Thème sombre, révélation au défilement (Framer Motion).
 */
export default function ServiceArea() {
  const reduce = useReducedMotion();

  return (
    <section
      id="secteur"
      className="relative scroll-mt-20 py-24 md:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div
        aria-hidden
        className="glow-primary pointer-events-none absolute right-0 top-1/3 z-0 h-72 w-72 opacity-15 blur-2xl"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-[1] mx-auto max-w-3xl px-5 text-center"
      >
        <span
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: site.couleurs.primaire }}
        >
          Zone desservie
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Location de voiture à Saint-Hubert et sur la Rive-Sud
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">
          Basés à Saint-Hubert, nous offrons la location de véhicules partout sur
          la Rive-Sud et dans le Grand Montréal. VUS, modèles hybrides et
          électriques, berlines ou voitures économiques : nous livrons le véhicule
          là où vous êtes, dans un rayon de 30&nbsp;km, et directement à
          l&apos;aéroport. Réservation simple, 100&nbsp;% en ligne et disponible
          24&nbsp;h&nbsp;sur&nbsp;24.
        </p>

        {/* Villes desservies */}
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {site.zonesDesservies.map((ville) => (
            <span
              key={ville}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-white/85"
            >
              {ville}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
