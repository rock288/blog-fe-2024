import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { URL_HOST } from "@/configs"

const nunito = localFont({
  src: "./fonts/Nunito/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  weight: "100 800 900",
})

export const metadata: Metadata = {
  title: "rock288.com",
  description: "A software maker working mostly in JavaScript and Go.",
  keywords: "React, Nodejs, Go, AWS",
  creator: "rock288",
  icons: [
    {
      url: "/favicon.png",
    },
  ],
  openGraph: {
    type: "website",
    url: URL_HOST,
    title: "rock288.com",
    description: "A software maker working mostly in JavaScript and Go.",
    siteName: "rock288.com",
    images: [
      {
        url: "/favicon.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
