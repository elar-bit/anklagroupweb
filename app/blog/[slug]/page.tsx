import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const posts: Record<
  string,
  { title: string; summary: string; bullets: string[]; conclusion: string }
> = {
  "telefonia-cloud-vs-tradicional": {
    title: "Telefonía en la nube vs. central tradicional",
    summary:
      "La diferencia clave no es solo “dónde vive” la PBX: es la velocidad para escalar, medir y asegurar continuidad operativa.",
    bullets: [
      "Costos: pasa de CAPEX (hardware) a OPEX controlado y predecible.",
      "Escalabilidad: agrega extensiones/colas/IVR en minutos, sin visitas técnicas.",
      "Continuidad: redirecciones y softphones reducen impacto ante contingencias.",
      "Analítica: reportes por colas, agentes, horas pico y motivos de contacto.",
    ],
    conclusion:
      "Si tu equipo crece, atiendes múltiples sedes o necesitas reportes para optimizar, Hosted PBX suele ser el siguiente paso natural.",
  },
  "vlan-segmentacion-empresa": {
    title: "VLANs y segmentación: seguridad sin complicaciones",
    summary:
      "Segmentar no es solo “para grandes”: es una forma directa de reducir riesgos y mejorar performance.",
    bullets: [
      "Separa invitados, IoT/cámaras, voz IP y operación para limitar movimientos laterales.",
      "Prioriza voz con QoS y reduce jitter en llamadas.",
      "Simplifica troubleshooting y mantenimiento por segmentos.",
      "Agrega controles por SSID y políticas de acceso por rol/dispositivo.",
    ],
    conclusion:
      "Una LAN bien segmentada es el cimiento para crecer sin que la red se convierta en cuello de botella.",
  },
  "ia-atencion-al-cliente": {
    title: "IA en atención al cliente: de FAQ a agentes inteligentes",
    summary:
      "Los AI Agents modernos no solo responden: califican, ejecutan pasos y transfieren con contexto.",
    bullets: [
      "Empieza por casos repetitivos (status, horarios, onboarding, FAQs).",
      "Define handoff: cuándo pasa a humano y qué información debe llevar.",
      "Integra con CRM/Helpdesk para leer y escribir datos de forma segura.",
      "Mide: tasa de resolución, ahorro de tiempo, CSAT y motivos de escalamiento.",
    ],
    conclusion:
      "La IA funciona mejor cuando se diseña con objetivos claros, datos mínimos necesarios y métricas desde el día 1.",
  },
}

type PageProps = {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-gold font-medium mb-3">Artículo</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-muted-foreground text-pretty">{post.summary}</p>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">Puntos clave</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {post.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">Conclusión</h2>
            <p className="mt-3 text-sm text-muted-foreground">{post.conclusion}</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-gold text-background hover:bg-gold-light">
              <Link href="/#contacto">Hablar con ANKLA</Link>
            </Button>
            <Button asChild variant="outline" className="border-border">
              <Link href="/blog">Volver al blog</Link>
            </Button>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}

