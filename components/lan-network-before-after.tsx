"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"
import { WifiOff, Network, Shield } from "lucide-react"

export function LanNetworkBeforeAfter() {
  const { lang } = useLanguage()
  const isEs = lang === "es"
  const beforeTitle = isEs ? "Antes" : "Before"
  const afterTitle = isEs ? "Después con ANKLA" : "After with ANKLA"
  const beforeSub = isEs ? "Red caótica, sin segmentación" : "Chaotic network, no segmentation"
  const afterSub = isEs ? "Red segmentada (VLANs), segura y estable" : "Segmented network (VLANs), secure and stable"
  const benefit =
    isEs
      ? "Tu red no es un gasto, es la autopista por donde viaja tu dinero. Si la red cae, tu empresa se detiene."
      : "Your network isn't an expense—it's the highway your money travels on. When the network goes down, your business stops."

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {isEs ? "Antes vs. Después" : "Before vs. After"}
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">{benefit}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 lg:p-8">
              <p className="text-sm font-semibold text-red-400 uppercase tracking-wide">
                {beforeTitle}
              </p>
              <p className="mt-1 text-gray-300 text-sm mb-6">{beforeSub}</p>
              <div className="flex flex-wrap gap-3 justify-center py-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-lg bg-gray-600/50 flex items-center justify-center"
                    title="Dispositivo sin segmentar"
                  >
                    <WifiOff className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
                <div className="w-full border-t border-gray-600/50 my-2" />
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="text-xs text-gray-500">PC</span>
                  <span className="text-xs text-gray-500">VoIP</span>
                  <span className="text-xs text-gray-500">Cámaras</span>
                  <span className="text-xs text-gray-500">Invitados</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Todo en la misma red</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 lg:p-8">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
                {afterTitle}
              </p>
              <p className="mt-1 text-gray-300 text-sm mb-6">{afterSub}</p>
              <div className="flex flex-wrap gap-4 justify-center py-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Network className="h-6 w-6 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-400">VLAN Oficina</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Network className="h-6 w-6 text-amber-400" />
                  </div>
                  <span className="text-xs text-gray-400">VLAN Voz</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Network className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-xs text-gray-400">VLAN Cámaras</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-gray-500/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-400">Invitados</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
