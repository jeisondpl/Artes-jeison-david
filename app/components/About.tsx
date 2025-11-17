const highlights = [
  { label: "Ciudad", value: "Santa Marta, Magdalena" },
  { label: "Experiencia", value: "13 años creando y enseñando" },
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
                Hola, mi nombre es Jeison David, tengo 22 años y vivo en Santa
                Marta. Nací con una condición que hace que mi proceso mental y
                cognitivo sea un poco más lento que el de otras personas, pero
                también me ha dado una sensibilidad especial para sentir y mirar
                el mundo.
              </p>
              <p className="leading-relaxed text-ocre-700">
                A veces me cuesta expresar lo que pienso con palabras, pero
                cuando pinto… todo fluye. Los colores hablan por mí. Cada trazo
                es una emoción, un recuerdo, una manera de entender lo que me
                rodea. Mi condición no me limita: simplemente hace que todo lo
                vea con más pausa, más detalle y más corazón.
              </p>
              <p className="leading-relaxed text-ocre-700">
                Pintar me ayuda a contar mi historia, y enseñar arte me llena el
                alma, porque creo que todos podemos encontrar algo bonito dentro
                de nosotros cuando hacemos algo con amor.
              </p>
              <p className="leading-relaxed text-ocre-700">
                Este espacio es para compartir mis obras y para abrir
                oportunidades que me ayuden a seguir creciendo como artista y
                como persona. Gracias por apoyarme, por ver mi arte y por
                acompañarme en este camino.
              </p>
              <p className="text-lg leading-relaxed text-ocre-800">
                Bienvenidos a mi mundo… un mundo visto a mi ritmo, con mucha
                luz, verdad y color. 🎨💛
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
