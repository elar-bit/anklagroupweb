"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const BOT_REPLIES_ES = [
  "¡Hola! Soy el asistente virtual de ANKLA. ¿En qué puedo ayudarte hoy?",
  "Claro. Para rastrear tu pedido necesito el número de orden o tu correo. ¿Cuál tienes a mano?",
  "Perfecto. Tu pedido #{{num}} está en camino y llegará en 2-3 días hábiles. ¿Algo más?",
]
const BOT_REPLIES_EN = [
  "Hi! I'm ANKLA's virtual assistant. How can I help you today?",
  "Sure. To track your order I need the order number or your email. Which do you have?",
  "Your order #{{num}} is on the way and will arrive in 2-3 business days. Anything else?",
]

const USER_PROMPTS_ES = ["¿Dónde está mi pedido?", "Tengo el número #4521"]
const USER_PROMPTS_EN = ["Where is my order?", "I have number #4521"]

/** Detecta si el texto del usuario es mayormente en español para responder en el mismo idioma */
function detectSpanish(text: string): boolean {
  const t = text.trim().toLowerCase()
  if (!t) return false
  const spanishChars = /[áéíóúñü¿¡]/u
  const spanishWords = /\b(hola|donde|dónde|está|mi|pedido|tengo|el|la|los|las|un|una|qué|que|cómo|como|gracias|por favor|ayuda|número|numero)\b/i
  if (spanishChars.test(t)) return true
  if (spanishWords.test(t)) return true
  const wordCount = t.split(/\s+/).length
  const commonEn = (t.match(/\b(where|my|order|have|the|what|how|thanks|please|help|number)\b/gi) || []).length
  return commonEn / Math.max(wordCount, 1) < 0.5
}

export function AiChatSimulator() {
  const { lang } = useLanguage()
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([])
  const [conversationLang, setConversationLang] = useState<"es" | "en" | null>(null)
  const [input, setInput] = useState("")
  const [step, setStep] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const isEs = (conversationLang ?? lang) === "es"

  const botReplies = isEs ? BOT_REPLIES_ES : BOT_REPLIES_EN
  const userPrompts = isEs ? USER_PROMPTS_ES : USER_PROMPTS_EN

  const suggestedPrompt = step < userPrompts.length ? userPrompts[step] : null

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const trimmed = text.trim()
    setMessages((prev) => [...prev, { role: "user", text: trimmed }])
    setInput("")
    if (conversationLang === null) {
      setConversationLang(detectSpanish(trimmed) ? "es" : "en")
    }
    const replyLang = conversationLang ?? (detectSpanish(trimmed) ? "es" : "en")
    const replies = replyLang === "es" ? BOT_REPLIES_ES : BOT_REPLIES_EN
    const reply = replies[Math.min(step + 1, replies.length - 1)].replace(
      "{{num}}",
      trimmed.includes("#") ? trimmed.replace(/\D/g, "").slice(0, 4) || "4521" : "4521"
    )
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }])
      setStep((s) => Math.min(s + 1, userPrompts.length))
    }, 600)
  }

  // Solo hacer scroll al fondo del chat cuando hay mensajes nuevos (no al cargar la página)
  useEffect(() => {
    if (messages.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const benefit =
    isEs
      ? "Un agente que nunca duerme, nunca se cansa y habla todos los idiomas. Atiende al 100% de tus prospectos al instante."
      : "An agent that never sleeps, never gets tired and speaks every language. Serves 100% of your prospects instantly."

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {isEs ? "Prueba un ejemplo" : "Try a demo"}
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">{benefit}</p>
        </ScrollReveal>
        <ScrollReveal className="max-w-md mx-auto">
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
            <div className="bg-gold/10 border-b border-border px-4 py-3 flex items-center gap-2">
              <Bot className="h-5 w-5 text-gold" />
              <span className="font-medium text-foreground">
                {isEs ? "Asistente ANKLA (demo)" : "ANKLA Assistant (demo)"}
              </span>
            </div>
            <div className="h-72 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  {isEs ? "Escribe un mensaje o usa la sugerencia." : "Type a message or use the suggestion."}
                </p>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-2",
                    m.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {m.role === "bot" && (
                    <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-gold" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "rounded-xl px-3 py-2 max-w-[85%] text-sm",
                      m.role === "user"
                        ? "bg-gold/20 text-foreground"
                        : "bg-card border border-border text-gray-200"
                    )}
                  >
                    {m.text}
                  </div>
                  {m.role === "user" && (
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder={isEs ? "Escribe aquí..." : "Type here..."}
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                className="rounded-lg bg-gold text-background p-2 hover:bg-gold-light transition-colors"
                aria-label={isEs ? "Enviar" : "Send"}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {suggestedPrompt && (
              <div className="px-3 pb-3">
                <button
                  type="button"
                  onClick={() => sendMessage(suggestedPrompt)}
                  className="text-xs text-gold hover:underline"
                >
                  {isEs ? "Sugerencia:" : "Suggestion:"} “{suggestedPrompt}”
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
