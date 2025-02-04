"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Confetti from "./Confetti"
import { useTheme } from "./ThemeContext"
import BonusAnimation from "./BonusAnimation"

const BIRD_NAMES = ["Sparrow", "Eagle", "Pigeon", "Parrot", "Crow", "Owl", "Hawk", "Robin"]
const NON_BIRD_NAMES = ["Dog", "Cat", "Elephant", "Lion", "Tiger", "Bear", "Wolf", "Fox", "Deer", "Rabbit"]
const WORD_DURATION = 3000 // 3 seconds

interface GameScreenProps {
  score: number
  setScore: (score: number | ((prevScore: number) => number)) => void
  highScore: number
  setHighScore: (score: number) => void
  onGameOver: (finalScore: number) => void
  isGameOver: boolean
  onPlayAgain: () => void
  goToHome: () => void
}

export default function GameScreen({
  score,
  setScore,
  highScore,
  setHighScore,
  onGameOver,
  isGameOver,
  onPlayAgain,
  goToHome,
}: GameScreenProps) {
  const [word, setWord] = useState("")
  const [isBirdWord, setIsBirdWord] = useState(false)
  const [showHighScorePopup, setShowHighScorePopup] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [streak, setStreak] = useState(0)
  const [bonusMultiplier, setBonusMultiplier] = useState(1)
  const [showBonusAnimation, setShowBonusAnimation] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const [wordKey, setWordKey] = useState(0) // For fade animation
  const lastWordRef = useRef("")
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const { isDark } = useTheme()

  const generateWord = useCallback(() => {
    const isBird = Math.random() < 0.5
    const wordList = isBird ? BIRD_NAMES : NON_BIRD_NAMES
    let newWord
    do {
      newWord = wordList[Math.floor(Math.random() * wordList.length)]
    } while (newWord === lastWordRef.current)

    setWord(newWord)
    setIsBirdWord(isBird)
    lastWordRef.current = newWord
    setWordKey((prev) => prev + 1) // Trigger fade animation
  }, [])

  const handleGameOver = useCallback(() => {
    onGameOver(score)
    if (score > highScore) {
      setHighScore(score)
      setShowHighScorePopup(true)
      setShowConfetti(true)
      localStorage.setItem("highScore", score.toString())
      setTimeout(() => setShowConfetti(false), 8000)
    }
  }, [score, highScore, setHighScore, onGameOver])

  useEffect(() => {
    if (isGameOver) {
      if (timerRef.current) clearTimeout(timerRef.current)
      return
    }

    generateWord()

    const gameLoop = () => {
      timerRef.current = setTimeout(() => {
        if (isBirdWord) {
          handleGameOver()
        } else {
          generateWord()
          gameLoop()
        }
      }, WORD_DURATION)
    }

    gameLoop()

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isGameOver, generateWord, isBirdWord, handleGameOver])

  const handleBirdClick = useCallback(() => {
    if (isGameOver) return

    if (isBirdWord) {
      const newStreak = streak + 1
      const newBonusMultiplier = Math.floor(newStreak / 5) + 1
      const pointsToAdd = newBonusMultiplier

      setStreak(newStreak)
      setScore((prevScore) => prevScore + pointsToAdd)

      if (newBonusMultiplier > bonusMultiplier) {
        setBonusMultiplier(newBonusMultiplier)
        setShowBonusAnimation(true)
        setTimeout(() => setShowBonusAnimation(false), 1000)
      }

      if (timerRef.current) clearTimeout(timerRef.current)
      generateWord()
    } else {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 400) // Match shake animation duration
      handleGameOver()
    }
  }, [isGameOver, isBirdWord, streak, bonusMultiplier, generateWord, handleGameOver, setScore])

  const resetScore = useCallback(() => {
    setHighScore(0)
    localStorage.setItem("highScore", "0")
    setShowHighScorePopup(false)
  }, [setHighScore])

  if (isGameOver) {
    return (
      <div
        className={`${isDark ? "bg-[#1E1E1E]" : "bg-[#16213e] bg-opacity-80"} backdrop-filter backdrop-blur-sm rounded-lg p-4 sm:p-8 shadow-lg text-center relative`}
      >
        <Confetti isActive={showConfetti} />
        {showHighScorePopup && (
          <div className="absolute top-0 left-0 right-0 bg-[#d90429] text-white py-2 px-4 rounded-t-lg animate-bounce">
            <p className="text-2xl font-bold">New High Score: {score}</p>
          </div>
        )}
        <h2 className="text-4xl font-semibold mb-6 text-[#ffd700]">Game Over!</h2>
        <p className="text-2xl mb-4 text-white">
          Final Score: <span className="text-[#ffd700] font-semibold">{score}</span>
        </p>
        <p className="text-2xl mb-8 text-white">
          High Score: <span className="text-[#ffd700] font-semibold">{highScore}</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onPlayAgain}
            className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-[#55a630] text-white rounded-full text-base sm:text-lg font-semibold hover:bg-[#008000] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap active:scale-95"
          >
            Play Again
          </button>
          <button
            onClick={goToHome}
            className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-[#0f3460] text-white rounded-full text-base sm:text-lg font-semibold hover:bg-[#0f3460] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Home
          </button>
          <button
            onClick={resetScore}
            className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-[#d90429] text-white rounded-full text-base sm:text-lg font-semibold hover:bg-[#ef233c] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Reset Score
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${isDark ? "bg-[#1E1E1E]" : "bg-[#16213e] bg-opacity-80"} backdrop-filter backdrop-blur-sm rounded-lg p-4 sm:p-8 shadow-lg text-center relative`}
    >
      <BonusAnimation isVisible={showBonusAnimation} bonusLevel={bonusMultiplier} />
      <h2 key={wordKey} className="text-4xl font-semibold mb-6 text-[#ffd700] word-fade-in">
        {word}
      </h2>
      <p className="text-2xl mb-8 text-white">
        Score: <span className="text-[#ffd700] font-semibold">{score}</span>
        {bonusMultiplier > 1 && <span className="text-[#ffd700] font-semibold ml-2">(x{bonusMultiplier} Bonus)</span>}
      </p>
      <button
        onClick={handleBirdClick}
        className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#fee440] text-[#16213e] rounded-full text-lg font-semibold hover:bg-[#ffd700] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-4 active:scale-95 ${
          isShaking ? "button-shake" : ""
        }`}
      >
        Bird
      </button>
      <p className="text-xl text-white">
        High Score: <span className="text-[#ffd700] font-semibold">{highScore}</span>
      </p>
    </div>
  )
}

