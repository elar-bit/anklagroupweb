import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiciosIndexPage } from "@/components/servicios-index-page"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiciosIndexPage />
      <Footer />
    </main>
  )
}
