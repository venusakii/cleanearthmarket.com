"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sprout } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isGrowing, setIsGrowing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGrowing(true)
    setTimeout(() => {
      setEmail("")
      setIsGrowing(false)
    }, 3000)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="currentColor" className="text-primary" />
              </svg>
            </div>

            <div className="relative space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Sprout
                  className={`w-12 h-12 text-primary transition-all duration-500 ${isGrowing ? "scale-150" : "scale-100"}`}
                />
                {isGrowing && (
                  <div className="animate-grow">
                    <Sprout className="w-8 h-8 text-primary/60" />
                  </div>
                )}
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Join the Movement
              </h2>

              <p className="text-lg text-muted-foreground text-pretty">Grow with us — one email at a time.</p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Join Now
                </Button>
              </form>

              {isGrowing && (
                <p className="text-sm text-primary animate-in fade-in slide-in-from-bottom-2">
                  Thank you! Your seed is planted.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
