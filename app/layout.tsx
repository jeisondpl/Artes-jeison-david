import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeison David Díaz – Pintor Artístico",
  description:
    "13 años de arte, pasión y enseñanza desde Santa Marta, Magdalena. Conoce la obra y servicios del pintor Jeison David Díaz.",
  openGraph: {
    title: "Jeison David Díaz – Pintor Artístico",
    description:
      "Conoce la historia, la obra y los servicios de Jeison David Díaz, pintor y profesor de arte de Santa Marta, Colombia.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-crema-50 text-ocre-900 antialiased">
        {children}
      </body>
    </html>
  );
}
