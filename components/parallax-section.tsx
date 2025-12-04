"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)

      if (scrollPercent >= 0 && scrollPercent <= 1) {
        const translateY = (scrollPercent - 0.5) * 100 * speed
        section.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={`transition-transform duration-0 ${className}`}>
      {children}
    </div>
  )
}
