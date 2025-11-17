const highlights = [
  { label: "Ciudad", value: "Santa Marta, Magdalena" },
  { label: "Experiencia", value: "23 años creando y enseñando" },
  { label: "Condición", value: "Resiliencia frente a una condición motora" },
  { label: "Familia", value: "Hermano mayor entre 5" },
  { label: "Pasatiempos", value: "Entrenamiento en gimnasio" },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-ocre-500/80" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocre-600">
              Sobre el artista
            </p>
            <h2 className="font-serif text-3xl text-ocre-900 sm:text-4xl">
              Historia que inspira y transforma
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="panel lg:col-span-2">
            <div className="space-y-4 p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-ocre-800">
                Jeison David Díaz es un pintor de Santa Marta con 23 años de
                oficio. Desde joven convive con una condición motora que le
                exigió reinventarse, y en el arte encontró su manera de
                contar—con color y textura—historias de resiliencia y belleza
                cotidiana. Su obra combina tonos cálidos del Caribe con
                composiciones contemporáneas.
              </p>
              <p className="leading-relaxed text-ocre-700">
                Además de crear, Jeison enseña. Comparte su experiencia con
                niños y adultos, guiándolos para perderle el miedo al lienzo y
                expresar su propia voz. Como hermano mayor de cinco, el cuidado
                y la paciencia son parte de su sello: cada clase y cada pintura
                están pensadas para acompañar procesos personales.
              </p>
            </div>
          </div>

          <div className="panel flex flex-col gap-4 p-8 sm:p-10">
            <h3 className="font-serif text-2xl text-ocre-900">
              Datos en pinceladas
            </h3>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between rounded-xl bg-crema-50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-ocre-600">
                    {item.label}
                  </span>
                  <span className="max-w-[55%] text-right text-sm text-ocre-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
