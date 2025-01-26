import Header from "./components/Header"
import Footer from "./components/Footer"
import GameContainer from "./components/GameContainer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary dark:bg-gray-800 transition-colors duration-200">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start pt-8 px-4 pb-6">
        <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-primary dark:text-white text-center transition-colors duration-200">
          Bird Tap Game
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-primary dark:text-gray-200 text-center transition-colors duration-200">
          Click on "Bird" button when a bird name comes up
        </p>
        <div className="w-full max-w-md mb-auto">
          <GameContainer />
        </div>
      </main>
      <Footer />
    </div>
  )
}

