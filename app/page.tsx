import Header from './components/Header'
import Footer from './components/Footer'
import GameContainer from './components/GameContainer'

export default function BirdGame() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1de] text-[#f1f1f1]">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start pt-8 px-6 pb-6">
        <h1 className="text-5xl font-bold mt-4 mb-4 text-[#3d405b] text-center">Bird Game</h1>
        <p className="text-xl mb-6 text-[#3d405b] text-center">Click on "Bird" button when a bird name comes up</p>
        <div className="w-full max-w-md mb-auto"> {/* Added mb-auto */}
          <GameContainer />
        </div>
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  )
}

