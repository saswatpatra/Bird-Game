import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bird Tap Game",
  description: "Digital version of the infamous Chidiya Udd game",
  metadataBase: new URL("https://birdtap.vercel.app"),
  openGraph: {
    title: "Bird Tap Game",
    description: "Digital version of the infamous Chidiya Udd game",
    url: "https://birdtap.vercel.app",
    siteName: "Bird Tap Game",
    images: [
      {
        url: "https://birdtap.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bird Tap Game - A fun reflex testing game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bird Tap Game",
    description: "Digital version of the infamous Chidiya Udd game",
    images: ["https://birdtap.vercel.app/og-image.png"],
  },
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rJS9kDybdiTqzqm8poOYOFx9lH92AN.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rJS9kDybdiTqzqm8poOYOFx9lH92AN.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rJS9kDybdiTqzqm8poOYOFx9lH92AN.png",
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
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rJS9kDybdiTqzqm8poOYOFx9lH92AN.png"
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

