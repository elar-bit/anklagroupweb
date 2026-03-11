import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const roles = [
  {
    title: "Ingeniería de Redes (LAN/Wi‑Fi)",
    location: "Remoto / Híbrido",
    bullets: ["Implementación y diagnóstico", "Documentación y estándares", "Soporte a despliegues"],
  },
  {
    title: "Soporte Técnico (N1/N2)",
    location: "Remoto",
    bullets: ["Gestión de tickets", "Monitoreo y respuesta", "Escalamiento y SOPs"],
  },
  {
    title: "Especialista Call Center (Inbound/Outbound)",
    location: "Remoto",
    bullets: ["Métricas y calidad", "Entrenamiento de scripts", "Mejora continua"],
  },
]

export default function CarrerasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-medium mb-3">Carreras</p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Únete a ANKLA Group Inc
            </h1>
            <p className="mt-4 text-muted-foreground text-pretty">
              Buscamos personas con mentalidad de servicio, obsesión por la calidad y ganas de construir soluciones
              modernas para empresas.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((r) => (
              <Card key={r.title} className="bg-card border-border p-6 rounded-2xl">
                <h2 className="text-lg font-semibold text-foreground">{r.title}</h2>
                <p className="text-sm text-gold mt-1">{r.location}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-card p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground">Postúlate</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Envíanos tu CV y cuéntanos qué rol te interesa. Responderemos con los siguientes pasos.
              </p>
            </div>
            <Button asChild className="bg-gold text-background hover:bg-gold-light">
              <Link href="/#contacto">Enviar CV</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

