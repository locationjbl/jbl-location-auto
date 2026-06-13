import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: site.couleurs.fonce }}
    >
      {/* Image de fond */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
      </div>
      {/* Dégradé */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${site.couleurs.fonce}f2 0%, ${site.couleurs.fonce}99 100%)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-36 text-center">
        <h1 className="fade-up text-4xl md:text-6xl font-extrabold tracking-tight">
          {site.slogan}
        </h1>
        <p className="fade-up mx-auto mt-5 max-w-2xl text-lg text-white/80">
          {site.description}
        </p>
        <div className="fade-up mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#flotte"
            className="rounded-full px-7 py-3 font-semibold shadow-lg transition hover:opacity-90"
            style={{ backgroundColor: site.couleurs.primaire, color: site.couleurs.texteSurPrimaire }}
          >
            Voir nos voitures
          </a>
          <a
            href={site.turoProfil}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Réserver sur Turo →
          </a>
        </div>
      </div>
    </section>
  );
}
