"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import HomeScreen from "./HomeScreen"
import CountdownScreen from "./CountdownScreen"
import GameScreen from "./GameScreen"

export default function GameContainer() {
  const [gameState, setGameState] = useState<"home" | "countdown" | "playing" | "gameOver">("home")
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore")
    if (storedHighScore) {
      setHighScore(Number.parseInt(storedHighScore, 10))
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      setGameState("home")
      setScore(0)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const startGame = () => {
    setGameState("countdown")
  }

  const startPlaying = () => {
    setGameState("playing")
    setScore(0)
  }

  const endGame = (finalScore: number) => {
    setScore(finalScore)
    if (finalScore > highScore) {
      setHighScore(finalScore)
      localStorage.setItem("highScore", finalScore.toString())
    }
    setGameState("gameOver")
  }

  const playAgain = () => {
    setGameState("countdown")
  }

  const goToHome = () => {
    setGameState("home")
    setScore(0)
    router.push("/")
  }

  const resetScore = () => {
    setHighScore(0)
    localStorage.setItem("highScore", "0")
  }

  return (
    <div className="relative">
      {(gameState === "playing" || gameState === "gameOver") && (
        <div
          className="absolute inset-0 dark:bg-gradient-radial dark:from-yellow-600/30 dark:to-transparent dark:blur-xl dark:opacity-70 transition-opacity duration-300"
          aria-hidden="true"
        ></div>
      )}
      <div
        className={`relative ${
          gameState === "playing" || gameState === "gameOver" ? "dark:shadow-[0_0_50px_15px_rgba(255,215,0,0.15)]" : ""
        } rounded-lg transition-shadow duration-300`}
      >
        {gameState === "home" && <HomeScreen onStartGame={startGame} />}
        {gameState === "countdown" && <CountdownScreen onCountdownEnd={startPlaying} />}
        {(gameState === "playing" || gameState === "gameOver") && (
          <GameScreen
            score={score}
            setScore={setScore}
            highScore={highScore}
            setHighScore={setHighScore}
            onGameOver={endGame}
            isGameOver={gameState === "gameOver"}
            onPlayAgain={playAgain}
            goToHome={goToHome}
          />
        )}
      </div>
    </div>
  )
}

