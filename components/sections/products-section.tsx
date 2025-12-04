"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Recycle, Leaf, Sun, Home, Droplet } from "lucide-react"
import Link from "next/link"

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "All", icon: Leaf },
    { id: "reusable", label: "Reusable", icon: Recycle },
    { id: "organic", label: "Organic", icon: Leaf },
    { id: "solar", label: "Solar", icon: Sun },
    { id: "home", label: "Home", icon: Home },
    { id: "personal", label: "Personal Care", icon: Droplet },
  ]

  const products = [
    {
      title: "Bamboo Toothbrush Set",
      category: "personal",
      price: "$12.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop",
    },
    {
      title: "Solar Phone Charger",
      category: "solar",
      price: "$45.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop",
    },
    {
      title: "Organic Cotton Tote",
      category: "reusable",
      price: "$18.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1591047139829-d99d160bfcbc?w=400&h=400&fit=crop",
    },
    {
      title: "Beeswax Food Wraps",
      category: "home",
      price: "$22.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop",
    },
    {
      title: "Natural Shampoo Bar",
      category: "organic",
      price: "$15.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
    },
    {
      title: "Stainless Steel Straws",
      category: "reusable",
      price: "$9.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400&h=400&fit=crop",
    },
    {
      title: "Solar Garden Lights",
      category: "solar",
      price: "$34.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    },
    {
      title: "Organic Bath Towels",
      category: "home",
      price: "$29.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    },
    {
      title: "Zero Waste Starter Kit",
      category: "personal",
      price: "$39.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop",
    },
  ]

  const filteredProducts = activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Top Sustainable Picks
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">Curated products that make a difference</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`gap-2 ${
                  activeFilter === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-muted text-foreground hover:border-primary"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-grow"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-muted/30">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 text-balance">{product.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">⭐ {product.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviews">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
