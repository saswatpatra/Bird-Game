"use client"

import { useEffect } from "react"
import confetti from "canvas-confetti"

interface ConfettiProps {
  isActive: boolean
}

export default function Confetti({ isActive }: ConfettiProps) {
  useEffect(() => {
    if (isActive) {
      const duration = 7000 // Increased duration to 7 seconds
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min
      }

      const interval: NodeJS.Timeout = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // Larger confetti
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            scalar: 1.5, // Makes the confetti 1.5 times larger
          }),
        )
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            scalar: 1.5, // Makes the confetti 1.5 times larger
          }),
        )
      }, 250)

      return () => clearInterval(interval)
    }
  }, [isActive])

  return null
}

