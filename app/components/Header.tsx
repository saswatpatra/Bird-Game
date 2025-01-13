import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 h-16 bg-[#3d405b] text-[#ffffff] shadow-lg">
      <Link href="/" className="text-xl font-extrabold tracking-wider hover:text-[#ffffff] transition-colors">
        Bird Tap
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

