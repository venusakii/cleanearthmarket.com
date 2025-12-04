"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-2xl hover:bg-primary/90 hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </div>
  )
}
