"use client"

import { useState } from "react"
import type { Product } from "@/lib/products-data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductGalleryProps {
  product: Product
}

const productImages: Record<string, string[]> = {
  "bamboo-toothbrush-set": [
    "/products/bamboo-toothbrush-1.jpg",
    "/products/bamboo-toothbrush-2.jpg",
    "/products/bamboo-toothbrush-3.jpg",
  ],
  "reusable-produce-bags": [
    "/products/reusable-bags-1.jpg",
    "/products/reusable-bags-2.jpg",
    "/products/reusable-bags-3.jpg",
  ],
  "solar-powered-charger": [
    "/products/solar-charger-1.jpg",
    "/products/solar-charger-2.jpg",
    "/products/solar-charger-3.jpg",
  ],
  "organic-cotton-tote": ["/products/cotton-tote-1.jpg", "/products/cotton-tote-2.jpg", "/products/cotton-tote-3.jpg"],
  "beeswax-food-wraps": [
    "/products/beeswax-wraps-1.jpg",
    "/products/beeswax-wraps-2.jpg",
    "/products/beeswax-wraps-3.jpg",
  ],
  "natural-shampoo-bar": ["/products/shampoo-bar-1.jpg", "/products/shampoo-bar-2.jpg", "/products/shampoo-bar-3.jpg"],
  "stainless-steel-straws": [
    "/products/steel-straws-1.jpg",
    "/products/steel-straws-2.jpg",
    "/products/steel-straws-3.jpg",
  ],
  "solar-garden-lights": [
    "/products/garden-lights-1.jpg",
    "/products/garden-lights-2.jpg",
    "/products/garden-lights-3.jpg",
  ],
  "organic-bath-towels": ["/products/bath-towels-1.jpg", "/products/bath-towels-2.jpg", "/products/bath-towels-3.jpg"],
  "zero-waste-starter-kit": [
    "/products/zero-waste-kit-1.jpg",
    "/products/zero-waste-kit-2.jpg",
    "/products/zero-waste-kit-3.jpg",
  ],
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const getImagePath = (index: number) => {
    const productSlug = product.slug
    const images = productImages[productSlug]
    if (images && images[index]) {
      return images[index]
    }
    return `/placeholder.svg?height=600&width=600&query=${product.images[index]}`
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted/30 group">
        <img
          src={getImagePath(currentImage) || "/placeholder.svg"}
          alt={`${product.title} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {product.images.length > 1 && (
        <div className="flex gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative flex-1 aspect-square rounded-lg overflow-hidden transition-all ${
                currentImage === index ? "ring-2 ring-primary scale-105" : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={getImagePath(index) || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
