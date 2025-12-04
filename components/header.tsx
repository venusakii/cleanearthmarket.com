"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X, Sun, Moon, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sprout className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold text-foreground">CleanEarthMarket</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              
              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-64 sm:w-80 glass-effect rounded-lg p-3 shadow-xl animate-in slide-in-from-top-2">
                  <Input type="search" placeholder="Search eco products..." className="w-full" autoFocus />
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:text-primary"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 animate-in slide-in-from-top-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
