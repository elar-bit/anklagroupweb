import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CareersPageContent } from "@/components/careers-page"

export default function CarrerasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CareersPageContent />
      <Footer />
    </main>
  )
}
