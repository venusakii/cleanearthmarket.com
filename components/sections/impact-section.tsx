"use client"

import { useEffect, useRef, useState } from "react"
import { Trees, Droplets, Sun } from "lucide-react"

export function ImpactSection() {
  const [counts, setCounts] = useState({ trees: 0, bottles: 0, energy: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const targets = { trees: 12500, bottles: 3000000, energy: 98 }
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        trees: Math.floor(targets.trees * progress),
        bottles: Math.floor(targets.bottles * progress),
        energy: Math.floor(targets.energy * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, interval)
  }

  const impacts = [
    {
      icon: Trees,
      count: counts.trees.toLocaleString(),
      label: "Trees Planted",
      color: "text-primary",
    },
    {
      icon: Droplets,
      count: `${(counts.bottles / 1000000).toFixed(1)}M`,
      label: "Bottles Saved from Oceans",
      color: "text-secondary",
    },
    {
      icon: Sun,
      count: `${counts.energy}%`,
      label: "Renewable Energy Used",
      color: "text-accent",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">Our Impact</h2>
          <p className="text-lg text-muted-foreground text-pretty">Together, we're healing the planet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <Icon className={`w-16 h-16 mx-auto mb-4 ${impact.color}`} />
                <div className={`font-serif text-5xl font-bold mb-2 ${impact.color}`}>{impact.count}</div>
                <p className="text-lg text-muted-foreground">{impact.label}</p>

                {/* Growing vine decoration */}
                <div className="mt-4 h-2 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full animate-pulse" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
