"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#historia", label: "Historia" },
  { href: "#sobre", label: "Sobre el artista" },
  { href: "#destacados", label: "Obras" },
  { href: "#galeria", label: "Galería" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

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
          <div className="hidden md:flex flex-wrap items-center gap-4 text-sm font-medium text-ocre-800 md:gap-8">
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
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 text-ocre-800 hover:text-ocre-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden">
            <div className="flex h-full flex-col items-center justify-center gap-8 text-lg font-medium text-ocre-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-ocre-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#galeria"
                className="rounded-full bg-ocre-600 px-6 py-3 text-white transition hover:-translate-y-0.5 hover:bg-ocre-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Ver galería
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
