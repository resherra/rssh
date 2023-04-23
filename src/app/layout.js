import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local"
import config from "../data/config"
import "../components/ui/globals.css"

//components

import Header from "../components/modules/Header"
import Footer from "../components/modules/Footer"

const { url, defaultDescription, defaultTitle, twitter } = config

export const metadata = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteName: defaultTitle,
    images: [
      {
        url: `${url}/assets/thumbnail/thumbnail.png`,
        width: 1367,
        height: 1366,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    creator: twitter,
    title: defaultTitle,
    description: defaultDescription,
    site: url,
  },
}

const domaine = localFont({
  src: [
    {
      path: "",
      weight: "400",
    },
    {
      path: "",
      weight: "500",
    },
  ],
  variable: "--font-domaine",
})

const mark = localFont({
  src: "",

  variable: "--font-mark",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${domaine.variable} ${mark.variable} font-sans scroll-smooth text-white bg-secColor scrollbar`}>
        <nav className="selection:bg-stone-200 selection:text-black">{<Header />}</nav>
        <div className={`max-w-screen-lg p-4 lg:px-0 m-auto selection:bg-stone-200 selection:text-black`}>
          {children}
          <Analytics />
        </div>
        <footer>{<Footer />}</footer>
      </body>
    </html>
  )
}
