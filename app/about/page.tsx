import { Leaf, Heart, Users, Target } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2020",
      title: "Seeds Planted",
      description: "CleanEarthMarket was founded with a vision to make sustainable shopping accessible to everyone.",
    },
    {
      year: "2021",
      title: "Growing Roots",
      description: "Partnered with 50+ eco-friendly brands and planted our first 1,000 trees.",
    },
    {
      year: "2022",
      title: "Branching Out",
      description: "Expanded to 500+ sustainable products and reached 10,000 customers.",
    },
    {
      year: "2023",
      title: "Forest Rising",
      description: "Achieved carbon-neutral shipping and saved 1M plastic bottles from oceans.",
    },
    {
      year: "2024",
      title: "Ecosystem Thriving",
      description: "Now serving 100,000+ conscious consumers and planting 10,000+ trees annually.",
    },
  ]

  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "Every product is carefully vetted for its environmental impact and ethical sourcing.",
    },
    {
      icon: Heart,
      title: "Quality Matters",
      description: "We believe sustainable products should be high-quality, long-lasting, and beautiful.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our community of conscious consumers helps shape what products we feature.",
    },
    {
      icon: Target,
      title: "Real Impact",
      description: "Every purchase contributes to reforestation, clean energy, and ocean cleanup efforts.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              About CleanEarthMarket
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              We're on a mission to make sustainable living beautiful, accessible, and impactful for everyone on the
              planet.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass-effect rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative space-y-6">
                <h2 className="font-serif text-3xl font-bold text-foreground text-balance">Our Mission</h2>
                <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
                  We curate sustainable products that empower conscious living. Each purchase supports reforestation,
                  fair trade, and clean energy initiatives around the world.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
                  Our mission is simple: make sustainable choices accessible, beautiful, and impactful for everyone. We
                  believe that small changes in our daily habits can create massive positive ripples across the planet.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-12 text-balance">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 text-balance">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-pretty">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-12 text-balance">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-0 sm:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background hidden sm:block" />

                    <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-serif text-2xl font-bold text-primary">{milestone.year}</span>
                        <div className="flex-1 h-px bg-primary/20" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-balance">
                        {milestone.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-pretty">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
