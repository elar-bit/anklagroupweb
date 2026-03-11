import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const posts = [
  {
    slug: "telefonia-cloud-vs-tradicional",
    title: "Telefonía en la nube vs. central tradicional",
    excerpt:
      "Qué cambia en costos, escalabilidad, continuidad y analítica cuando migras a Hosted PBX.",
  },
  {
    slug: "vlan-segmentacion-empresa",
    title: "VLANs y segmentación: seguridad sin complicaciones",
    excerpt: "Buenas prácticas para separar invitados, IoT, voz y operación en una red LAN moderna.",
  },
  {
    slug: "ia-atencion-al-cliente",
    title: "IA en atención al cliente: de FAQ a agentes inteligentes",
    excerpt: "Cómo pasar de automatizaciones básicas a AI Agents con handoff y medición real.",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-medium mb-3">Blog</p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Ideas prácticas para mejorar comunicación y TI
            </h1>
            <p className="mt-4 text-muted-foreground text-pretty">
              Publicaciones pensadas para líderes de operaciones y TI: decisiones, benchmarks y guías accionables.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Card key={p.slug} className="bg-card border-border p-6 rounded-2xl">
                <h2 className="text-lg font-semibold text-foreground">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5">
                  <Button asChild variant="outline" className="border-border">
                    <Link href={`/blog/${p.slug}`}>Leer</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground">¿Quieres un tema específico?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Cuéntanos tu industria y publicamos una guía orientada a tu caso.
              </p>
            </div>
            <Button asChild className="bg-gold text-background hover:bg-gold-light">
              <Link href="/#contacto">Sugerir tema</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

