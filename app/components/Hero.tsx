import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-gradient-to-b from-crema-50 via-white to-crema-100 pb-16 pt-32 sm:pt-40"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:gap-16">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-ocre-100 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ocre-600 shadow-md shadow-ocre-900/5">
            Pintor y profesor de Santa Marta
          </span>
          <div className="space-y-4">
            <h1 className="font-serif text-4xl leading-tight text-ocre-900 sm:text-5xl lg:text-6xl">
              Jeison David Díaz – Pintor Artístico
            </h1>
            <p className="text-lg text-ocre-700 sm:text-xl">
              23 años de arte, pasión y enseñanza desde Santa Marta. Historias
              de color que inspiran y forman nuevas generaciones.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#galeria"
              className="rounded-full bg-ocre-600 px-6 py-3 text-white shadow-lg shadow-ocre-900/10 transition hover:-translate-y-0.5 hover:bg-ocre-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota-400 focus-visible:ring-offset-2 focus-visible:ring-offset-crema-50"
            >
              Ver galería
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-ocre-200 bg-white/70 px-6 py-3 text-ocre-800 shadow-md shadow-ocre-900/5 transition hover:-translate-y-0.5 hover:border-ocre-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Agendar una clase
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-ocre-700 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-terracota-500" aria-hidden />
              23 años de carrera
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-ocre-500" aria-hidden />
              Profesor para niños y adultos
            </span>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="panel relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-ocre-900/20 via-transparent to-white/10" />
            <Image
              src="/images/galeria/obra-01.jpeg"
              alt="Retrato de Jeison David Díaz junto a una de sus piezas artísticas"
              width={900}
              height={1100}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-ocre-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -right-10 h-32 w-32 rounded-full bg-terracota-400/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
