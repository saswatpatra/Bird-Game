import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#3d405b] text-white py-2 px-6 border-t border-[#577590]">
      <div className="container mx-auto flex justify-between items-center max-w-4xl px-4">
        <div>
          <Link href="https://saswatpatra.carrd.co/" target="_blank" rel="noopener noreferrer">
            With ❤️ <span className="underline">Saswat Patra</span>
          </Link>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Made using</span>
          <Image
            src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/v0.png"
            alt="v0 logo"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  )
}

