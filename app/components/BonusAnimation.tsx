"use client"

import { useEffect, useState } from "react"

interface BonusAnimationProps {
  isVisible: boolean
  bonusLevel: number
}

export default function BonusAnimation({ isVisible, bonusLevel }: BonusAnimationProps) {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (isVisible) {
      setOpacity(1)
      const timer = setTimeout(() => {
        setOpacity(0)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-yellow-400"
      style={{
        opacity,
        transition: "opacity 1s ease-out",
        animation: "moveUp 1s ease-out",
      }}
    >
      x{bonusLevel} Bonus!
    </div>
  )
}

