import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LegalPrivacyPage } from "@/components/legal-privacy-page"

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LegalPrivacyPage />
      <Footer />
    </main>
  )
}
