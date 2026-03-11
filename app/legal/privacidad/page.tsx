import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-gold font-medium mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Política de Privacidad
          </h1>
          <p className="mt-4 text-muted-foreground text-pretty">
            Esta página describe, de forma general, cómo se recopila y utiliza información al contactar a ANKLA Group
            Inc. Si necesitas un documento legal formal para tu jurisdicción, lo personalizamos.
          </p>

          <div className="mt-10 space-y-8 rounded-2xl border border-border bg-card p-6">
            <section>
              <h2 className="font-semibold text-foreground">Información que recopilamos</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>- Datos de contacto (nombre, email, teléfono) cuando envías formularios.</li>
                <li>- Información de empresa y requerimientos para preparar propuestas.</li>
                <li>- Métricas anónimas de uso del sitio para mejorar rendimiento y contenido.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-semibold text-foreground">Cómo la usamos</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>- Responder solicitudes, cotizaciones y soporte.</li>
                <li>- Mejorar nuestros servicios, procesos y experiencia digital.</li>
                <li>- Cumplir obligaciones de seguridad y continuidad.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-semibold text-foreground">Retención y seguridad</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Conservamos la información por el tiempo necesario para los fines descritos y aplicamos medidas
                razonables de seguridad (acceso restringido, respaldo, y prácticas de minimización).
              </p>
            </section>
            <section>
              <h2 className="font-semibold text-foreground">Contacto</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Para preguntas sobre privacidad o solicitudes de acceso/eliminación, contáctanos desde la sección de
                contacto.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

