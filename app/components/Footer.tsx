import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#3d405b] text-white py-2 px-4 border-t border-[#577590] mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm sm:text-base">
          <Link href="https://saswatpatra.carrd.co/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            With ❤️ <span className="underline">Saswat Patra</span>
          </Link>
        </div>
        <div className="flex items-center text-sm sm:text-base">
          <span className="mr-2">Made using</span>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0-y9saCryUoB1WXM18v3pOaaoiMaItpT.webp"
            alt="v0 logo"
            width={20}
            height={20}
          />
        </div>
      </div>
    </footer>
  )
}

