"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useTheme } from "../components/ThemeContext"

export default function Documentation() {
  const { isDark } = useTheme()
  return (
    <div
      className={`min-h-screen flex flex-col ${isDark ? "dark" : ""} bg-[#f4f1de] dark:bg-[#1f2937] transition-colors duration-200`}
    >
      <Header />
      <main className="flex-grow flex flex-col pt-8 px-4 sm:px-8 md:px-16 lg:px-24 pb-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#3d405b] dark:text-[#FFFFFF]">Documentation</h1>

        <p className="text-lg text-[#3d405b] dark:text-[#FFFFFF] mb-8">
          "Bird Tap Game" has been inspired by a very popular children's game in India, known as "Chidiya Udd". The
          original game involves players sitting in circles where one person acts as a leader and says "Chidiya Udd"
          while raising their finger. The others must raise their fingers quickly if the named thing can fly (like a
          bird). If the leader says something that cannot fly (like "Dog Udd") and a player raises their finger, they
          lose.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-[#3d405b] dark:text-[#FFFFFF]">How to play</h2>
        <p className="text-lg text-[#3d405b] dark:text-[#FFFFFF] mb-8">
          To play this game, click on the "Start Game" button, wait for the countdown and then some random words would
          be coming up, in which some would be bird names. Click on the "Bird" button within 2 seconds when a bird name
          comes up to count a score. If you click on the "Bird" button on some non-bird names, then the game would end.
          Also, if could not click on the "Bird" button within 2 seconds when a bird name shows up then the game ends.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-[#3d405b] dark:text-[#FFFFFF]">Credits</h2>
        <p className="text-lg text-[#3d405b] dark:text-[#FFFFFF]">
          This game was developed by Saswat Patra using v0 whose source files can be found by clicking on "Github"
          button on header
        </p>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

