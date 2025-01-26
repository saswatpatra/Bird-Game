import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 sm:p-3 h-14 sm:h-16 bg-[#3d405b] dark:bg-[#2d3748] text-[#ffffff] shadow-lg transition-colors duration-200 dark:border-b dark:border-white/20">
      <Link
        href="/"
        className="flex items-center gap-1 sm:gap-2 text-sm sm:text-xl font-extrabold tracking-wider hover:text-[#ffffff] transition-colors"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rJS9kDybdiTqzqm8poOYOFx9lH92AN.png"
          alt="Bird Logo"
          width={32}
          height={32}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <span>Bird Tap Game</span>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a
          href="https://github.com/saswatpatra/Chidiya-Udd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-[#577590] dark:bg-[#4b5563] rounded-full hover:bg-[#577590] dark:hover:bg-[#374151] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md text-xs sm:text-sm"
        >
          <Image
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            width={20}
            height={20}
            className="rounded-full w-5 h-5 sm:w-6 sm:h-6"
          />
          <span className="font-semibold text-[#ffffff]">GitHub</span>
        </a>
      </div>
    </header>
  )
}

