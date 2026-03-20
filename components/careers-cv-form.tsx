"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"
import { getCareersCopy, getCareersRoles, type CareerRole } from "@/lib/careers-content"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function CareersCvForm() {
  const { lang } = useLanguage()
  const t = getCareersCopy(lang)
  const roles = getCareersRoles(lang)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [roleId, setRoleId] = useState<string>("")
  const [message, setMessage] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const roleLabel = (() => {
    if (!roleId) return ""
    if (roleId === "other") return t.formOther
    const r = roles.find((x: CareerRole) => x.id === roleId)
    return r?.title ?? ""
  })()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!name.trim() || !email.trim() || !roleId || !file) {
      setError(t.required)
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setError(t.invalidEmail)
      return
    }
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setError(t.invalidFile)
      return
    }
    if (file.size > 4 * 1024 * 1024) {
      setError(t.invalidFile)
      return
    }

    const fd = new FormData()
    fd.append("name", name.trim())
    fd.append("email", email.trim())
    fd.append("phone", phone.trim())
    fd.append("roleLabel", roleLabel)
    fd.append("message", message.trim())
    fd.append("lang", lang)
    fd.append("file", file)

    setLoading(true)
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: fd,
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError((data as { error?: string }).error || t.errorGeneric)
        return
      }
      setDone(true)
      setName("")
      setEmail("")
      setPhone("")
      setRoleId("")
      setMessage("")
      setFile(null)
    } catch {
      setError(t.errorGeneric)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
          <CheckCircle className="h-7 w-7 text-gold" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{t.successTitle}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t.successText}</p>
        <Button type="button" variant="outline" className="mt-6 border-border" onClick={() => setDone(false)}>
          {lang === "es" ? "Enviar otro CV" : "Submit another résumé"}
        </Button>
      </div>
    )
  }

  return (
    <form
      lang={lang}
      noValidate
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cv-name">{t.formName}</Label>
          <Input
            id="cv-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            aria-required="true"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cv-email">{t.formEmail}</Label>
          <Input
            id="cv-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            aria-required="true"
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cv-phone">{t.formPhone}</Label>
          <Input
            id="cv-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label>{t.formRole}</Label>
          <Select value={roleId} onValueChange={setRoleId}>
            <SelectTrigger className="w-full bg-background" aria-required="true">
              <SelectValue placeholder={t.formRolePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {roles.map((r) => (
                <SelectItem key={r.id} value={r.id}>
                  {r.title}
                </SelectItem>
              ))}
              <SelectItem value="other">{t.formOther}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cv-msg">{t.formMessage}</Label>
        <Textarea
          id="cv-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.formMessagePlaceholder}
          rows={3}
          className="bg-background resize-y min-h-[80px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cv-file-input">{t.formFile}</Label>
        <input
          ref={fileInputRef}
          id="cv-file-input"
          type="file"
          accept="application/pdf,.pdf"
          className="sr-only"
          tabIndex={-1}
          aria-label={`${t.formFile}. ${t.formFileHint}`}
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-fit border-border shrink-0"
            onClick={() => fileInputRef.current?.click()}
          >
            {t.formFileButton}
          </Button>
          <span className="text-sm text-muted-foreground truncate" title={file?.name}>
            {file ? file.name : t.formFileEmpty}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">{t.formFileHint}</p>
      </div>

      <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-gold text-background hover:bg-gold-light">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t.submitting}
          </>
        ) : (
          t.submit
        )}
      </Button>
    </form>
  )
}
