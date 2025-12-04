export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/sustainable-eco-friendly-lifestyle-products.jpg"
                alt="Sustainable lifestyle products"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">
              About CleanEarthMarket
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="text-pretty">We curate sustainable products that empower conscious living.</p>
              <p className="text-pretty">
                Each purchase supports reforestation, fair trade, and clean energy initiatives around the world.
              </p>
              <p className="text-pretty">
                Our mission is simple: make sustainable choices accessible, beautiful, and impactful for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
