export function PartnersSection() {
  const partners = [
    { name: "EcoVision", category: "Sustainable Tech" },
    { name: "GreenLife Co.", category: "Organic Products" },
    { name: "PureEarth", category: "Zero Waste" },
    { name: "BambooWorld", category: "Natural Materials" },
    { name: "OceanSafe", category: "Marine Protection" },
    { name: "RenewEnergy", category: "Clean Power" },
    { name: "NatureFirst", category: "Eco Solutions" },
    { name: "LeafyGoods", category: "Plant-Based" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Trusted Partners</h2>
          <p className="text-lg text-muted-foreground">Working with leading sustainable brands worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-8 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors"
            >
              <div className="text-2xl font-bold text-foreground mb-2">{partner.name}</div>
              <div className="text-sm text-muted-foreground">{partner.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
