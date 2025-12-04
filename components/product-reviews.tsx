import type { Product } from "@/lib/products-data"
import { Star, User } from "lucide-react"

interface ProductReviewsProps {
  product: Product
}

export function ProductReviews({ product }: ProductReviewsProps) {
  const sampleReviews = [
    {
      name: "Jessica Parker",
      rating: 5,
      date: "January 15, 2025",
      text: "Absolutely love this product! The quality exceeded my expectations and I feel good knowing I'm making a sustainable choice.",
    },
    {
      name: "Daniel Foster",
      rating: 5,
      date: "January 10, 2025",
      text: "Great value for the price. Works exactly as described and the eco-friendly materials are a huge plus.",
    },
    {
      name: "Olivia Reed",
      rating: 4,
      date: "January 5, 2025",
      text: "Very satisfied with this purchase. It's well-made and does what it promises. Would definitely recommend.",
    },
  ]

  return (
    <div className="glass-effect rounded-2xl p-8">
      <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>

      <div className="space-y-6">
        {sampleReviews.map((review, index) => (
          <div key={index} className="border-b border-border last:border-0 pb-6 last:pb-0">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed text-pretty">{review.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
