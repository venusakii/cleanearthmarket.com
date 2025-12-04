"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("flip-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll(".testimonial-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Ava Johnson",
      text: "These eco refills changed my daily routine — zero guilt, 100% joy.",
      rating: 5,
    },
    {
      name: "Marco Ruiz",
      text: "Finally, a marketplace that aligns with my values. Every purchase feels meaningful.",
      rating: 5,
    },
    {
      name: "Naomi Patel",
      text: "The quality is outstanding, and knowing I'm helping the planet makes it even better.",
      rating: 5,
    },
    {
      name: "Eli Carter",
      text: "Love the transparency and commitment to sustainability. This is the future of shopping.",
      rating: 5,
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">Customer Stories</h2>
          <p className="text-lg text-muted-foreground text-pretty">Real people, real impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 rotate-y-90 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-effect rounded-2xl p-6 h-full hover:scale-105 transition-transform duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed text-pretty">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">— {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
