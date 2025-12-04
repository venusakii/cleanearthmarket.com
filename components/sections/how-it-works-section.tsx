"use client"

import { Package, Search, ShoppingCart, Truck } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Browse thousands of sustainable products from verified eco-conscious brands",
      number: "01",
    },
    {
      icon: ShoppingCart,
      title: "Choose",
      description: "Select products that align with your values and sustainability goals",
      number: "02",
    },
    {
      icon: Package,
      title: "Purchase",
      description: "Complete your order with secure checkout and transparent pricing",
      number: "03",
    },
    {
      icon: Truck,
      title: "Receive",
      description: "Get your items delivered in eco-friendly packaging with carbon-neutral shipping",
      number: "04",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Four simple steps to start your sustainable shopping journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative flex flex-col items-center text-center space-y-4 p-6">
                <div className="absolute -top-4 -left-4 text-8xl font-bold text-primary/10 font-serif">
                  {step.number}
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
