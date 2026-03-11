import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-gold font-medium mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Términos de Servicio
          </h1>
          <p className="mt-4 text-muted-foreground text-pretty">
            Estos términos describen de forma general el uso del sitio web y el contacto con ANKLA Group Inc. Para
            contratos de servicio, se emiten acuerdos y SLAs específicos por proyecto.
          </p>

          <div className="mt-10 space-y-8 rounded-2xl border border-border bg-card p-6">
            <section>
              <h2 className="font-semibold text-foreground">Uso del sitio</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Puedes navegar el contenido y contactarnos para solicitar información. No uses el sitio para actividades
                ilícitas, abuso, scraping malicioso o intentos de interferir con su operación.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-foreground">Contenido y propiedad</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                El contenido (texto, diseño y materiales) es propiedad de ANKLA Group Inc o de sus licenciantes, salvo
                donde se indique lo contrario. Las marcas y logotipos pertenecen a sus respectivos dueños.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-foreground">Limitación de responsabilidad</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                La información se ofrece “tal cual” y puede cambiar. Para decisiones críticas se recomienda una
                evaluación y propuesta formal, con alcance y condiciones definidas.
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-foreground">Servicios</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Los servicios se rigen por acuerdos específicos (alcance, SLAs, precios, confidencialidad). Si deseas una
                cotización, contáctanos.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

