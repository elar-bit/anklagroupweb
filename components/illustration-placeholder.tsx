"use client"

type IllustrationPlaceholderProps = {
  variant?: "hero" | "telephony" | "lan" | "support" | "ai"
  className?: string
}

const gold = "#C5A059"
const dark = "oklch(0.25 0.01 250)"
const muted = "oklch(0.5 0 0)"

export function IllustrationPlaceholder({ variant = "hero", className = "" }: IllustrationPlaceholderProps) {
  const baseClass = "w-full h-full min-h-[240px] flex items-center justify-center rounded-2xl border border-border bg-card/50 " + className

  const svgClass = "w-full max-w-sm h-auto text-muted-foreground/40"

  const icons: Record<string, React.ReactNode> = {
    hero: (
      <svg className={svgClass} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="20" width="120" height="100" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M60 60h80M60 80h60M60 100h40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="160" cy="40" r="12" stroke={gold} strokeWidth="2" fill="none" />
      </svg>
    ),
    telephony: (
      <svg className={svgClass} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 40c0-22 18-40 40-40s40 18 40 40v80c0 22-18 40-40 40s-40-18-40-40V40z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M100 60h40M100 80h30M100 100h25" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="140" cy="120" r="8" fill={gold} opacity="0.6" />
      </svg>
    ),
    lan: (
      <svg className={svgClass} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="60" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="80" y="50" width="40" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="140" y="60" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M60 80h20M100 80h20M140 80h20" stroke={gold} strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="30" r="10" stroke={gold} strokeWidth="2" fill="none" />
      </svg>
    ),
    support: (
      <svg className={svgClass} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="30" width="100" height="100" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M70 70h60v10H70zM70 90h40v10H70z" stroke={gold} strokeWidth="1.5" fill="none" />
        <circle cx="160" cy="50" r="6" fill={gold} opacity="0.7" />
      </svg>
    ),
    ai: (
      <svg className={svgClass} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="90" rx="50" ry="45" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M75 70c5-8 15-12 25-12s20 4 25 12" stroke={gold} strokeWidth="2" strokeLinecap="round" />
        <circle cx="85" cy="95" r="4" fill={gold} />
        <circle cx="115" cy="95" r="4" fill={gold} />
        <path d="M90 110c0 0 10 8 20 8s20-8 20-8" stroke={gold} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  }

  return (
    <div className={baseClass}>
      {icons[variant] || icons.hero}
    </div>
  )
}
