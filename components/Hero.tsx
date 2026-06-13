"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { site } from "@/data/site";

/**
 * Héro cinématique plein écran : photo de voiture premium en fond (Unsplash),
 * overlay sombre dégradé + lueur bleu ciel, titre géant, badge verre, 2 CTA.
 * Parallaxe au scroll (useScroll/useTransform) et zoom doux (CSS).
 * Chaque élément est animé directement (pas de variants fragiles) afin
 * qu'AUCUN texte ne reste bloqué à opacity:0. Respecte prefers-reduced-motion.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Déclencheur d'entrée : passe à `true` juste après le montage côté client.
  // Animer suite à ce changement d'état est fiable (l'animation de montage
  // pur ne se déclenchait pas dans ce contexte Next.js + Framer Motion).
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setShown(true);
  }, []);

  // Parallaxe : l'image et le contenu se décalent doucement au scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Animation d'entrée par élément (cascade via délais), déclenchée par le
  // passage de `shown` à true après le montage.
  const enter = (i: number) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 28 },
          animate: shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
            delay: 0.15 + i * 0.13,
          },
        };

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden text-white"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* --- Image de fond cinématique (parallaxe + zoom doux) --- */}
      <motion.div
        className="absolute inset-0 z-0"
        style={reduce ? undefined : { y: yImage }}
      >
        <div
          className="hero-zoom h-[115%] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
      </motion.div>

      {/* --- Overlay dégradé sombre (lisibilité) --- */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(180deg, rgba(10,20,32,0.55) 0%, rgba(10,20,32,0.7) 45%, var(--bg) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(110deg, ${site.couleurs.fonce}e6 0%, transparent 55%)`,
        }}
      />

      {/* --- Lueur bleu ciel discrète --- */}
      <div
        aria-hidden
        className="glow-primary pointer-events-none absolute -left-32 top-1/4 z-[1] h-[28rem] w-[28rem] opacity-40 blur-2xl"
      />
      <div
        aria-hidden
        className="glow-primary pointer-events-none absolute -right-24 bottom-10 z-[1] h-80 w-80 opacity-30 blur-2xl"
      />

      {/* --- Contenu --- */}
      <motion.div
        style={reduce ? undefined : { y: yContent, opacity }}
        className="relative z-[2] mx-auto w-full max-w-6xl px-5 pt-28 pb-32 md:pt-32"
      >
        {/* Badge verre */}
        <motion.span
          {...enter(0)}
          className="glass mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-white/90"
        >
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ backgroundColor: site.couleurs.primaire }}
          >
            <span
              className="absolute inset-0 animate-ping rounded-full"
              style={{ backgroundColor: site.couleurs.primaire }}
            />
          </span>
          Hôte Star sur Turo · {site.ville}
        </motion.span>

        {/* Titre géant */}
        <motion.h1
          {...enter(1)}
          className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <span className="text-gradient">{site.slogan}</span>
        </motion.h1>

        <motion.p
          {...enter(2)}
          className="mt-6 max-w-xl text-lg text-white/75 md:text-xl"
        >
          {site.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          {...enter(3)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#flotte"
            whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="rounded-full px-8 py-4 text-base font-semibold shadow-xl"
            style={{
              backgroundColor: site.couleurs.primaire,
              color: site.couleurs.texteSurPrimaire,
              boxShadow: `0 14px 40px -10px ${site.couleurs.primaire}`,
            }}
          >
            Voir nos voitures
          </motion.a>
          <motion.a
            href={site.turoProfil}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="glass rounded-full px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Réserver sur Turo →
          </motion.a>
        </motion.div>

        {/* Mini-stats sous les CTA */}
        <motion.div
          {...enter(4)}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60"
        >
          <span>
            <strong className="text-white">{site.turo.note}★</strong> ·{" "}
            {site.turo.nbAvis} avis
          </span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span>
            <strong className="text-white">{site.turo.nbVoyages}</strong> voyages
            réalisés
          </span>
        </motion.div>
      </motion.div>

      {/* --- Indicateur de scroll --- */}
      <div
        aria-hidden
        className="absolute bottom-7 left-1/2 z-[2] -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span
            className="scroll-dot h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: site.couleurs.primaire }}
          />
        </div>
      </div>
    </section>
  );
}
