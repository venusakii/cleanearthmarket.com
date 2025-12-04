import { Leaf, Home, Shirt, Utensils, Sparkles, Baby, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"

const categoryData: Record<
  string,
  {
    icon: any
    name: string
    description: string
    gradient: string
    subcategories: string[]
    products: Array<{
      name: string
      price: string
      image: string
      eco: string
    }>
  }
> = {
  "home-living": {
    icon: Home,
    name: "Home & Living",
    description: "Sustainable furniture, decor, and essentials for your eco-friendly home",
    gradient: "from-emerald-500/20 to-teal-500/20",
    subcategories: ["Furniture", "Decor", "Lighting", "Textiles"],
    products: [
      { name: "Bamboo Desk Organizer", price: "$24.99", image: "/bamboo-desk-organizer.jpg", eco: "100% Bamboo" },
      { name: "Recycled Glass Vase", price: "$32.99", image: "/recycled-glass-vase.png", eco: "Recycled Glass" },
      { name: "Organic Cotton Throw", price: "$45.99", image: "/organic-cotton-throw-blanket.jpg", eco: "Organic Cotton" },
      { name: "Cork Coaster Set", price: "$18.99", image: "/cork-coasters-set.jpg", eco: "Natural Cork" },
    ],
  },
  "fashion-apparel": {
    icon: Shirt,
    name: "Fashion & Apparel",
    description: "Eco-friendly clothing and accessories made from sustainable materials",
    gradient: "from-blue-500/20 to-cyan-500/20",
    subcategories: ["Clothing", "Shoes", "Accessories", "Bags"],
    products: [
      { name: "Organic Cotton T-Shirt", price: "$29.99", image: "/organic-cotton-tshirt.png", eco: "Organic Cotton" },
      { name: "Recycled Denim Jeans", price: "$79.99", image: "/recycled-denim-jeans.png", eco: "Recycled Denim" },
      { name: "Hemp Canvas Tote", price: "$34.99", image: "/hemp-canvas-tote-bag.jpg", eco: "Hemp Fiber" },
      { name: "Cork Wallet", price: "$42.99", image: "/cork-leather-wallet.png", eco: "Cork Leather" },
    ],
  },
  "kitchen-dining": {
    icon: Utensils,
    name: "Kitchen & Dining",
    description: "Sustainable cookware, utensils, and dining essentials for your kitchen",
    gradient: "from-amber-500/20 to-orange-500/20",
    subcategories: ["Cookware", "Utensils", "Storage", "Tableware"],
    products: [
      { name: "Bamboo Cutlery Set", price: "$22.99", image: "/bamboo-cutlery-set.png", eco: "Bamboo" },
      {
        name: "Glass Storage Containers",
        price: "$39.99",
        image: "/glass-food-storage-containers.jpg",
        eco: "Borosilicate Glass",
      },
      { name: "Wooden Cutting Board", price: "$44.99", image: "/wooden-cutting-board.png", eco: "Sustainable Wood" },
      { name: "Stainless Steel Straws", price: "$12.99", image: "/stainless-steel-straws.png", eco: "Reusable Steel" },
    ],
  },
  "beauty-care": {
    icon: Sparkles,
    name: "Beauty & Care",
    description: "Natural and organic beauty products that are kind to you and the planet",
    gradient: "from-pink-500/20 to-rose-500/20",
    subcategories: ["Skincare", "Haircare", "Cosmetics", "Hygiene"],
    products: [
      { name: "Bamboo Toothbrush Set", price: "$14.99", image: "/bamboo-toothbrush.jpg", eco: "Biodegradable" },
      { name: "Organic Shampoo Bar", price: "$16.99", image: "/organic-shampoo-bar.jpg", eco: "Plastic-Free" },
      { name: "Natural Face Cream", price: "$28.99", image: "/natural-face-cream-jar.jpg", eco: "Organic Ingredients" },
      { name: "Reusable Cotton Pads", price: "$18.99", image: "/reusable-cotton-pads.jpg", eco: "Washable" },
    ],
  },
  "kids-baby": {
    icon: Baby,
    name: "Kids & Baby",
    description: "Safe, sustainable products for your little ones",
    gradient: "from-purple-500/20 to-violet-500/20",
    subcategories: ["Toys", "Clothing", "Care", "Feeding"],
    products: [
      { name: "Wooden Toy Blocks", price: "$34.99", image: "/wooden-toy-blocks.jpg", eco: "Natural Wood" },
      { name: "Organic Baby Blanket", price: "$42.99", image: "/organic-baby-blanket.jpg", eco: "Organic Cotton" },
      { name: "Bamboo Baby Plates", price: "$24.99", image: "/bamboo-baby-plates.jpg", eco: "Bamboo Fiber" },
      { name: "Natural Rubber Teether", price: "$12.99", image: "/natural-rubber-teether.jpg", eco: "Natural Rubber" },
    ],
  },
  "garden-outdoor": {
    icon: Leaf,
    name: "Garden & Outdoor",
    description: "Eco-friendly gardening and outdoor products",
    gradient: "from-green-500/20 to-emerald-500/20",
    subcategories: ["Plants", "Tools", "Furniture", "Decor"],
    products: [
      {
        name: "Recycled Plastic Planter",
        price: "$28.99",
        image: "/recycled-plastic-planter.jpg",
        eco: "Recycled Plastic",
      },
      { name: "Bamboo Garden Tools", price: "$52.99", image: "/bamboo-garden-tools-set.jpg", eco: "Sustainable Bamboo" },
      { name: "Solar Garden Lights", price: "$36.99", image: "/solar-garden-lights.jpg", eco: "Solar Powered" },
      {
        name: "Compost Bin",
        price: "$64.99",
        image: "/placeholder.svg?height=300&width=300",
        eco: "Recycled Materials",
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug]

  if (!category) {
    notFound()
  }

  const Icon = category.icon

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </Link>

        <div className={`rounded-3xl bg-gradient-to-br ${category.gradient} p-12 mb-12 border border-border/50`}>
          <div className="flex items-center gap-6 mb-4">
            <div className="w-24 h-24 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-5xl font-bold text-foreground text-balance">{category.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{category.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {category.subcategories.map((sub, index) => (
              <span key={index} className="px-4 py-2 rounded-full bg-background/80 text-foreground font-medium">
                {sub}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {product.eco}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{product.name}</h3>
                
                <Button className="w-full mt-4">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
