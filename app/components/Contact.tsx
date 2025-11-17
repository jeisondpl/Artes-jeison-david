"use client";

import { FormEvent, useState } from "react";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jdiaz.art?igsh=MTd6N3FpcjRqNTJwMg==",
    handle: "@jdiaz.art",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100090278273465&mibextid=ZbWKwL",
    handle: "facebook.com/jdiaz.art",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@jdiaz.art?_r=1&_t=ZS-91U0N8cwfKy",
    handle: "@jdiaz.art",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/?text=TU_MENSAJE_AQUI",
    handle: "+57 320 596 66 24",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocre-600">
            Contacto
          </p>
          <h2 className="font-serif text-3xl text-ocre-900 sm:text-4xl">
            Conversemos sobre arte o clases
          </h2>
          <p className="text-ocre-700">
            Cuéntame qué necesitas: una obra personalizada, clases privadas o
            exponer en tu espacio. Respondo a la mayor brevedad.
          </p>

          <div className="panel space-y-4 p-6">
            <h3 className="font-serif text-xl text-ocre-900">
              Redes y contacto directo
            </h3>
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-ocre-100 bg-crema-50 px-4 py-3 text-ocre-800 transition hover:-translate-y-0.5 hover:border-ocre-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota-400 focus-visible:ring-offset-2 focus-visible:ring-offset-crema-50"
                >
                  <span className="font-medium">{social.label}</span>
                  <span className="text-sm text-ocre-700">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="panel p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-ocre-800"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-ocre-200 bg-white px-4 py-3 text-ocre-900 shadow-inner shadow-ocre-900/5 focus:border-ocre-400 focus:outline-none focus:ring-2 focus:ring-terracota-400"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-ocre-800"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-ocre-200 bg-white px-4 py-3 text-ocre-900 shadow-inner shadow-ocre-900/5 focus:border-ocre-400 focus:outline-none focus:ring-2 focus:ring-terracota-400"
                placeholder="nombre@correo.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-ocre-800"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-ocre-200 bg-white px-4 py-3 text-ocre-900 shadow-inner shadow-ocre-900/5 focus:border-ocre-400 focus:outline-none focus:ring-2 focus:ring-terracota-400"
                placeholder="Cuéntame en qué puedo ayudarte..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-terracota-500 px-6 py-3 font-semibold text-white shadow-lg shadow-terracota-500/25 transition hover:-translate-y-0.5 hover:bg-terracota-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocre-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Enviar mensaje
            </button>
            {submitted && (
              <p className="text-sm font-medium text-ocre-700">
                ¡Gracias! Este formulario está listo para conectarse con tu
                correo o servicio favorito.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
