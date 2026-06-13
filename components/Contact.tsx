import { site } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 text-white"
      style={{ backgroundColor: site.couleurs.fonce }}
    >
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Prêt à prendre la route ?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Réservez en ligne sur Turo, ou contactez-nous directement pour toute question.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.turoProfil}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-7 py-3 font-semibold shadow-lg transition hover:opacity-90"
            style={{ backgroundColor: site.couleurs.primaire, color: site.couleurs.texteSurPrimaire }}
          >
            Réserver sur Turo →
          </a>
          <a
            href={`mailto:${site.courriel}`}
            className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Nous écrire
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <span>📞 {site.telephone}</span>
          <span>✉️ {site.courriel}</span>
          <span>📍 {site.emplacement}</span>
        </div>
      </div>

      {/* Carte de l'emplacement */}
      <div className="mx-auto mt-12 max-w-4xl px-5">
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
          <iframe
            title={`Emplacement — ${site.emplacement}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              site.emplacement
            )}&z=12&output=embed`}
            width="100%"
            height="320"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
