import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RedesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-medium mb-3">Comunidad</p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Redes y recursos
            </h1>
            <p className="mt-4 text-muted-foreground text-pretty">
              Estamos preparando nuestros canales oficiales. Mientras tanto, puedes contactarnos y te compartimos el
              canal ideal según tu necesidad (ventas, soporte o alianzas).
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-foreground">Ventas</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Cotizaciones, demos y diseño de soluciones para tu empresa.
              </p>
              <div className="mt-5">
                <Button asChild className="bg-gold text-background hover:bg-gold-light">
                  <Link href="/#contacto">Solicitar demo</Link>
                </Button>
              </div>
            </Card>
            <Card className="bg-card border-border p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-foreground">Soporte</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Atención a incidentes, monitoreo y acompañamiento.
              </p>
              <div className="mt-5">
                <Button asChild variant="outline" className="border-border">
                  <Link href="/#contacto">Abrir ticket</Link>
                </Button>
              </div>
            </Card>
            <Card className="bg-card border-border p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-foreground">Alianzas</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Partners, integraciones y proyectos conjuntos.
              </p>
              <div className="mt-5">
                <Button asChild variant="outline" className="border-border">
                  <Link href="/#contacto">Escribirnos</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

