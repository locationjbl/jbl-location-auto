"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, avis } from "@/data/site";

function Etoiles() {
  return (
    <span aria-hidden className="text-base tracking-tight" style={{ color: "#f5b50a" }}>
      ★★★★★
    </span>
  );
}

/**
 * Section Avis (thème sombre) — témoignages clients en cartes verre,
 * révélations en cascade au scroll, survols soignés (Framer Motion).
 * Reste sombre comme « À propos » et « Contact » pour un flux calme.
 */
export default function Reviews() {
  const reduce = useReducedMotion();

  return (
    <section
      id="avis"
      className="relative scroll-mt-20 py-24 md:py-28"
      style={{ backgroundColor: "var(--bg-2)" }}
    >
      {/* Lueur bleu ciel discrète */}
      <div
        aria-hidden
        className="glow-primary pointer-events-none absolute left-1/2 top-0 z-0 h-72 w-72 -translate-x-1/2 opacity-20 blur-2xl"
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-5">
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
            style={{ color: site.couleurs.primaire }}
          >
            Avis vérifiés
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Ce que disent nos clients
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/70">
            <span className="flex items-center gap-2">
              <Etoiles />
              <strong className="text-white">{site.turo.note}</strong> ·{" "}
              {site.turo.nbAvis} avis
            </span>
            <span className="hidden h-5 w-px bg-white/15 sm:block" />
            <span>{site.turo.nbVoyages} voyages réalisés</span>
            {site.turo.hoteStar && (
              <span
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold"
                style={{
                  backgroundColor: site.couleurs.primaire,
                  color: site.couleurs.texteSurPrimaire,
                }}
              >
                ⭐ Hôte Star
              </span>
            )}
          </div>
        </motion.div>

        {/* Cartes d'avis */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {avis.map((a, i) => (
            <motion.figure
              key={a.nom + a.date}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="glass flex flex-col rounded-3xl p-7"
            >
              <Etoiles />
              <blockquote className="mt-4 flex-1 leading-relaxed text-white/75">
                “{a.texte}”
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <span className="font-semibold text-white">{a.nom}</span>
                <span className="ml-2 text-sm text-white/45">{a.date}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Lien vers tous les avis */}
        <div className="mt-12 text-center">
          <a
            href={site.turoProfil}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-4 transition-opacity hover:underline hover:opacity-80"
            style={{ color: site.couleurs.primaire }}
          >
            Voir les {site.turo.nbAvis} avis sur Turo →
          </a>
        </div>
      </div>
    </section>
  );
}
