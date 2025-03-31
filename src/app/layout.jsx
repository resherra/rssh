import "../components/ui/globals.css"

//analytics
import { AnalyticsWrapper } from "../components/analytics/Analytics"
//fonts
import localFont from "next/font/local"

//modules
import Header from "../components/ui/shared/header"
import Footer from "../components/ui/shared/footer"
import Container from "../components/modules/Container"

//next-themes
import Provider from "../components/Provider/Providers"

export const metadata = {
  metadataBase: new URL("https://resherra.vercel.app/"),

  title: {
    default: "rssh | Home",
    template: "rssh | %s",
  },
  description: "Hello, i'm Redouan. Front-end developer and UI designer. I help Independents and startups founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.",
  openGraph: {
    title: "rssh | Hey folks!",
    description: "Hello, i'm Redouan. Front-end developer and UI designer. I help Independents and startups founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.",
    url: "https://rssh",
    siteName: "rssh",
    images: [
      {
        url: "https://resherra.vercel.app/assets/og/og.jpg",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rssh | Hey folks!",
    description: "Hello, i'm Redouan. Front-end developer and UI designer. I help Independents and startups founders to Ideate. Prototype. Build. User-friendly experiences and ship it Faster.",
    creator: "@resherra",
    images: ["https://resherra.vercel.app/assets/og/og.jpg"],
  },
  icons: {
    icon: "/assets/favicon-32x32.png",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  category: "technology",
}

const domaine = localFont({
  src: [
    {
      path: "./../../public/fonts/TestDomaineDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "./../../public/fonts/TestDomaineDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "./../../public/fonts/TestDomaineDisplay-Semibold.otf",
      weight: "600",
    },
  ],
  variable: "--font-domaine",
})

const mark = localFont({
  src: "./../../public/fonts/FFMarkPro.otf",

  variable: "--font-mark",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${domaine.variable} ${mark.variable} font-sans scroll-smooth scrollbar overflow-x-hidden bg-black`}>
        <Provider>
          <Header />
          <div className="main-container">
            <Container>{children}</Container>
          </div>
          <Footer />
        </Provider>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
