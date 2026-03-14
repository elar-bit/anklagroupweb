"use client"

import type { ServiceId } from "@/lib/services"
import type { PersuasionData } from "@/lib/service-persuasion"
import { PbxExtensionsCalculator } from "@/components/pbx-extensions-calculator"
import { LanNetworkBeforeAfter } from "@/components/lan-network-before-after"
import { SupportItHealthChecklist } from "@/components/support-it-health-checklist"
import { AiChatSimulator } from "@/components/ai-chat-simulator"
import { ServiceFaq } from "@/components/service-faq"

type Props = {
  serviceId: ServiceId
  data: PersuasionData
}

export function ServiceInteractive({ serviceId, data }: Props) {
  switch (data.interactiveType) {
    case "pbx-calculator":
      return (
        <PbxExtensionsCalculator
          useCaseTitle={data.useCaseTitle}
          useCaseBody={data.useCaseBody}
        />
      )
    case "lan-before-after":
      return <LanNetworkBeforeAfter />
    case "support-checklist":
      return <SupportItHealthChecklist />
    case "ai-chat":
      return <AiChatSimulator />
    case "faq":
    default:
      return (
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ServiceFaq serviceId={serviceId} />
          </div>
        </section>
      )
  }
}
