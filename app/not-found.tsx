import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-gold font-medium">404</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Página no encontrada
          </h1>
          <p className="mt-4 text-muted-foreground">
            El enlace puede haber cambiado. Vuelve al inicio o explora nuestros servicios.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-gold text-background hover:bg-gold-light">
              <Link href="/">Ir al inicio</Link>
            </Button>
            <Button asChild variant="outline" className="border-border">
              <Link href="/servicios">Ver servicios</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

