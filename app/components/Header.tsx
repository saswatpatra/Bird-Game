import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 h-16 bg-[#3d405b] text-[#ffffff] shadow-lg">
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-extrabold tracking-wider hover:text-[#ffffff] transition-colors"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rJS9kDybdiTqzqm8poOYOFx9lH92AN.png"
          alt="Bird Logo"
          width={40}
          height={40}
          className="w-15 h-15"
        />
        <span>Bird Tap Game</span>
      </Link>
      <a
        href="https://github.com/saswatpatra/Chidiya-Udd"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1 bg-[#577590] rounded-full hover:bg-[#577590] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
      >
        <Image
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="font-semibold text-[#ffffff]">GitHub</span>
      </a>
    </header>
  )
}

