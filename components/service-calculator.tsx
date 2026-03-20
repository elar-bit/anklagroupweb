"use client"

import { useState, useEffect, useRef } from "react"
import { motion, animate } from "framer-motion"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import type { ServiceId } from "@/lib/services"
import { cn } from "@/lib/utils"

// ——— Config per service: input range, formula, and result formatting ———
const COST_PER_EXTENSION_MONTH = 65 // USD traditional PBX cost per extension
const LAN_EMPLOYEES_AFFECTED = 25
const LAN_HOURLY_COST = 32 // USD avg cost per employee per hour of downtime
const MIN_PER_TICKET = 45
const INBOUND_TICKET_AVG = 100 // USD
const INBOUND_RECOVERY_RATE = 0.15
const HUMAN_COST_PER_HOUR = 18 // USD for AI Agents savings
const NIGHT_WEEKEND_HOURS_AUTOMATED = 16
const OMNICHANNEL_DAYS_PER_MONTH = 30
const OMNICHANNEL_CONVERSION_RATE = 0.12

type CalculatorConfig = {
  sliderLabel: string
  sliderMin: number
  sliderMax: number
  step: number
  unit: string
  compute: (value: number) => number
  formatResult: (value: number) => string
  resultLabel: string
}

const config: Record<ServiceId, { es: CalculatorConfig; en: CalculatorConfig }> = {
  "hosted-pbx": {
    es: {
      sliderLabel: "Número de extensiones actuales",
      sliderMin: 5,
      sliderMax: 150,
      step: 5,
      unit: "",
      compute: (v) => (v * COST_PER_EXTENSION_MONTH) * 0.6,
      formatResult: (v) => `$${Math.round(v).toLocaleString()}`,
      resultLabel: "Ahorro mensual estimado (60%)",
    },
    en: {
      sliderLabel: "Current number of extensions",
      sliderMin: 5,
      sliderMax: 150,
      step: 5,
      unit: "",
      compute: (v) => (v * COST_PER_EXTENSION_MONTH) * 0.6,
      formatResult: (v) => `$${Math.round(v).toLocaleString()}`,
      resultLabel: "Estimated monthly savings (60%)",
    },
  },
  lan: {
    es: {
      sliderLabel: "Horas de inactividad de red al mes",
      sliderMin: 1,
      sliderMax: 40,
      step: 1,
      unit: "h",
      compute: (v) => v * LAN_HOURLY_COST * LAN_EMPLOYEES_AFFECTED,
      formatResult: (v) => `$${Math.round(v).toLocaleString()}`,
      resultLabel: "Pérdida evitada al mes (dinero rescatado)",
    },
    en: {
      sliderLabel: "Hours of network downtime per month",
      sliderMin: 1,
      sliderMax: 40,
      step: 1,
      unit: "h",
      compute: (v) => v * LAN_HOURLY_COST * LAN_EMPLOYEES_AFFECTED,
      formatResult: (v) => `$${Math.round(v).toLocaleString()}`,
      resultLabel: "Loss avoided per month (money saved)",
    },
  },
  support: {
    es: {
      sliderLabel: "Tickets o fallos al mes",
      sliderMin: 5,
      sliderMax: 100,
      step: 5,
      unit: "",
      compute: (v) => (v * MIN_PER_TICKET) / 60,
      formatResult: (v) => `${v.toFixed(1)} h`,
      resultLabel: "Horas recuperadas para el negocio",
    },
    en: {
      sliderLabel: "Tickets or failures per month",
      sliderMin: 5,
      sliderMax: 100,
      step: 5,
      unit: "",
      compute: (v) => (v * MIN_PER_TICKET) / 60,
      formatResult: (v) => `${v.toFixed(1)} h`,
      resultLabel: "Hours recovered for the business",
    },
  },
  inbound: {
    es: {
      sliderLabel: "Llamadas perdidas al mes",
      sliderMin: 10,
      sliderMax: 500,
      step: 10,
      unit: "",
      compute: (v) => v * INBOUND_TICKET_AVG * INBOUND_RECOVERY_RATE,
      formatResult: (v) => `$${Math.round(v).toLocaleString()}`,
      resultLabel: "Ventas recuperadas estimadas al mes",
    },
    en: {
      sliderLabel: "Lost calls per month",
      sliderMin: 10,
      sliderMax: 500,
      step: 10,
      unit: "",
      compute: (v) => v * INBOUND_TICKET_AVG * INBOUND_RECOVERY_RATE,
      formatResult: (v) => `$${Math.round(v).toLocaleString()}`,
      resultLabel: "Estimated recovered sales per month",
    },
  },
  outbound: {
    es: {
      sliderLabel: "Leads actuales al mes",
      sliderMin: 100,
      sliderMax: 5000,
      step: 100,
      unit: "",
      compute: (v) => v * 3,
      formatResult: (v) => Math.round(v).toLocaleString(),
      resultLabel: "Contactos efectivos con marcador predictivo (3x más)",
    },
    en: {
      sliderLabel: "Current leads per month",
      sliderMin: 100,
      sliderMax: 5000,
      step: 100,
      unit: "",
      compute: (v) => v * 3,
      formatResult: (v) => Math.round(v).toLocaleString(),
      resultLabel: "Effective contacts with predictive dialer (3x more)",
    },
  },
  "ai-agents": {
    es: {
      sliderLabel: "Volumen de chats al mes",
      sliderMin: 100,
      sliderMax: 5000,
      step: 100,
      unit: "",
      compute: (v) => (v * 5) / 60, // 5 min per chat avg → hours automated
      formatResult: (v) => `${Math.round(v)} h`,
      resultLabel: "Horas de trabajo humano automatizadas",
    },
    en: {
      sliderLabel: "Chat volume per month",
      sliderMin: 100,
      sliderMax: 5000,
      step: 100,
      unit: "",
      compute: (v) => (v * 5) / 60,
      formatResult: (v) => `${Math.round(v)} h`,
      resultLabel: "Hours of human work automated",
    },
  },
  omnichannel: {
    es: {
      sliderLabel: "Mensajes sin responder por día",
      sliderMin: 5,
      sliderMax: 200,
      step: 5,
      unit: "",
      compute: (v) => v * OMNICHANNEL_DAYS_PER_MONTH * OMNICHANNEL_CONVERSION_RATE,
      formatResult: (v) => `${Math.round(v)}`,
      resultLabel: "Conversiones recuperadas al mes (retención)",
    },
    en: {
      sliderLabel: "Unanswered messages per day",
      sliderMin: 5,
      sliderMax: 200,
      step: 5,
      unit: "",
      compute: (v) => v * OMNICHANNEL_DAYS_PER_MONTH * OMNICHANNEL_CONVERSION_RATE,
      formatResult: (v) => `${Math.round(v)}`,
      resultLabel: "Recovered conversions per month (retention)",
    },
  },
}

function AnimatedNumber({
  value,
  format,
  className,
}: {
  value: number
  format: (v: number) => string
  className?: string
}) {
  const [display, setDisplay] = useState(value)
  const prevRef = useRef(value)

  useEffect(() => {
    const from = prevRef.current
    prevRef.current = value
    const controls = animate(from, value, {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [value])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      {format(display)}
    </motion.span>
  )
}

type Props = {
  serviceId: ServiceId
  className?: string
}

export function ServiceCalculator({ serviceId, className }: Props) {
  const { lang } = useLanguage()
  const isEs = lang === "es"
  const cfg = config[serviceId]?.[lang] ?? config["hosted-pbx"][lang]

  const [inputValue, setInputValue] = useState(
    Math.round((cfg.sliderMin + cfg.sliderMax) / 2 / cfg.step) * cfg.step
  )
  const result = cfg.compute(inputValue)

  const ctaText = isEs ? "Obtener mi análisis detallado gratis" : "Get my free detailed analysis"

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-gradient-to-b from-card to-background p-6 lg:p-8 shadow-xl",
        "bg-[linear-gradient(to_right,rgba(253,224,71,0.06)_0%,transparent_50%,rgba(253,224,71,0.04)_100%)]",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {isEs ? "Calculadora de impacto financiero" : "Financial impact calculator"}
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        {isEs
          ? "Ajuste el indicador y vea el beneficio estimado para su negocio."
          : "Adjust the slider and see the estimated benefit for your business."}
      </p>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">{cfg.sliderLabel}</span>
            <span className="font-medium text-foreground tabular-nums">
              {inputValue}
              {cfg.unit}
            </span>
          </div>
          <Slider
            value={[inputValue]}
            onValueChange={([v]) => setInputValue(v)}
            min={cfg.sliderMin}
            max={cfg.sliderMax}
            step={cfg.step}
            className="[&_[data-slot=slider-range]]:bg-gold [&_[data-slot=slider-track]]:bg-white/10"
          />
        </div>

        <div className="rounded-xl bg-gold/10 border border-gold/20 p-5 text-center min-h-[80px] flex flex-col justify-center">
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
            {cfg.resultLabel}
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gold tabular-nums">
            <AnimatedNumber value={result} format={cfg.formatResult} />
          </p>
        </div>

        <Button asChild className="w-full bg-gold text-background hover:bg-gold-light font-medium">
          <Link href="/#contacto">{ctaText}</Link>
        </Button>
      </div>
    </div>
  )
}
