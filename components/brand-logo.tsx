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
      ? "h-10 w-[170px]"
      : "h-12 w-[220px] sm:h-14 sm:w-[260px]"

  const inner = (
    <span className={["relative block overflow-hidden", box, className].filter(Boolean).join(" ")}>
      <Image
        src="/ankla-logo.png"
        alt="ANKLA Group"
        fill
        priority
        className="object-contain"
        sizes="260px"
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

