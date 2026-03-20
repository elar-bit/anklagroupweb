import { NextResponse } from "next/server"
import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY
/** Cada envío del formulario llega a estos correos (para confirmar entrega y copia interna). */
const TO_EMAILS = ["contactus@anklagroupinc.com", "ebarrios@dna.as"] as const
// Remitente: si verificas tu dominio en Resend, define RESEND_FROM_EMAIL=contactus@anklagroupinc.com en Vercel
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL
  ? `ANKLA Web <${process.env.RESEND_FROM_EMAIL}>`
  : "ANKLA Web <onboarding@resend.dev>"

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

export type ContactPayload = {
  challenge?: string
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

function buildEmailHtml(payload: ContactPayload): string {
  const rows = [
    ["Nombre / Name", payload.name],
    ["Email", payload.email],
    ["Empresa / Company", payload.company || "—"],
    ["Reto principal / Main challenge", payload.challenge || "—"],
    ["Servicio de interés / Service", payload.service || "—"],
    ["Mensaje / Message", payload.message],
  ]
  const body = rows
    .map(([label, value]) => `<tr><td style="padding:8px 12px 8px 0;vertical-align:top;color:#94a3b8;">${label}</td><td style="padding:8px 0;">${String(value).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:system-ui,sans-serif;color:#e2e8f0;background:#0f172a;padding:24px;margin:0;">
  <div style="max-width:560px;margin:0 auto;">
    <h1 style="color:#fbbf24;font-size:1.25rem;margin-bottom:16px;">Nueva solicitud desde ANKLA Web</h1>
    <p style="color:#94a3b8;margin-bottom:20px;">Datos del formulario de contacto:</p>
    <table style="width:100%;border-collapse:collapse;">
      ${body}
    </table>
    <p style="color:#64748b;font-size:0.875rem;margin-top:24px;">Enviado desde el formulario de contacto del sitio web.</p>
  </div>
</body>
</html>
  `.trim()
}

export async function POST(request: Request) {
  if (!resend) {
    console.error("RESEND_API_KEY is not set")
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    )
  }

  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const { name, email, message } = payload
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 }
    )
  }

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [...TO_EMAILS],
      replyTo: email.trim(),
      subject: `Contacto ANKLA: ${name.trim()}`,
      html: buildEmailHtml(payload),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send email" },
      { status: 500 }
    )
  }
}
