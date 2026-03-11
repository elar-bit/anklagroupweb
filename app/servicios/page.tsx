import Link from "next/link"
import { services } from "@/lib/services"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-medium mb-3">Servicios</p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Soluciones a la medida para comunicación, TI e IA
            </h1>
            <p className="mt-4 text-muted-foreground text-pretty">
              Explora cada servicio para ver alcance, entregables y resultados típicos. Si necesitas una propuesta
              específica, contáctanos y lo aterrizamos en minutos.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.id}
                  href={`/servicios/${service.id}`}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{service.title}</h2>
                  <p className="text-sm text-gold mt-1">{service.subtitle}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                  <div className="mt-5">
                    <Button variant="outline" className="border-border group-hover:border-gold/50">
                      Ver detalles
                    </Button>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

