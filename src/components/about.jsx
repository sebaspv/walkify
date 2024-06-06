import Link from "next/link"

export function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <WaypointsIcon className="h-6 w-6" />
          <span className="sr-only">Walkify</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Acerca de
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1 px-4 md:px-6 py-12 md:py-24 lg:py-32 space-y-12">
        <div id="about" className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Acerca de Walkify</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Descubre más sobre nuestra aplicación y cómo puede ayudarte a mantenerte activo.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Nuestra Misión</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nuestra misión es inspirar y empoderar a las personas a adoptar un estilo de vida más saludable a través
                de pequeños ejercicios diarios. Creemos que la actividad física regular puede tener un impacto positivo
                en la salud física y mental.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Cómo Funciona</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Walkify te ofrece una variedad de ejercicios rápidos y sencillos que puedes realizar en cualquier
                momento del día. Cada ejercicio te otorga puntos que puedes acumular y canjear por recompensas. Nuestra
                aplicación te motiva a mantenerte activo de una manera divertida y accesible.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Walkify. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Términos de servicio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function WaypointsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="m10.2 6.3-3.9 3.9" />
      <circle cx="4.5" cy="12" r="2.5" />
      <path d="M7 12h10" />
      <circle cx="19.5" cy="12" r="2.5" />
      <path d="m13.8 17.7 3.9-3.9" />
      <circle cx="12" cy="19.5" r="2.5" />
    </svg>
  )
}