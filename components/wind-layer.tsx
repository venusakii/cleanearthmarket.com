"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  type: "leaf" | "pollen" | "sparkle"
}

export function WindLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000)

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.3 + 0.1,
          type: ["leaf", "pollen", "sparkle"][Math.floor(Math.random() * 3)] as "leaf" | "pollen" | "sparkle",
        })
      }
    }
    initParticles()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Device orientation for mobile
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        mouseRef.current = {
          x: window.innerWidth / 2 + e.gamma * 10,
          y: window.innerHeight / 2 + e.beta * 10,
        }
      }
    }
    window.addEventListener("deviceorientation", handleOrientation)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Calculate wind force from mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const force = Math.min(100 / (distance + 100), 0.5)

        // Apply wind force
        particle.vx += (dx / distance) * force * 0.05
        particle.vy += (dy / distance) * force * 0.05

        // Add natural drift
        particle.vx += (Math.random() - 0.5) * 0.05
        particle.vy += (Math.random() - 0.5) * 0.05

        // Apply friction
        particle.vx *= 0.98
        particle.vy *= 0.98

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity

        if (particle.type === "leaf") {
          // Draw leaf shape
          ctx.fillStyle = "#2E473B"
          ctx.beginPath()
          ctx.ellipse(particle.x, particle.y, particle.size, particle.size * 1.5, particle.vx * 2, 0, Math.PI * 2)
          ctx.fill()
        } else if (particle.type === "pollen") {
          // Draw pollen circle
          ctx.fillStyle = "#F5E27B"
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.7, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Draw sparkle
          ctx.fillStyle = "#4CB6B1"
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("deviceorientation", handleOrientation)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-40" style={{ mixBlendMode: "multiply" }} />
  )
}
