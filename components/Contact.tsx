"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

/**
 * Section Contact — CTA Turo / mailto / tel + carte Google Maps stylée
 * pour le sombre (filtre invert/grayscale). Révélations Framer Motion.
 */
export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden py-24 md:py-28"
      style={{ backgroundColor: "var(--bg-2)" }}
    >
      {/* Lueur d'ambiance */}
      <div
        aria-hidden
        className="glow-primary pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] max-w-full -translate-x-1/2 opacity-20 blur-3xl"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-3xl px-5 text-center"
      >
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Prêt à prendre la route ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/65">
          Réservez en ligne sur Turo, ou contactez-nous directement pour toute
          question.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href={site.turoProfil}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="rounded-full px-8 py-3.5 font-semibold shadow-xl"
            style={{
              backgroundColor: site.couleurs.primaire,
              color: site.couleurs.texteSurPrimaire,
              boxShadow: `0 14px 40px -10px ${site.couleurs.primaire}`,
            }}
          >
            Réserver sur Turo →
          </motion.a>
          <motion.a
            href={`mailto:${site.courriel}`}
            whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="glass rounded-full px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Nous écrire
          </motion.a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/65">
          <a href={`tel:${site.telephone}`} className="transition-colors hover:text-white">
            📞 {site.telephone}
          </a>
          <a href={`mailto:${site.courriel}`} className="transition-colors hover:text-white">
            ✉️ {site.courriel}
          </a>
          <span>📍 {site.emplacement}</span>
        </div>
      </motion.div>

      {/* Carte */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-14 max-w-4xl px-5"
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
          <iframe
            title={`Emplacement — ${site.emplacement}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              site.emplacement
            )}&z=12&output=embed`}
            width="100%"
            height="340"
            loading="lazy"
            style={{
              border: 0,
              // Stylise la carte pour le thème sombre (inversion + désaturation).
              filter: "invert(0.92) hue-rotate(180deg) brightness(0.95) contrast(0.9)",
            }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}
