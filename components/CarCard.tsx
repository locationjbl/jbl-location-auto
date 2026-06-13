"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site, type Voiture } from "@/data/site";

/**
 * Carte de véhicule PREMIUM sur fond CLAIR : carte blanche, ombre douce,
 * photo Turo (next/image) qui ressort, chip catégorie bleu ciel / marine,
 * nom en marine, prix ou « Tarif sur Turo », caractéristiques en puces claires,
 * CTA Turo bien lisible. Survol léché (élévation + ombre + lueur/bordure
 * bleu ciel + zoom image) via Framer Motion.
 *
 * Lisibilité : aucun texte clair sur fond clair — tout est en marine (#203651)
 * ou gris-marine pour un contraste AA.
 */
export default function CarCard({ voiture }: { voiture: Voiture }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--line-light)] bg-[var(--surface-light)] shadow-[0_10px_30px_-12px_rgba(32,54,81,0.18)]"
      style={{ willChange: "transform" }}
    >
      {/* Lueur / bordure bleu ciel au survol */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 0 1.5px ${site.couleurs.primaire}, 0 28px 60px -22px ${site.couleurs.primaire}80`,
        }}
      />

      {/* Photo (sur fond clair : pas d'overlay sombre, la photo ressort) */}
      <div className="relative h-56 w-full overflow-hidden bg-[#eef3f9]">
        <Image
          src={voiture.image}
          alt={`${voiture.nom} ${voiture.annee}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-110"
        />

        {/* Chip catégorie : bleu ciel + texte marine (bon contraste) */}
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
          style={{
            backgroundColor: site.couleurs.primaire,
            color: site.couleurs.texteSurPrimaire,
          }}
        >
          {voiture.categorie}
        </span>
      </div>

      {/* Infos */}
      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-display text-lg font-bold"
            style={{ color: site.couleurs.fonce }}
          >
            {voiture.nom}
            <span className="ml-1.5 font-sans font-normal text-[var(--ink-faint)]">
              {voiture.annee}
            </span>
          </h3>
          <div className="shrink-0 text-right">
            {voiture.prixParJour ? (
              <>
                <div
                  className="font-display text-xl font-extrabold"
                  style={{ color: site.couleurs.primaireFonce }}
                >
                  dès {voiture.prixParJour}$
                </div>
                <div className="text-xs text-[var(--ink-faint)]">/ jour</div>
              </>
            ) : (
              <div className="text-xs font-medium leading-tight text-[var(--ink-faint)]">
                Tarif
                <br />
                sur Turo
              </div>
            )}
          </div>
        </div>

        {/* Caractéristiques en puces claires */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {voiture.caracteristiques.map((c) => (
            <li
              key={c}
              className="rounded-full border border-[var(--line-light)] bg-[#f1f5fa] px-3 py-1 text-xs text-[var(--ink-soft)]"
            >
              {c}
            </li>
          ))}
        </ul>

        {/* CTA Turo */}
        <motion.a
          href={voiture.turoLien}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          className="mt-6 block rounded-xl py-3 text-center font-semibold shadow-sm transition-colors"
          style={{
            backgroundColor: site.couleurs.primaire,
            color: site.couleurs.texteSurPrimaire,
          }}
        >
          Réserver sur Turo →
        </motion.a>
      </div>
    </motion.article>
  );
}
