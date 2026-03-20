import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RedesPageContent } from "@/components/redes-page"

export default function RedesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <RedesPageContent />
      <Footer />
    </main>
  )
}
