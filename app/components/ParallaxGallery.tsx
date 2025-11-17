export default function ParallaxGallery() {
  return (
    <section
      id="destacados"
      className="relative isolate overflow-hidden"
      aria-labelledby="destacados-title"
    >
      <div className="parallax-bg absolute inset-0 bg-[url('/images/galeria/obra-05.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-l from-ocre-900/70 via-terracota-800/50 to-ocre-700/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_28%)]" />
      <div className="absolute -left-10 top-10 h-52 w-52 rotate-12 rounded-3xl bg-gradient-to-br from-ocre-200/50 via-white/30 to-terracota-200/30 blur-2xl" />
      <div className="absolute -right-16 bottom-8 h-64 w-64 -rotate-6 rounded-full bg-gradient-to-br from-terracota-400/40 via-ocre-500/40 to-ocre-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center gap-6 px-6 py-20 text-white sm:py-24 lg:min-h-[85vh]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Capas de color
          </p>
          <h2
            id="destacados-title"
            className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            Obras destacadas que vibran con textura
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/85">
            Pinceladas expresivas, contrastes atrevidos y composiciones que
            capturan la energía del Caribe. Explora la galería para sentir la
            profundidad de cada capa.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            Acrílicos vibrantes
          </span>
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            Matices fríos y cálidos
          </span>
          <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            Texturas en movimiento
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#galeria"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocre-800 shadow-xl shadow-black/20 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ocre-800"
          >
            Explorar la Galería
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-white/60 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ocre-800"
          >
            Agenda una visita guiada
          </a>
        </div>
      </div>
    </section>
  );
}
