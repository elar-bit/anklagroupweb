"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function StickyDemoCta() {
  const { lang } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      const mobile = window.innerWidth < 768
      setVisible(mobile && window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-background/95 backdrop-blur border-t border-border shadow-lg">
      <Button
        asChild
        className="w-full bg-gold text-background hover:bg-gold-light h-12 text-base font-semibold"
      >
        <Link href="/#contacto">
          <Calendar className="h-5 w-5 mr-2" />
          {lang === "es" ? "Agendar Demo" : "Schedule Demo"}
        </Link>
      </Button>
    </div>
  )
}
