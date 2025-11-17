import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-crema-50 via-white to-crema-100">
      <Header />
      <main className="space-y-4">
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Destellos decorativos */}
      <div className="pointer-events-none fixed left-10 top-24 h-32 w-32 rounded-full bg-ocre-400/10 blur-3xl" />
      <div className="pointer-events-none fixed right-6 bottom-10 h-40 w-40 rounded-full bg-terracota-500/10 blur-3xl" />
    </div>
  );
}
