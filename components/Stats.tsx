"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import CountUp from "./CountUp";

/**
 * Bandeau de statistiques Turo en GROS chiffres animés (compteurs CountUp),
 * sur fond verre sombre avec lueur bleu ciel. Apparition au scroll.
 */
const stats = [
  { value: Number(site.turo.note), decimals: 1, suffix: "★", label: "Note moyenne" },
  { value: site.turo.nbAvis, decimals: 0, suffix: "", label: "Avis vérifiés" },
  { value: site.turo.nbVoyages, decimals: 0, suffix: "", label: "Voyages réalisés" },
];

export default function Stats() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Lueur de fond */}
      <div
        aria-hidden
        className="glow-primary pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass grid grid-cols-1 gap-8 rounded-3xl px-6 py-10 sm:grid-cols-2 md:grid-cols-4 md:px-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              <div
                className="font-display text-4xl font-extrabold tracking-tight md:text-5xl"
                style={{ color: site.couleurs.primaire }}
              >
                <CountUp value={s.value} decimals={s.decimals} />
                {s.suffix}
              </div>
              <div className="mt-2 text-sm font-medium text-white/60">
                {s.label}
              </div>
            </motion.div>
          ))}

          {/* Badge Hôte Star */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold"
              style={{
                backgroundColor: site.couleurs.primaire,
                color: site.couleurs.texteSurPrimaire,
              }}
            >
              ⭐ Hôte Star
            </span>
            <div className="mt-2 text-sm font-medium text-white/60">
              Distinction Turo
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
