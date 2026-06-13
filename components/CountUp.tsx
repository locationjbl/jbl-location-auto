"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Valeur finale à atteindre. */
  value: number;
  /** Nombre de décimales (ex. 1 pour la note « 5.0 »). */
  decimals?: number;
  /** Durée de l'animation en ms. */
  duration?: number;
  /** Texte ajouté après le nombre (ex. " +"). */
  suffix?: string;
  className?: string;
};

/**
 * Compteur qui s'incrémente de 0 jusqu'à `value` lorsqu'il devient visible
 * (IntersectionObserver). Respecte `prefers-reduced-motion` : affiche
 * directement la valeur finale si l'utilisateur préfère réduire les mouvements.
 */
export default function CountUp({
  value,
  decimals = 0,
  duration = 1600,
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) => n.toFixed(decimals);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Easing « ease-out » pour un ralenti naturel en fin de course.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            frame = requestAnimationFrame(animate);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
