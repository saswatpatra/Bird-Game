import "./globals.css"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "./components/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bird Tap Game",
  description: "A fun and interactive bird-themed tapping game",
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

