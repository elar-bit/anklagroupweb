import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyCompaniesLose } from "@/components/why-companies-lose"
import { ProcessSteps } from "@/components/process-steps"
import { IndustriesWeServe } from "@/components/industries-we-serve"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyCompaniesLose />
      <ProcessSteps />
      <IndustriesWeServe />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
