import { Metadata } from "next"
import Breadcrumbs from '../../components/Breadcrumbs'
import LazyFaqAccordion from '../../components/LazyFaqAccordion'
import LazyContactForm from '../../components/LazyContactForm'

export const metadata: Metadata = {
  title: "Professional Plumbing Services | Skyline Home Services",
  description: "Expert plumbing services including emergency repairs, water heater installation, pipe replacement, and drain cleaning. Licensed plumbers serving Palo Alto, Menlo Park, and Mountain View.",
  keywords: ["plumber Palo Alto", "emergency plumbing", "water heater repair", "pipe replacement", "drain cleaning"],
}

export default function PlumbingPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Services', href: '/services/' },
        { label: 'Plumbing Services' }
      ]} />

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-navy mb-6">
            Professional Plumbing Services
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            When plumbing problems strike, you need fast, reliable service from licensed professionals. 
            Skyline Home Services provides comprehensive plumbing solutions for residential and commercial 
            properties throughout Palo Alto, Menlo Park, and Mountain View.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-poppins font-bold text-2xl text-navy mb-4">Our Plumbing Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Emergency plumbing repairs (24/7 availability)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Water heater installation, repair, and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Pipe replacement and repiping services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Drain cleaning and unclogging</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Fixture installation (faucets, toilets, sinks)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Sewer line inspection and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Leak detection and water damage prevention</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-light-gray rounded-lg p-6">
              <h3 className="font-poppins font-semibold text-xl text-navy mb-4">Why Choose Our Plumbers?</h3>
              <ul className="space-y-2">
                <li>✓ Licensed and insured professionals</li>
                <li>✓ Upfront pricing with no hidden fees</li>
                <li>✓ Same-day service available</li>
                <li>✓ Quality parts and materials</li>
                <li>✓ Satisfaction guarantee on all work</li>
                <li>✓ Clean, respectful service</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <h3 className="font-poppins font-bold text-xl text-red-800 mb-3">
              🚨 Plumbing Emergency? Call Now!
            </h3>
            <p className="text-red-700 mb-4">
              Don't let a plumbing emergency cause water damage to your home. Our emergency plumbers 
              are available 24/7 for urgent repairs.
            </p>
            <a 
              href="tel:+16505550199" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Call Emergency Line: (650) 555-0199
            </a>
          </div>

          <LazyFaqAccordion 
            title="Plumbing Services FAQ"
            faqs={[
              {
                question: "Do you offer 24/7 emergency plumbing services?",
                answer: "Yes, we provide 24/7 emergency plumbing services for urgent issues like burst pipes, major leaks, or sewer backups. Our emergency technicians are available around the clock to prevent water damage and restore your plumbing system."
              },
              {
                question: "How much do plumbing services cost?",
                answer: "Our pricing varies depending on the specific service needed. We provide upfront, transparent pricing with no hidden fees. Emergency services may have additional charges for after-hours calls. Contact us for a free estimate on your plumbing project."
              },
              {
                question: "Are your plumbers licensed and insured?",
                answer: "Absolutely. All our plumbers are fully licensed by the state of California and carry comprehensive insurance. We also perform background checks on all technicians for your peace of mind and safety."
              },
              {
                question: "What areas do you serve for plumbing services?",
                answer: "We provide plumbing services throughout Palo Alto, Menlo Park, Mountain View, and surrounding Peninsula communities. Contact us to confirm service availability in your specific area."
              },
              {
                question: "Do you guarantee your plumbing work?",
                answer: "Yes, we stand behind all our plumbing work with a comprehensive satisfaction guarantee. If you're not completely satisfied with our service, we'll make it right. We also provide warranties on parts and labor for most services."
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
            "name": "Plumbing Services",
            "description": "Professional plumbing services including emergency repairs, water heater installation, pipe replacement, and drain cleaning in Palo Alto, CA.",
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
              "serviceUrl": "https://skylinehomesvc.vercel.app/services/plumbing/"
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
                "name": "Do you offer 24/7 emergency plumbing services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide 24/7 emergency plumbing services for urgent issues like burst pipes, major leaks, or sewer backups. Our emergency technicians are available around the clock to prevent water damage and restore your plumbing system."
                }
              },
              {
                "@type": "Question",
                "name": "How much do plumbing services cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our pricing varies depending on the specific service needed. We provide upfront, transparent pricing with no hidden fees. Emergency services may have additional charges for after-hours calls. Contact us for a free estimate on your plumbing project."
                }
              },
              {
                "@type": "Question",
                "name": "Are your plumbers licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. All our plumbers are fully licensed by the state of California and carry comprehensive insurance. We also perform background checks on all technicians for your peace of mind and safety."
                }
              },
              {
                "@type": "Question",
                "name": "What areas do you serve for plumbing services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide plumbing services throughout Palo Alto, Menlo Park, Mountain View, and surrounding Peninsula communities. Contact us to confirm service availability in your specific area."
                }
              },
              {
                "@type": "Question",
                "name": "Do you guarantee your plumbing work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we stand behind all our plumbing work with a comprehensive satisfaction guarantee. If you're not completely satisfied with our service, we'll make it right. We also provide warranties on parts and labor for most services."
                }
              }
            ]
          })
        }}
      />
    </>
  )
} 