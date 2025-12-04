import Link from "next/link"
import { Star, Leaf } from "lucide-react"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
  index: number
}

const productImages: Record<string, string> = {
  "bamboo-toothbrush-set": "/bamboo-toothbrush.jpg",
  "solar-phone-charger": "/solar-charger.jpg",
  "organic-cotton-tote": "/organic-cotton-tote.jpg",
  "beeswax-food-wraps": "/beeswax-wraps.jpg",
  "natural-shampoo-bar": "/shampoo-bar.jpg",
  "stainless-steel-straws": "/stainless-steel-straws.jpg",
  "solar-garden-lights": "/solar-garden-lights.jpg",
  "organic-bath-towels": "/organic-bath-towels.jpg",
  "zero-waste-starter-kit": "/zero-waste-kit.jpg",
}

export function ProductCard({ product, index }: ProductCardProps) {
  const imageSrc = productImages[product.slug] || `/placeholder.svg?height=400&width=400&query=${product.images[0]}`

  return (
    <Link href={`/reviews/${product.slug}`}>
      <div
        className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 h-full animate-grow"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-muted/30 relative">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          {/* Sustainability Badge */}
          <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Leaf className="w-3 h-3" />
            {product.sustainabilityScore}%
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-2 text-balance">
            {product.title}
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
