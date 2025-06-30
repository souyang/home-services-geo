import { Metadata } from "next"
import Breadcrumbs from "../../components/Breadcrumbs"
import LazyFaqAccordion from '../../components/LazyFaqAccordion'
import LazyContactForm from '../../components/LazyContactForm'

export const metadata: Metadata = {
  title: "Professional Roofing Services | Skyline Home Services",
  description: "Expert roofing services including roof inspections, leak repairs, gutter installation, and complete roof replacement. Licensed roofers serving Palo Alto, Menlo Park, and Mountain View.",
  keywords: ["roofing Palo Alto", "roof repair", "gutter installation", "roof replacement", "roof inspection"],
}

export default function RoofingPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Services', href: '/services/' },
        { label: 'Roofing Services' }
      ]} />

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-navy mb-6">
            Professional Roofing Services
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Protect your home with professional roofing services from Skyline Home Services. 
            Our licensed roofers provide comprehensive roofing solutions for residential and commercial 
            properties throughout Palo Alto, Menlo Park, and Mountain View.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-poppins font-bold text-2xl text-navy mb-4">Our Roofing Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Comprehensive roof inspections and assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Leak detection and emergency roof repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Shingle and tile replacement services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Gutter installation, repair, and cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Skylight installation and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Complete roof replacement and installation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Roof ventilation and insulation services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-light-gray rounded-lg p-6">
              <h3 className="font-poppins font-semibold text-xl text-navy mb-4">Why Choose Our Roofers?</h3>
              <ul className="space-y-2">
                <li>✓ Licensed and insured roofing contractors</li>
                <li>✓ Quality materials and manufacturer warranties</li>
                <li>✓ Emergency leak repair services</li>
                <li>✓ Clean, professional installation</li>
                <li>✓ Satisfaction guarantee on all work</li>
                <li>✓ Local building code compliance</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-12">
            <h3 className="font-poppins font-bold text-xl text-orange-800 mb-3">
              🏠 Roof Inspection & Maintenance
            </h3>
            <p className="text-orange-700 mb-4">
              Regular roof inspections can prevent costly repairs and extend your roof's lifespan. 
              Our certified inspectors can identify potential issues before they become major problems.
            </p>
            <a 
              href="/contact/" 
              className="bg-orange-800 hover:bg-orange-900 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Schedule Roof Inspection
            </a>
          </div>

          <LazyFaqAccordion 
            title="Roofing Services FAQ"
            faqs={[
              {
                question: "How often should I have my roof inspected?",
                answer: "We recommend having your roof inspected at least once a year, preferably in spring or fall. If you've experienced severe weather, it's also a good idea to have an inspection to check for any damage. Regular inspections help catch small issues before they become major problems."
              },
              {
                question: "What are signs that my roof needs repair or replacement?",
                answer: "Common signs include missing or damaged shingles, water stains on ceilings, sagging roof areas, excessive granule loss from shingles, and visible daylight through the roof boards. If you notice any of these issues, contact us for a professional assessment."
              },
              {
                question: "How long does a typical roof replacement take?",
                answer: "The timeline depends on the size and complexity of your roof. A typical residential roof replacement takes 1-3 days for a standard asphalt shingle roof. Tile roofs may take longer due to the complexity of installation. We'll provide a detailed timeline during your estimate."
              },
              {
                question: "Do you offer emergency roof repair services?",
                answer: "Yes, we provide 24/7 emergency roof repair services for urgent issues like active leaks, storm damage, or other critical problems. Our emergency team can quickly assess the situation and make temporary or permanent repairs to prevent further damage."
              },
              {
                question: "What roofing materials do you work with?",
                answer: "We work with all major roofing materials including asphalt shingles, tile roofs, metal roofing, wood shakes, and flat roof systems. We can recommend the best material for your home based on your budget, climate, and aesthetic preferences."
              },
              {
                question: "Do you provide warranties on roofing work?",
                answer: "Yes, we provide comprehensive warranties on all our roofing work. This includes both manufacturer warranties on materials and our workmanship warranty. We'll explain all warranty details during your consultation and provide written documentation."
              }
            ]}
          />

          <div className="mt-12">
            <LazyContactForm />
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Roofing Services",
            "description": "Professional roofing services including roof inspections, leak repairs, gutter installation, and complete roof replacement in Palo Alto, CA.",
            "provider": {
              "@type": "HomeAndConstructionBusiness",
              "name": "Skyline Home Services",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2211 Elm Street",
                "addressLocality": "Palo Alto",
                "addressRegion": "CA",
                "postalCode": "94301"
              },
              "telephone": "(650) 555-0199"
            },
            "areaServed": [
              "Palo Alto, CA",
              "Menlo Park, CA", 
              "Mountain View, CA"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "availableLanguage": "English",
              "servicePhone": "(650) 555-0199",
              "serviceUrl": "https://skylinehomesvc.vercel.app/services/roofing/"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How often should I have my roof inspected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend having your roof inspected at least once a year, preferably in spring or fall. If you've experienced severe weather, it's also a good idea to have an inspection to check for any damage. Regular inspections help catch small issues before they become major problems."
                }
              },
              {
                "@type": "Question",
                "name": "What are signs that my roof needs repair or replacement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common signs include missing or damaged shingles, water stains on ceilings, sagging roof areas, excessive granule loss from shingles, and visible daylight through the roof boards. If you notice any of these issues, contact us for a professional assessment."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a typical roof replacement take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The timeline depends on the size and complexity of your roof. A typical residential roof replacement takes 1-3 days for a standard asphalt shingle roof. Tile roofs may take longer due to the complexity of installation. We'll provide a detailed timeline during your estimate."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer emergency roof repair services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide 24/7 emergency roof repair services for urgent issues like active leaks, storm damage, or other critical problems. Our emergency team can quickly assess the situation and make temporary or permanent repairs to prevent further damage."
                }
              },
              {
                "@type": "Question",
                "name": "What roofing materials do you work with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with all major roofing materials including asphalt shingles, tile roofs, metal roofing, wood shakes, and flat roof systems. We can recommend the best material for your home based on your budget, climate, and aesthetic preferences."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide warranties on roofing work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide comprehensive warranties on all our roofing work. This includes both manufacturer warranties on materials and our workmanship warranty. We'll explain all warranty details during your consultation and provide written documentation."
                }
              }
            ]
          })
        }}
      />
    </>
  )
} 