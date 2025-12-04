import { Leaf, Home, Shirt, Utensils, Sparkles, Baby, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CategoriesPage() {
  const allCategories = [
    {
      slug: "home-living",
      icon: Home,
      name: "Home & Living",
      count: "2,450+ products",
      gradient: "from-emerald-500/20 to-teal-500/20",
      subcategories: ["Furniture", "Decor", "Lighting", "Textiles"],
    },
    {
      slug: "fashion-apparel",
      icon: Shirt,
      name: "Fashion & Apparel",
      count: "1,890+ products",
      gradient: "from-blue-500/20 to-cyan-500/20",
      subcategories: ["Clothing", "Shoes", "Accessories", "Bags"],
    },
    {
      slug: "kitchen-dining",
      icon: Utensils,
      name: "Kitchen & Dining",
      count: "3,120+ products",
      gradient: "from-amber-500/20 to-orange-500/20",
      subcategories: ["Cookware", "Utensils", "Storage", "Tableware"],
    },
    {
      slug: "beauty-care",
      icon: Sparkles,
      name: "Beauty & Care",
      count: "1,560+ products",
      gradient: "from-pink-500/20 to-rose-500/20",
      subcategories: ["Skincare", "Haircare", "Cosmetics", "Hygiene"],
    },
    {
      slug: "kids-baby",
      icon: Baby,
      name: "Kids & Baby",
      count: "980+ products",
      gradient: "from-purple-500/20 to-violet-500/20",
      subcategories: ["Toys", "Clothing", "Care", "Feeding"],
    },
    {
      slug: "garden-outdoor",
      icon: Leaf,
      name: "Garden & Outdoor",
      count: "1,230+ products",
      gradient: "from-green-500/20 to-emerald-500/20",
      subcategories: ["Plants", "Tools", "Furniture", "Decor"],
    },
  ]

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground text-balance">All Categories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover sustainable products across all our categories
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input type="search" placeholder="Search categories..." className="pl-12 h-14 text-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-8 hover:scale-105 transition-transform duration-300 cursor-pointer border border-border/50`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.count}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.subcategories.map((sub, subIndex) => (
                        <span
                          key={subIndex}
                          className="text-xs px-3 py-1 rounded-full bg-background/60 text-foreground"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="/reviews">
                    <Button variant="outline" size="sm" className="mt-4 bg-background/80 hover:bg-background">
                      Browse
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link href="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
