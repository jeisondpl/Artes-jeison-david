export default function ParallaxHero() {
  return (
    <section
      id="historia"
      className="relative isolate overflow-hidden"
      aria-labelledby="historia-title"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-ocre-800 via-terracota-700 to-ocre-600 opacity-85" />
      <div className="parallax-bg absolute inset-0 bg-[url('/images/galeria/obra-12.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-white/5 mix-blend-multiply" />
      <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-terracota-400/30 blur-3xl" />
      <div className="absolute -top-16 -right-6 h-52 w-52 rounded-full bg-ocre-200/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-8 px-6 py-20 text-white sm:py-28 lg:min-h-[90vh]">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] shadow-lg shadow-black/20 backdrop-blur">
          Raíces y evolución
        </span>
        <div className="space-y-4 rounded-3xl border border-white/20 bg-black/35 p-6 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-8">
          <h2
            id="historia-title"
            className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            23 años de arte, inspiración y resiliencia
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Jeison transforma cada desafío en color. Desde Santa Marta, su
            trazo mezcla disciplina, calor caribe y una sensibilidad que abraza
            la diversidad. Esta es la mirada íntima de un pintor que vive y
            enseña el arte con el corazón abierto.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
          <div className="rounded-2xl bg-white/15 px-4 py-3 shadow-md shadow-black/10 backdrop-blur">
            Historias en acrílico que nacen de la resiliencia.
          </div>
          <div className="rounded-2xl bg-white/15 px-4 py-3 shadow-md shadow-black/10 backdrop-blur">
            Enseñanza y creación en una misma paleta.
          </div>
          <div className="rounded-2xl bg-white/15 px-4 py-3 shadow-md shadow-black/10 backdrop-blur">
            Mirada vibrante, cercana y profundamente humana.
          </div>
        </div>
      </div>
    </section>
  );
}
