import { Leaf, Recycle, Globe, Shield } from "lucide-react"

export function CommitmentSection() {
  const commitments = [
    {
      icon: Leaf,
      title: "Carbon Negative by 2025",
      description:
        "We are committed to removing more carbon from the atmosphere than we produce through our operations and partnerships.",
      progress: 78,
    },
    {
      icon: Recycle,
      title: "100% Circular Economy",
      description:
        "Every product on our platform is designed for reuse, repair, or recycling - eliminating waste from the system.",
      progress: 65,
    },
    {
      icon: Globe,
      title: "Global Impact Initiative",
      description:
        "Supporting environmental projects in 50+ countries, from reforestation to ocean cleanup and renewable energy.",
      progress: 92,
    },
    {
      icon: Shield,
      title: "Ethical Supply Chains",
      description:
        "Ensuring fair wages, safe working conditions, and environmental protection throughout our entire supply network.",
      progress: 88,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Sustainability Commitment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are not just talking about sustainability - we are actively working towards ambitious goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {commitments.map((commitment) => {
            const Icon = commitment.icon
            return (
              <div key={commitment.title} className="bg-background p-8 rounded-2xl shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{commitment.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Progress</span>
                    <span className="text-sm font-bold text-primary">{commitment.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${commitment.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
