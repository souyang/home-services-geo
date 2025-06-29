import Link from "next/link"
import { Phone, CheckCircle } from "lucide-react"

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  features?: string[]
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Get Free Quote",
  ctaLink = "/contact/",
  features = [],
  backgroundImage = "/placeholder.svg?height=600&width=1200",
}: HeroProps) {
  return (
    <section
      className="relative bg-navy text-white py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 44, 76, 0.8), rgba(28, 44, 76, 0.8)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">{subtitle}</p>

          {features.length > 0 && (
            <ul className="mb-8 space-y-2" role="list">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-blue flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaLink}
              className="btn-primary inline-flex items-center justify-center text-center"
              aria-label={`${ctaText} - Contact us for a free quote`}
            >
              {ctaText}
            </Link>
            <a
              href="tel:+16505550199"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
              aria-label="Call us now at (650) 555-0199"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Call Now: (650) 555-0199</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
