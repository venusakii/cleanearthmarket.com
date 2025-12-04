"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [counts, setCounts] = useState({ products: 0, users: 0, plastic: 0, trees: 0 })

  useEffect(() => {
    const targets = { products: 5000, users: 25000, plastic: 1000000, trees: 50000 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        products: Math.floor((targets.products / steps) * step),
        users: Math.floor((targets.users / steps) * step),
        plastic: Math.floor((targets.plastic / steps) * step),
        trees: Math.floor((targets.trees / steps) * step),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, increment)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground">Together we are making a real difference</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-background rounded-2xl shadow-sm">
            <div className="text-5xl font-bold text-primary mb-2">{counts.products.toLocaleString()}+</div>
            <div className="text-lg text-muted-foreground">Sustainable Products</div>
          </div>

          <div className="text-center p-8 bg-background rounded-2xl shadow-sm">
            <div className="text-5xl font-bold text-primary mb-2">{counts.users.toLocaleString()}+</div>
            <div className="text-lg text-muted-foreground">Active Users</div>
          </div>

          <div className="text-center p-8 bg-background rounded-2xl shadow-sm">
            <div className="text-5xl font-bold text-primary mb-2">{counts.plastic.toLocaleString()}+</div>
            <div className="text-lg text-muted-foreground">Plastic Items Saved</div>
          </div>

          <div className="text-center p-8 bg-background rounded-2xl shadow-sm">
            <div className="text-5xl font-bold text-primary mb-2">{counts.trees.toLocaleString()}+</div>
            <div className="text-lg text-muted-foreground">Trees Planted</div>
          </div>
        </div>
      </div>
    </section>
  )
}
