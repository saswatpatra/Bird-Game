import "./globals.css"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "./components/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rJS9kDybdiTqzqm8poOYOFx9lH92AN.png"
        />
      </head>
      <ThemeProvider>
        <body>
          {children}
          <SpeedInsights />
        </body>
      </ThemeProvider>
    </html>
  )
}

