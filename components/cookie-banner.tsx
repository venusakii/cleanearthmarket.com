"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Leaf } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-4">
      <div className="glass-effect rounded-lg shadow-2xl p-6 border-2 border-primary/20">
        <div className="flex items-start gap-3">
          <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className="text-sm text-foreground mb-4 leading-relaxed">
              This website uses cookies to improve your experience and analyze site usage. By continuing, you agree to
              our use of cookies.
            </p>
            <div className="flex gap-2">
              <Button onClick={handleAccept} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Accept
              </Button>
              <Button variant="outline" size="icon" onClick={() => setIsVisible(false)} className="flex-shrink-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
