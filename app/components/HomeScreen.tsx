"use client"

interface HomeScreenProps {
  onStartGame: () => void
}

export default function HomeScreen({ onStartGame }: HomeScreenProps) {
  return (
    <div className="flex items-center justify-center bg-transparent p-4">
      <button
        onClick={onStartGame}
        className="px-8 py-4 bg-[#fee440] text-[#16213e] rounded-full text-lg font-semibold hover:bg-[#ffd23f] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Start Game
      </button>
    </div>
  )
}

