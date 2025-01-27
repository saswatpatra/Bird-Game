"use client"

import { useState, useEffect } from "react"

interface CountdownScreenProps {
  onCountdownEnd: () => void
}

export default function CountdownScreen({ onCountdownEnd }: CountdownScreenProps) {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      onCountdownEnd()
    }
  }, [count, onCountdownEnd])

  return (
    <div className="flex items-center justify-center bg-transparent h-full">
      <div className="text-8xl font-bold text-primary dark:text-yellow-400 animate-bounce transition-colors">
        {count}
      </div>
    </div>
  )
}

