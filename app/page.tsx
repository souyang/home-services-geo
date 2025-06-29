import Hero from "./components/Hero"
import ServiceCard from "./components/ServiceCard"
import ReviewCard from "./components/ReviewCard"
import { Wrench, Thermometer, Zap, Home, Star } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Professional Home Services in Palo Alto, CA | Skyline Home Services",
  description:
    "Expert plumbing, HVAC, electrical, and roofing services in Palo Alto, Menlo Park, and Mountain View. Licensed, insured, and trusted since 2010. Get your free quote today!",
  keywords: [
    "home services Palo Alto",
    "plumber Palo Alto",
    "HVAC Palo Alto",
    "electrician Palo Alto",
    "roofing Palo Alto",
  ],
}

const services = [
  {
    title: "Plumbing Services",
    description:
      "From leaky faucets to complete pipe replacements, our licensed plumbers handle all your plumbing needs with precision and care.",
    icon: <Wrench className="w-6 h-6" />,
    href: "/services/plumbing/",
    features: [
      "Emergency 24/7 service",
      "Leak detection & repair",
      "Pipe installation & replacement",
      "Water heater services",
    ],
  },
  {
    title: "HVAC Services",
    description:
      "Keep your home comfortable year-round with our comprehensive heating, ventilation, and air conditioning services.",
    icon: <Thermometer className="w-6 h-6" />,
    href: "/services/hvac/",
    features: [
      "AC installation & repair",
      "Heating system maintenance",
      "Duct cleaning & sealing",
      "Energy efficiency upgrades",
    ],
  },
  {
    title: "Electrical Services",
    description:
      "Safe, reliable electrical work from certified electricians. We handle everything from outlets to complete rewiring.",
    icon: <Zap className="w-6 h-6" />,
    href: "/services/electrical/",
    features: ["Panel upgrades & repairs", "Outlet & switch installation", "Lighting solutions", "Safety inspections"],
  },
  {
    title: "Roofing Services",
    description:
      "Protect your home with our professional roofing services. From repairs to complete replacements, we've got you covered.",
    icon: <Home className="w-6 h-6" />,
    href: "/services/roofing/",
    features: ["Roof inspections", "Leak repairs", "Gutter installation", "Complete roof replacement"],
  },
]

const reviews = [
  {
    name: "Sarah Johnson",
    location: "Palo Alto, CA",
    rating: 5,
    review:
      "Excellent service! They fixed our plumbing emergency quickly and professionally. The technician was knowledgeable and explained everything clearly.",
    service: "Plumbing Services",
    date: "2024-01-15",
  },
  {
    name: "Mike Chen",
    location: "Menlo Park, CA",
    rating: 5,
    review:
      "Outstanding HVAC installation. The team was punctual, clean, and the new system works perfectly. Highly recommend Skyline Home Services!",
    service: "HVAC Services",
    date: "2024-01-10",
  },
  {
    name: "Lisa Rodriguez",
    location: "Mountain View, CA",
    rating: 5,
    review:
      "Professional electrical work at a fair price. They upgraded our panel and added new outlets throughout the house. Great communication throughout the project.",
    service: "Electrical Services",
    date: "2024-01-05",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero
        title="Professional Home Services in Palo Alto"
        subtitle="Expert plumbing, HVAC, electrical, and roofing services. Licensed, insured, and trusted by your neighbors since 2010."
        features={[
          "Licensed & Insured Professionals",
          "24/7 Emergency Service Available",
          "Free Estimates & Upfront Pricing",
          "Satisfaction Guaranteed",
        ]}
      />

      {/* Services Section */}
      <section className="py-16 bg-white" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="services-title" className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home services to keep your property in perfect condition. All work backed by our
              satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-light-gray" aria-labelledby="why-choose-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="why-choose-title" className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-4">
              Why Choose Skyline Home Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-navy mb-2">4.9 Star Rating</h3>
              <p className="text-gray-600">
                Over 135 five-star reviews from satisfied customers across Palo Alto and surrounding areas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">24</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-navy mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Home emergencies don't wait for business hours. We're available around the clock for urgent repairs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">14+</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-navy mb-2">Years of Experience</h3>
              <p className="text-gray-600">
                Serving the Peninsula since 2010 with professional, reliable service you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white" aria-labelledby="reviews-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="reviews-title" className="font-poppins font-bold text-3xl sm:text-4xl text-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. See what your neighbors are saying about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/reviews/" className="btn-primary" aria-label="Read all customer reviews">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white" aria-labelledby="cta-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for your free estimate. We'll provide upfront pricing with no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary" aria-label="Get your free quote today">
              Get Free Quote
            </Link>
            <a
              href="tel:+16505550199"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
              aria-label="Call us now at (650) 555-0199"
            >
              Call: (650) 555-0199
            </a>
          </div>
        </div>
      </section>

      {/* Structured Data for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            itemReviewed: {
              "@type": "HomeAndConstructionBusiness",
              name: "Skyline Home Services",
            },
            ratingValue: "4.9",
            reviewCount: "135",
            bestRating: "5",
            worstRating: "1",
          }),
        }}
      />
    </>
  )
}
