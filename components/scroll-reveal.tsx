"use client"

import { useEffect, useRef, useState } from "react"

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true)
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${visible ? "animate-fade-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  )
}
