import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SkipToContent from "./components/SkipToContent"
import AskUsBot from "./components/AskUsBot"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Skyline Home Services - Professional Home Services in Palo Alto, CA",
    template: "%s | Skyline Home Services",
  },
  description:
    "Professional plumbing, HVAC, electrical, and roofing services in Palo Alto, Menlo Park, and Mountain View. Licensed, insured, and trusted since 2010.",
  keywords: ["home services", "plumbing", "HVAC", "electrical", "roofing", "Palo Alto", "Menlo Park", "Mountain View"],
  authors: [{ name: "Skyline Home Services" }],
  creator: "Skyline Home Services",
  publisher: "Skyline Home Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skylinehomesvc.vercel.app",
    siteName: "Skyline Home Services",
    title: "Skyline Home Services - Professional Home Services in Palo Alto, CA",
    description:
      "Professional plumbing, HVAC, electrical, and roofing services in Palo Alto, Menlo Park, and Mountain View.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline Home Services - Professional Home Services in Palo Alto, CA",
    description:
      "Professional plumbing, HVAC, electrical, and roofing services in Palo Alto, Menlo Park, and Mountain View.",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Skyline Home Services",
              image: "https://skylinehomesvc.vercel.app/logo.png",
              description:
                "Professional plumbing, HVAC, electrical, and roofing services in Palo Alto, Menlo Park, and Mountain View.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2211 Elm Street",
                addressLocality: "Palo Alto",
                addressRegion: "CA",
                postalCode: "94301",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.4419,
                longitude: -122.143,
              },
              telephone: "(650) 555-0199",
              email: "simonouyang@yahoo.com",
              url: "https://skylinehomesvc.vercel.app",
              openingHours: ["Mo-Sa 08:00-18:00"],
              areaServed: [
                {
                  "@type": "City",
                  name: "Palo Alto",
                  addressRegion: "CA",
                },
                {
                  "@type": "City",
                  name: "Menlo Park",
                  addressRegion: "CA",
                },
                {
                  "@type": "City",
                  name: "Mountain View",
                  addressRegion: "CA",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "135",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 font-inter antialiased">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <AskUsBot />
      </body>
    </html>
  )
}
