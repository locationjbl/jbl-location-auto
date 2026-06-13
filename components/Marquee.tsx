"use client";

import { motion, useReducedMotion } from "framer-motion";
import { voitures } from "@/data/site";

/**
 * Ruban défilant en continu (Framer Motion) avec les marques de la flotte,
 * déduites automatiquement depuis `voitures`. Effet « vivant » premium.
 * Respecte prefers-reduced-motion : devient une simple liste centrée statique.
 */
export default function Marquee() {
  const reduce = useReducedMotion();

  // Déduit les marques uniques depuis le premier mot du nom de chaque voiture.
  const marques = Array.from(
    new Set(voitures.map((v) => v.nom.split(" ")[0]))
  );

  // On duplique la liste pour une boucle sans couture.
  const boucle = [...marques, ...marques];

  return (
    <section className="relative overflow-hidden border-y border-white/5 py-8">
      {/* Dégradés latéraux pour un fondu propre aux bords */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(90deg, var(--bg), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(270deg, var(--bg), transparent)" }}
      />

      {reduce ? (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5">
          {marques.map((m) => (
            <span
              key={m}
              className="font-display text-xl font-semibold tracking-wide text-white/40"
            >
              {m}
            </span>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex w-max gap-12 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
        >
          {boucle.map((m, i) => (
            <span
              key={m + i}
              className="font-display whitespace-nowrap text-2xl font-semibold tracking-wide text-white/35 transition-colors hover:text-white/70 md:text-3xl"
            >
              {m}
            </span>
          ))}
        </motion.div>
      )}
    </section>
  );
}
