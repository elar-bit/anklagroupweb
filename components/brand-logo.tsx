"use client"

import Image from "next/image"
import Link from "next/link"

type BrandLogoProps = {
  href?: string | null
  size?: "sm" | "md" | "lg" // Añadimos tamaño lg por si acaso
  className?: string
}

export function BrandLogo({ href = "/", size = "md", className }: BrandLogoProps) {
  // Aumentamos los anchos y altos para que el logo destaque más
  const box =
    size === "sm"
      ? "h-12 w-[180px]" 
      : "h-16 w-[280px] sm:h-20 sm:w-[320px]" // Tamaño más imponente para escritorio

  const inner = (
    <span className={["relative block", box, className].filter(Boolean).join(" ")}>
      <Image
        src="/ankla-logo.png"
        alt="ANKLA Group"
        fill
        priority
        // "mix-blend-multiply" intenta hacer transparente el blanco (funciona en fondos claros)
        // "scale-110" lo agranda un poco más dentro del contenedor
        className="object-contain mix-blend-multiply transform scale-105" 
        sizes="(max-width: 768px) 200px, 350px"
      />
    </span>
  )

  return href ? (
    <Link href={href} aria-label="Ir al inicio" className="inline-flex items-center">
      {inner}
    </Link>
  ) : (
    inner
  )
}