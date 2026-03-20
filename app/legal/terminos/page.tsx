import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LegalTermsPage } from "@/components/legal-terms-page"

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LegalTermsPage />
      <Footer />
    </main>
  )
}
