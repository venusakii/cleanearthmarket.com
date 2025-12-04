import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products-data"
import { ProductGallery } from "@/components/product-gallery"
import { ProductDetails } from "@/components/product-details"
import { ProductReviews } from "@/components/product-reviews"
import { ExternalLink, Leaf } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Reviews</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Gallery */}
            <ProductGallery product={product} />

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                  {product.title}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "text-accent" : "text-muted"}>
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-lg font-medium text-foreground">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                

                <p className="text-lg text-foreground/80 leading-relaxed text-pretty">{product.description}</p>
              </div>

              {/* CTA Button */}
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                  View on Amazon
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>

              <div className="glass-effect rounded-xl p-4">
                <p className="text-xs text-muted-foreground text-center">
                  As an Amazon Associate, we earn from qualifying purchases. This helps support our mission to promote
                  sustainable products.
                </p>
              </div>
            </div>
          </div>

          {/* Product Details Sections */}
          <ProductDetails product={product} />

          {/* Customer Reviews */}
          <ProductReviews product={product} />
        </div>
      </div>
    </div>
  )
}
