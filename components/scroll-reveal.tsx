"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal-visible")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`reveal-hidden ${className}`}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  )
}
