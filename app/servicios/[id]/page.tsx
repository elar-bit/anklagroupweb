import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getServiceById } from "@/lib/services"

type PageProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = params
  const service = getServiceById(id)
  if (!service) return {}
  return {
    title: `${service.title} | ANKLA Group Inc`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = params
  const service = getServiceById(id)
  if (!service) notFound()

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(255_255_255_/_0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(255_255_255_/_0.03)_1px,_transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
              <Icon className="h-4 w-4" />
              <span>{service.subtitle}</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">{service.description}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light">
                <Link href="/#contacto">Solicitar asesoría</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border">
                <Link href="/servicios">Ver todos los servicios</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 rounded-2xl">
              <h2 className="font-semibold text-foreground">Qué incluye</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="bg-card border-border p-6 rounded-2xl lg:col-span-2">
              <h2 className="font-semibold text-foreground">Resultados típicos</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.outcomes.map((o) => (
                  <div
                    key={o}
                    className="rounded-xl border border-border bg-background/40 p-4 hover:border-gold/40 transition-colors"
                  >
                    <p className="text-sm text-muted-foreground">{o}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold font-medium mb-3">Implementación</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Un proceso simple, medible y sin fricción
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Diseñamos la solución, la implementamos y la dejamos operativa con documentación y acompañamiento.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  text: "Entendemos tu operación, objetivos y restricciones.",
                },
                {
                  step: "02",
                  title: "Diseño",
                  text: "Arquitectura, alcance y plan de entrega por hitos.",
                },
                {
                  step: "03",
                  title: "Implementación",
                  text: "Configuración, pruebas y puesta en marcha controlada.",
                },
                {
                  step: "04",
                  title: "Soporte",
                  text: "Monitoreo, mejoras continuas y escalamiento.",
                },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl border border-border bg-background/40 p-5">
                  <div className="text-gold font-semibold">{s.step}</div>
                  <div className="mt-2 font-semibold text-foreground">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
                ¿Listo para empezar?
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl text-pretty">
                Cuéntanos tu caso y te recomendamos el mejor camino: alcance, tiempos y una propuesta clara.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light">
                  <Link href="/#contacto">Hablar con un especialista</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <Link href="/servicios">Explorar más servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

