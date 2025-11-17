export default function Footer() {
  return (
    <footer className="bg-ocre-900 text-crema-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-xl">Jeison David Díaz</p>
          <p className="text-sm text-crema-200/80">
            Pintor artístico de Santa Marta, Magdalena.
          </p>
        </div>
        <p className="text-sm text-crema-200/80">
          © {new Date().getFullYear()} Arte y enseñanza. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
