import { voitures } from "@/data/site";
import CarCard from "./CarCard";

export default function Fleet() {
  return (
    <section id="flotte" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Notre flotte
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Choisissez le véhicule qui vous convient et réservez-le directement sur Turo.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {voitures.map((voiture) => (
          <CarCard key={voiture.nom} voiture={voiture} />
        ))}
      </div>
    </section>
  );
}
