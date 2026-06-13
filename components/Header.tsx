"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const liens = [
  { href: "#flotte", label: "Nos voitures" },
  { href: "#apropos", label: "À propos" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

/**
 * En-tête sticky qui devient verre dépoli sombre au scroll.
 * Logo blanc, navigation, CTA Turo lumineux. Animations Framer Motion.
 */
export default function Header() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  // Détecte le scroll pour activer l'effet verre dépoli.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/10 shadow-lg shadow-black/30"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2">
          <Image
            src={site.logo}
            alt={site.nom}
            width={160}
            height={40}
            priority
            className="h-8 w-auto md:h-10"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
          {liens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative transition-colors hover:text-white"
            >
              {l.label}
              {/* Soulignement lumineux animé au survol */}
              <span
                className="absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: site.couleurs.primaire }}
              />
            </a>
          ))}
        </nav>

        {/* CTA Turo lumineux */}
        <motion.a
          href={site.turoProfil}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition-shadow md:px-5 md:py-2.5"
          style={{
            backgroundColor: site.couleurs.primaire,
            color: site.couleurs.texteSurPrimaire,
            boxShadow: `0 8px 30px -8px ${site.couleurs.primaire}`,
          }}
        >
          Réserver
        </motion.a>
      </div>
    </motion.header>
  );
}
