"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@cleanearthmarket.com",
      link: "mailto:hello@cleanearthmarket.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (484) 839-2095",
      link: "tel:+14848392095",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "452 Berkley Street, Norristown, PA 19403, United States",
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-effect rounded-2xl p-8 sm:p-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {isSubmitted && (
                  <p className="text-sm text-center text-primary animate-in fade-in slide-in-from-bottom-2">
                    Thank you for reaching out! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    const content = (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                          <p className="font-semibold text-foreground">{info.value}</p>
                        </div>
                      </div>
                    )

                    return info.link ? (
                      <a
                        key={index}
                        href={info.link}
                        className="block hover:scale-105 transition-transform duration-200"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    )
                  })}
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-foreground/80">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
