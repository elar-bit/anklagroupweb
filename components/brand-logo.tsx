"use client"

import Image from "next/image"
import Link from "next/link"

// Centralized logo paths — switch to .svg here when you have vector assets for sharper scaling
const LOGO_SRC = {
  default: "/ankla-logo.png",
  scroll: "/ankla-logo-scroll.png",
} as const

type BrandLogoProps = {
  href?: string | null
  size?: "sm" | "md" | "lg"
  variant?: "default" | "scroll"
  /** Use "center" for hero/header centered logo so it doesn't shift visually */
  align?: "left" | "center"
  className?: string
}

export function BrandLogo({
  href = "/",
  size = "md",
  variant = "default",
  align = "left",
  className = "",
}: BrandLogoProps) {
  const isScroll = variant === "scroll"
  const src = isScroll ? LOGO_SRC.scroll : LOGO_SRC.default

  // Main logo (default) sized for legibility; scroll variant slightly larger on mobile for visibility
  const box =
    size === "sm"
      ? "h-8 w-[120px]"
      : size === "md"
        ? isScroll
          ? "h-11 w-[180px] sm:h-10 sm:w-[160px]"
          : "h-24 w-[400px] sm:h-28 sm:w-[470px]"
        : "h-36 w-[560px] sm:h-44 sm:w-[640px]"

  const objectPosition = align === "center" ? "object-center" : "object-left"

  const inner = (
    <span
      className={["relative block", box, className].filter(Boolean).join(" ")}
    >
      <Image
        src={src}
        alt="ANKLA Group"
        fill
        priority={!isScroll}
        className={`object-contain ${objectPosition}`}
        sizes="(max-width: 768px) 470px, 640px"
      />
    </span>
  )

  return href ? (
    <Link href={href} aria-label="Go to home" className="inline-flex items-center">
      {inner}
    </Link>
  ) : (
    inner
  )
}