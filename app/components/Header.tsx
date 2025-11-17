import Image from "next/image";

const navLinks = [
  { href: "#sobre", label: "Sobre el artista" },
  { href: "#galeria", label: "Galería" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-6 flex items-center justify-between rounded-full border border-ocre-100 bg-white/80 px-6 py-3 shadow-lg shadow-ocre-900/5 backdrop-blur">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo3.png"
              alt="Logo Jeison Arte"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-ocre-600">
                Pintor artístico
              </p>
              <p className="font-serif text-lg text-ocre-900">
                Jeison David Díaz
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-ocre-800 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-ocre-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota-400 focus-visible:ring-offset-2 focus-visible:ring-offset-crema-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#galeria"
              className="rounded-full bg-ocre-600 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:bg-ocre-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracota-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Ver galería
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
