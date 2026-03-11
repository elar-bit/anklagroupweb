"use client"

import Image from "next/image"
import Link from "next/link"

type BrandLogoProps = {
  href?: string | null
  size?: "sm" | "md"
  className?: string
}

export function BrandLogo({ href = "/", size = "md", className }: BrandLogoProps) {
  const box =
    size === "sm"
      ? "h-12 w-[180px]"
      : "h-16 w-[240px] sm:h-20 sm:w-[300px]"

  const inner = (
    <span className={["relative block overflow-hidden", box, className].filter(Boolean).join(" ")}>
      <Image
        src="/ankla-logo-full.png"
        alt="ANKLA Group Inc."
        fill
        priority
        className="object-contain [clip-path:inset(0_0_34%_0)]"
        sizes="300px"
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

