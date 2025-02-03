import "./globals.css"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "./components/ThemeContext"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bird Tap Game",
  description: "A fun and interactive bird-themed tapping game",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-QRZnMmqzENNj8lZlRna2aYqbolQSAM.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-QRZnMmqzENNj8lZlRna2aYqbolQSAM.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-QRZnMmqzENNj8lZlRna2aYqbolQSAM.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
