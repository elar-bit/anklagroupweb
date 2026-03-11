"use client"

import Image from "next/image"
import Link from "next/link"

type BrandLogoProps = {
  href?: string | null
  size?: "sm" | "md" | "lg"
  variant?: "default" | "scroll"
  className?: string
}

export function BrandLogo({ href = "/", size = "md", variant = "default", className }: BrandLogoProps) {
  const isScroll = variant === "scroll"
  const box =
    size === "sm"
      ? "h-8 w-[120px]"
      : size === "md"
        ? isScroll
          ? "h-10 w-[160px]"
          : "h-16 w-[280px] sm:h-20 sm:w-[320px]"
        : "h-20 w-[320px]"

  const src = isScroll ? "/ankla-logo-scroll.png" : "/ankla-logo.png"

  const inner = (
    <span className={["relative block", box, className].filter(Boolean).join(" ")}>
      <Image
        src={src}
        alt="ANKLA Group"
        fill
        priority={!isScroll}
        className="object-contain object-left"
        sizes="(max-width: 768px) 200px, 320px"
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