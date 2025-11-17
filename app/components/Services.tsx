const services = [
  {
    title: "Clases de pintura",
    description:
      "Sesiones personalizadas para niños y adultos: técnica, color y confianza frente al lienzo.",
    details: "Modalidad presencial en Santa Marta. Grupos pequeños o individuales.",
  },
  {
    title: "Obras por encargo",
    description:
      "Piezas únicas que narran historias familiares, paisajes del Caribe o conceptos abstractos.",
    details: "Boceto previo, selección de paleta cálida y entregas enmarcadas.",
  },
  {
    title: "Exhibiciones y muestras",
    description:
      "Curaduría de obras para espacios culturales, galerías locales y eventos privados.",
    details: "Montaje, iluminación sugerida y relato de cada pieza.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-crema-50">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocre-600">
            Servicios
          </p>
          <h2 className="font-serif text-3xl text-ocre-900 sm:text-4xl">
            Arte que se comparte y se vive
          </h2>
          <p className="text-ocre-700">
            Clases, encargos y exhibiciones pensadas para conectar con cada
            historia personal.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="panel group flex flex-col gap-4 p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-ocre-900">
                  {service.title}
                </h3>
                <span className="h-3 w-3 rounded-full bg-terracota-500 transition group-hover:scale-110" />
              </div>
              <p className="text-ocre-700">{service.description}</p>
              <p className="text-sm font-medium text-ocre-800">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
