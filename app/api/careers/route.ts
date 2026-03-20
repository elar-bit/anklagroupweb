import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CAREERS_TO_EMAIL = "info@anklagroupinc.com"
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL
  ? `ANKLA Web <${process.env.RESEND_FROM_EMAIL}>`
  : "ANKLA Web <onboarding@resend.dev>"

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

const MAX_BYTES = 4 * 1024 * 1024 // 4 MB (Vercel-friendly)

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function buildCareersHtml(fields: {
  lang: "es" | "en"
  name: string
  email: string
  phone: string
  roleLabel: string
  message: string
  fileName: string
}): string {
  const isEn = fields.lang === "en"
  const title = isEn ? "New résumé submission (Careers)" : "Nueva postulación (Carreras)"
  const intro = isEn ? "Applicant details:" : "Datos del postulante:"
  const labels = isEn
    ? {
        name: "Name",
        email: "Email",
        phone: "Phone",
        role: "Role",
        message: "Message",
        file: "Attached file",
        footer: "Sent from the Careers page on the website.",
      }
    : {
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        role: "Rol",
        message: "Mensaje",
        file: "Archivo adjunto",
        footer: "Enviado desde la página Carreras del sitio web.",
      }

  const rows: [string, string][] = [
    [labels.name, fields.name],
    [labels.email, fields.email],
    [labels.phone, fields.phone || "—"],
    [labels.role, fields.roleLabel],
    [labels.message, fields.message || "—"],
    [labels.file, fields.fileName],
  ]
  const body = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px 8px 0;vertical-align:top;color:#94a3b8;">${escapeHtml(k)}</td><td style="padding:8px 0;">${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("")

  return `
<!DOCTYPE html>
<html lang="${fields.lang}">
<head><meta charset="utf-8"></head>
<body style="font-family:system-ui,sans-serif;color:#e2e8f0;background:#0f172a;padding:24px;margin:0;">
  <div style="max-width:560px;margin:0 auto;">
    <h1 style="color:#fbbf24;font-size:1.25rem;margin-bottom:16px;">${escapeHtml(title)}</h1>
    <p style="color:#94a3b8;margin-bottom:20px;">${escapeHtml(intro)}</p>
    <table style="width:100%;border-collapse:collapse;">${body}</table>
    <p style="color:#64748b;font-size:0.875rem;margin-top:24px;">${escapeHtml(labels.footer)}</p>
  </div>
</body>
</html>
  `.trim()
}

export async function POST(request: Request) {
  if (!resend) {
    console.error("RESEND_API_KEY is not set")
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 })
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
  }

  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const roleLabel = String(formData.get("roleLabel") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const langRaw = String(formData.get("lang") ?? "en")
  const lang: "es" | "en" = langRaw === "es" ? "es" : "en"
  const file = formData.get("file")

  if (!name || !email || !roleLabel) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "PDF file required" }, { status: 400 })
  }

  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 })
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large (max 4 MB)" }, { status: 400 })
  }

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  // Basic PDF signature check
  const sig = buffer.subarray(0, 4).toString("utf8")
  if (sig !== "%PDF") {
    return NextResponse.json({ error: "Invalid PDF file" }, { status: 400 })
  }

  const safeName = file.name.replace(/[^\w.\-]/g, "_") || "cv.pdf"
  const subject =
    lang === "en"
      ? `ANKLA Careers — ${name} (${roleLabel})`
      : `ANKLA Carreras — ${name} (${roleLabel})`

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CAREERS_TO_EMAIL],
      replyTo: email,
      subject,
      html: buildCareersHtml({
        lang,
        name,
        email,
        phone,
        roleLabel,
        message,
        fileName: safeName,
      }),
      attachments: [
        {
          filename: safeName,
          content: buffer,
        },
      ],
    })

    if (error) {
      console.error("Resend careers error:", error)
      return NextResponse.json({ error: error.message }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Careers API error:", err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send email" },
      { status: 500 }
    )
  }
}
