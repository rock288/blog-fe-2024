import { Layout } from "@/components/common/layout"
import { URL_HOST } from "@/configs"
import Home from "@/modules/home/home"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog of rock288",
  description: "A software maker working mostly in JavaScript and Go.",
  keywords: "React, Nodejs, Go, AWS",
  creator: "rock288",
  icons: [
    {
      url: `${URL_HOST}/favicon.png`,
    },
  ],
  openGraph: {
    type: "website",
    url: URL_HOST,
    title: "Blog of rock288",
    description: "A software maker working mostly in JavaScript and Go.",
    siteName: "rock288.com",
    images: [
      {
        url: `${URL_HOST}/favicon.png`,
        width: 500,
        height: 250,
        alt: "rock288 blog",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
