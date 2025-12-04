"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Droplet, Sparkles } from "lucide-react"
import Link from "next/link"
import { ParallaxSection } from "@/components/parallax-section"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/10">
      <ParallaxSection speed={0.3} className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-[url('/aerial-view-lush-forest-and-ocean.jpg')] bg-cover bg-center"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.1)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </ParallaxSection>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf
          className="absolute top-20 left-[10%] w-8 h-8 text-primary/30 animate-drift"
          style={{ animationDelay: "0s" }}
        />
        <Droplet
          className="absolute top-40 right-[15%] w-6 h-6 text-secondary/40 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute bottom-32 left-[20%] w-6 h-6 text-accent/50 animate-drift"
          style={{ animationDelay: "2s" }}
        />
        <Leaf
          className="absolute top-60 right-[25%] w-10 h-10 text-primary/20 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <Droplet
          className="absolute bottom-48 right-[30%] w-8 h-8 text-secondary/30 animate-drift"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Sustainable Products for a <span className="text-primary">Living Planet</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Shop responsibly. Feel naturally inspired.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/reviews">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group">
                <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 gap-2 group bg-transparent"
              >
                Explore the Mission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>
  )
}
