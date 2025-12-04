"use client"

import { Leaf, Home, Shirt, Utensils, Sparkles, Baby } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CategoriesSection() {
  const categories = [
    {
      icon: Home,
      name: "Home & Living",
      count: "2,450+ products",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Shirt,
      name: "Fashion & Apparel",
      count: "1,890+ products",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Utensils,
      name: "Kitchen & Dining",
      count: "3,120+ products",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: Sparkles,
      name: "Beauty & Care",
      count: "1,560+ products",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      icon: Baby,
      name: "Kids & Baby",
      count: "980+ products",
      gradient: "from-purple-500/20 to-violet-500/20",
    },
    {
      icon: Leaf,
      name: "Garden & Outdoor",
      count: "1,230+ products",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our curated collection of sustainable products across all categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-8 hover:scale-105 transition-transform duration-300 cursor-pointer border border-border/50`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/categories">
            <Button size="lg" className="font-semibold">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
