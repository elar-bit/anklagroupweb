"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Lang = "es" | "en"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/** Sincroniza `<html lang>` con el idioma de la app (mejora validación del navegador y lectores de pantalla). */
function DocumentHtmlLang() {
  const { lang } = useLanguage()
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "es" ? "es" : "en"
    }
  }, [lang])
  return null
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem("ankla-lang") as Lang | null
    if (stored === "es" || stored === "en") {
      setLangState(stored)
      return
    }
    setLangState("en")
  }, [])

  const setLang = (value: Lang) => {
    setLangState(value)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("ankla-lang", value)
    }
  }

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return (
    <LanguageContext.Provider value={value}>
      <DocumentHtmlLang />
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

