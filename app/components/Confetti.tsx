"use client"

import { useEffect, useCallback } from "react"
import confetti from "canvas-confetti"

interface ConfettiProps {
  isActive: boolean
}

export default function Confetti({ isActive }: ConfettiProps) {
  const runAnimation = useCallback(() => {
    const duration = 7000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
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
  }, [])

  useEffect(() => {
    if (isActive) {
      const cleanup = runAnimation()
      return cleanup
    }
  }, [isActive, runAnimation])

  return null
}
