import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fraunces, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

// Updated metadata for CleanEarthMarket
export const metadata: Metadata = {
  title: "CleanEarthMarket - Sustainable Products for a Living Planet",
  description: "Shop responsibly. Feel naturally inspired. Discover eco-friendly products that help heal our planet.",
  generator: "v0.app",
  keywords: ["sustainable", "eco-friendly", "marketplace", "green products", "environmental"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

// Added theme color for mobile browsers
export const viewport: Viewport = {
  themeColor: "#2E473B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
