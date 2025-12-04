import Link from "next/link"
import { Sprout } from "lucide-react"

export function Footer() {
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Animated roots background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 400">
          <path
            d="M600 0 Q 500 100 400 200 T 200 300 L 200 400 L 0 400 L 0 0 Z"
            fill="currentColor"
            className="animate-pulse"
          />
          <path
            d="M600 0 Q 700 100 800 200 T 1000 300 L 1000 400 L 1200 400 L 1200 0 Z"
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sprout className="w-8 h-8" />
          <span className="font-serif text-2xl font-bold">CleanEarthMarket</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Legal Text */}
        <div className="text-center text-sm text-primary-foreground/70 space-y-2">
          <p>© 2025 CleanEarthMarket.com — All rights reserved.</p>
          <p>Participant in the Amazon Associates Program.</p>
          <p>As an Amazon Associate, we earn from qualifying purchases.</p>
          <p className="mt-4">452 Berkley Street, Norristown, Pennsylvania 19403, United States</p>
          <p>Phone: +1 (484) 839-2095</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
