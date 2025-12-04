"use client"

import { useEffect, useRef } from "react"

export function FlowSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    const products = sectionRef.current?.querySelectorAll(".flow-product")
    products?.forEach((product) => observer.observe(product))

    return () => observer.disconnect()
  }, [])

  const products = [
    { name: "Bamboo Water Bottle", image: "reusable+bamboo+water+bottle" },
    { name: "Organic Soap Bar", image: "natural+organic+soap+bar" },
    { name: "Hemp Tote Bag", image: "sustainable+hemp+tote+bag" },
  ]

  return (
    null
  )
}
