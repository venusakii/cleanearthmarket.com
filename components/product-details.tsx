import type { Product } from "@/lib/products-data"
import { Leaf, Package, Target, CheckCircle } from "lucide-react"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const details = [
    { icon: Package, label: "Material", value: product.material },
    { icon: Target, label: "Impact", value: product.impact },
    { icon: Leaf, label: "Category", value: product.category },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {/* Eco Features */}
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Leaf className="w-6 h-6 text-primary" />
          Eco Features
        </h2>
        <ul className="space-y-3">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Material & Impact */}
      <div className="glass-effect rounded-2xl p-8">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Sustainability Info</h2>
        <div className="space-y-6">
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                  <p className="font-semibold text-foreground">{detail.value}</p>
                </div>
              </div>
            )
          })}

          {/* Sustainability Score */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Sustainability Score</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-secondary to-primary transition-all duration-1000"
                  style={{ width: `${product.sustainabilityScore}%` }}
                />
              </div>
              <span className="font-bold text-primary text-xl">{product.sustainabilityScore}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
