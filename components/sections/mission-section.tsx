"use client"

import { Leaf, Recycle, TreePine, Users } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">Our Mission</h2>
          <p className="text-lg text-primary-foreground/80 text-pretty max-w-2xl mx-auto">
            Building a sustainable future, one conscious choice at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mission Pillar 1 */}
          <div className="text-center space-y-4 group">
            <div className="w-20 h-20 mx-auto bg-primary-foreground/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Eco-Friendly</h3>
            <p className="text-primary-foreground/80 text-pretty">
              Curating products that minimize environmental impact and promote sustainable living
            </p>
          </div>

          {/* Mission Pillar 2 */}
          <div className="text-center space-y-4 group">
            <div className="w-20 h-20 mx-auto bg-primary-foreground/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Recycle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Circular Economy</h3>
            <p className="text-primary-foreground/80 text-pretty">
              Supporting businesses that embrace reuse, repair, and recycling principles
            </p>
          </div>

          {/* Mission Pillar 3 */}
          <div className="text-center space-y-4 group">
            <div className="w-20 h-20 mx-auto bg-primary-foreground/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TreePine className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Planet Positive</h3>
            <p className="text-primary-foreground/80 text-pretty">
              Every purchase contributes to reforestation and carbon offset initiatives
            </p>
          </div>

          {/* Mission Pillar 4 */}
          <div className="text-center space-y-4 group">
            <div className="w-20 h-20 mx-auto bg-primary-foreground/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Community Driven</h3>
            <p className="text-primary-foreground/80 text-pretty">
              Empowering communities to make informed, sustainable purchasing decisions
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-primary-foreground/10 rounded-2xl px-8 py-6 space-y-2">
            <p className="font-serif text-3xl sm:text-4xl font-bold">2M+</p>
            <p className="text-primary-foreground/80">Plastic items prevented from landfills</p>
          </div>
        </div>
      </div>
    </section>
  )
}
