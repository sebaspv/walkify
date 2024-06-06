import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function Principal() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <WaypointsIcon className="h-6 w-6" />
          <span className="sr-only">Walkify</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/exercise">
            Actividades
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/about">
            Acerca de
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1 px-4 md:px-6 py-12 md:py-24 lg:py-32 space-y-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ejercicios rápidos para tu día
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Realiza pequeños ejercicios durante el día y gana puntos.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <FootprintsIcon className="w-12 h-12" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-semibold">Caminar 15 min</h3>
                  <p className="text-gray-500 dark:text-gray-400">Gana 50 puntos</p>
                </div>
                <Button size="sm" variant="secondary">
                  Realizar
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <StretchVerticalIcon className="w-12 h-12" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-semibold">Estirar</h3>
                  <p className="text-gray-500 dark:text-gray-400">Gana 30 puntos</p>
                </div>
                <Button size="sm" variant="secondary">
                  Realizar
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <WaypointsIcon className="w-12 h-12" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-semibold">Caminar alrededor</h3>
                  <p className="text-gray-500 dark:text-gray-400">Gana 20 puntos</p>
                </div>
                <Button size="sm" variant="secondary">
                  Realizar
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <HopIcon className="w-12 h-12" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-semibold">Jumping jacks</h3>
                  <p className="text-gray-500 dark:text-gray-400">Gana 40 puntos</p>
                </div>
                <Button size="sm" variant="secondary">
                  Realizar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Tus puntos</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">Revisa cuántos puntos has ganado hasta ahora.</p>
          </div>
          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold">140 puntos</h3>
                <p className="text-gray-500 dark:text-gray-400">Puntos acumulados</p>
              </div>
              <Button variant="secondary">Ver historial</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Sebastian Ponce. Hecho con ❤️ en México.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function FootprintsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path
        d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>)
  );
}


function HopIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" />
      <path
        d="M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" />
      <path
        d="M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" />
      <path
        d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" />
      <path
        d="M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" />
      <path
        d="M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" />
      <path d="M4.93 4.93 3 3a.7.7 0 0 1 0-1" />
      <path
        d="M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" />
    </svg>)
  );
}


function StretchVerticalIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="6" height="20" x="4" y="2" rx="2" />
      <rect width="6" height="20" x="14" y="2" rx="2" />
    </svg>)
  );
}


function WaypointsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="m10.2 6.3-3.9 3.9" />
      <circle cx="4.5" cy="12" r="2.5" />
      <path d="M7 12h10" />
      <circle cx="19.5" cy="12" r="2.5" />
      <path d="m13.8 17.7 3.9-3.9" />
      <circle cx="12" cy="19.5" r="2.5" />
    </svg>)
  );
}
