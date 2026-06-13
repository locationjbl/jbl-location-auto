"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { voitures } from "@/data/site";
import { site } from "@/data/site";
import CarCard from "./CarCard";

/**
 * Section Flotte : grille de cartes premium avec filtres par catégorie
 * (layout animations Framer Motion). Apparition en cascade au scroll.
 */
export default function Fleet() {
  const reduce = useReducedMotion();
  const [filtre, setFiltre] = useState<string>("Tous");

  // Catégories uniques déduites des voitures, dans l'ordre d'apparition.
  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(voitures.map((v) => v.categorie)))],
    []
  );

  const visibles = useMemo(
    () =>
      filtre === "Tous"
        ? voitures
        : voitures.filter((v) => v.categorie === filtre),
    [filtre]
  );

  return (
    <section
      id="flotte"
      className="section-light relative scroll-mt-20 py-24 md:py-28"
    >
      {/* Transition douce : fondu depuis la section sombre (Marquee) au-dessus */}
      <div
        aria-hidden
        className="fade-from-dark pointer-events-none absolute inset-x-0 top-0 h-40"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* En-tête */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: site.couleurs.primaireFonce }}
          >
            Notre flotte
          </span>
          <h2
            className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl"
            style={{ color: site.couleurs.fonce }}
          >
            16 véhicules, prêts à rouler
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--ink-soft)]">
            Choisissez le véhicule qui vous convient et réservez-le directement
            sur Turo.
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {categories.map((cat) => {
            const actif = cat === filtre;
            return (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  color: actif
                    ? site.couleurs.texteSurPrimaire
                    : site.couleurs.fonce,
                }}
              >
                {actif && (
                  <motion.span
                    layoutId="filtre-actif"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: site.couleurs.primaire }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {!actif && (
                  <span className="absolute inset-0 rounded-full border border-[var(--line-light)] bg-white" />
                )}
                <span className="relative z-[1]">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Grille avec animations de layout */}
        <motion.div
          layout={!reduce}
          className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibles.map((voiture, i) => (
              <motion.div
                key={voiture.nom + voiture.turoLien}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.45,
                  delay: reduce ? 0 : (i % 3) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <CarCard voiture={voiture} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Transition douce : fondu vers la section sombre (About) en dessous */}
      <div
        aria-hidden
        className="fade-to-dark pointer-events-none absolute inset-x-0 bottom-0 h-40"
      />
    </section>
  );
}
