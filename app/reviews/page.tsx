"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { products } from "@/lib/products-data"
import { ProductCard } from "@/components/product-card"
import { Recycle, Leaf, Sun, Home, Droplet, SlidersHorizontal } from "lucide-react"

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 50])
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: "all", label: "All Products", icon: Leaf },
    { id: "Reusable", label: "Reusable", icon: Recycle },
    { id: "Organic", label: "Organic", icon: Leaf },
    { id: "Solar", label: "Solar", icon: Sun },
    { id: "Home", label: "Home", icon: Home },
    { id: "Personal Care", label: "Personal Care", icon: Droplet },
  ]

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      return categoryMatch && priceMatch
    })

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "sustainability":
        filtered.sort((a, b) => b.sustainabilityScore - a.sustainabilityScore)
        break
      default:
        // newest - keep original order
        break
    }

    return filtered
  }, [selectedCategory, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Product Reviews
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover sustainable products that make a difference
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="glass-effect rounded-2xl p-6 sticky top-24 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const Icon = category.icon
                      return (
                        <Button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          variant={selectedCategory === category.id ? "default" : "ghost"}
                          className={`w-full justify-start gap-2 ${
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-primary/10"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {category.label}
                        </Button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <Slider value={priceRange} onValueChange={setPriceRange} max={50} step={5} className="w-full" />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Controls Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden bg-transparent"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <p className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} products found</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Best Rated</SelectItem>
                      <SelectItem value="sustainability">Most Sustainable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>

              {filteredAndSortedProducts.length === 0 && (
                <div className="text-center py-16">
                  <Leaf className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">No products found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
