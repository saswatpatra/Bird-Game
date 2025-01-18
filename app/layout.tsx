import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bird Game',
  description: 'A fun game to test your bird knowledge',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insta%20dp%20(1)-yFqQWtusAztzvehNnpL21qmjqytbXa.png',
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insta%20dp%20(1)-yFqQWtusAztzvehNnpL21qmjqytbXa.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insta%20dp%20(1)-yFqQWtusAztzvehNnpL21qmjqytbXa.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insta%20dp%20(1)-yFqQWtusAztzvehNnpL21qmjqytbXa.png" />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

