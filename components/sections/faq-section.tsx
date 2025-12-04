"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What makes your products sustainable?",
      answer:
        "All products on our marketplace meet strict sustainability criteria including eco-friendly materials, ethical production, minimal packaging, and carbon-neutral shipping. Each product is vetted by our sustainability team.",
    },
    {
      question: "How do you verify sellers and products?",
      answer:
        "We have a rigorous verification process that includes checking certifications, reviewing supply chains, and conducting regular audits. Only sellers who meet our sustainability standards are approved.",
    },
    {
      question: "What is your shipping policy?",
      answer:
        "We use carbon-neutral shipping methods and minimal, recyclable packaging. Shipping times vary by location, typically 3-7 business days. Free shipping on orders over $50.",
    },
    {
      question: "Can I return products?",
      answer:
        "Yes, we offer a 30-day return policy. Items must be unused and in original packaging. We encourage donating unwanted items instead of returning when possible to reduce environmental impact.",
    },
    {
      question: "Do you offer bulk or wholesale pricing?",
      answer:
        "Yes, we offer special pricing for bulk orders and businesses looking to make sustainable choices. Contact our business team for custom quotes and partnership opportunities.",
    },
    {
      question: "How do I become a seller on your platform?",
      answer:
        "Apply through our seller portal. We review applications based on product sustainability, business practices, and alignment with our mission. The process typically takes 1-2 weeks.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about our sustainable marketplace</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-secondary/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/20 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
