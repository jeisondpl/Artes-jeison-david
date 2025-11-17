"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = Array.from({ length: 18 }, (_, index) => ({
  src: `/images/galeria/obra-${String(index + 1).padStart(2, "0")}.jpeg`,
  alt: `Obra ${index + 1} de Jeison David Díaz`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  // Cierra el modal con la tecla Escape para accesibilidad.
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocre-600">
            Galería de obras
          </p>
          <h2 className="font-serif text-3xl text-ocre-900 sm:text-4xl">
            Color, textura y narrativa visual
          </h2>
          <p className="text-ocre-700">
            Una selección de piezas que reflejan resiliencia, Caribe y exploración
            contemporánea.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(image.src)}
              className="group relative overflow-hidden rounded-2xl border border-ocre-100 bg-crema-50 shadow-md shadow-ocre-900/5 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota-400 focus-visible:ring-offset-2 focus-visible:ring-offset-crema-50"
              aria-label={`Abrir imagen ${index + 1} en grande`}
            >
              <div className="relative h-64 w-full overflow-hidden sm:h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={index < 3}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 py-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-ocre-800 shadow-md shadow-black/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
          >
            Cerrar
          </button>
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <Image
              src={selected}
              alt="Obra ampliada de Jeison David Díaz"
              width={1400}
              height={900}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
