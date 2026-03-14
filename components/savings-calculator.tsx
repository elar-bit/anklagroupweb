"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/components/language-provider"
import type { ServiceId } from "@/lib/services"

// Estimated monthly savings per employee (USD) for telephony vs AI/contact center
const SAVINGS_PER_EMPLOYEE_TELEPHONY = 55
const SAVINGS_PER_EMPLOYEE_AI = 75

const isTelephonyOrSimilar = (id: ServiceId) =>
  ["hosted-pbx", "lan", "support"].includes(id)

export function SavingsCalculator({ serviceId }: { serviceId: ServiceId }) {
  const { lang } = useLanguage()
  const [employees, setEmployees] = useState(25)
  const isEs = lang === "es"

  const useTelephony = isTelephonyOrSimilar(serviceId)
  const savingsPer = useTelephony ? SAVINGS_PER_EMPLOYEE_TELEPHONY : SAVINGS_PER_EMPLOYEE_AI
  const estimated = employees * savingsPer

  const label = isEs ? "Calculadora de ahorro" : "Savings calculator"
  const sublabel = isEs
    ? "Ajusta el número de empleados y revisa el ahorro mensual estimado."
    : "Adjust the number of employees and see estimated monthly savings."
  const employeesLabel = isEs ? "Empleados" : "Employees"
  const savingsLabel = isEs ? "Ahorro mensual estimado" : "Estimated monthly savings"

  return (
    <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
      <h3 className="text-lg font-semibold text-foreground mb-1">{label}</h3>
      <p className="text-sm text-gray-300 mb-6">{sublabel}</p>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">{employeesLabel}</span>
            <span className="font-medium text-foreground">{employees}</span>
          </div>
          <Slider
            value={[employees]}
            onValueChange={([v]) => setEmployees(v)}
            min={5}
            max={200}
            step={5}
            className="[&_[data-slot=slider-range]]:bg-gold"
          />
        </div>
        <div className="rounded-xl bg-gold/10 border border-gold/30 p-4 text-center">
          <p className="text-sm text-gray-300 mb-1">{savingsLabel}</p>
          <p className="text-2xl font-bold text-gold">
            ${estimated.toLocaleString()}
            <span className="text-base font-normal text-gray-300 ml-1">/mo</span>
          </p>
        </div>
      </div>
    </div>
  )
}
