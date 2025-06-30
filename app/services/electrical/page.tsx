import { Metadata } from "next"
import Breadcrumbs from "../../components/Breadcrumbs"
import FaqAccordion from "../../components/FaqAccordion"
import ContactForm from "../../components/ContactForm"

export const metadata: Metadata = {
  title: "Professional Electrical Services in Palo Alto, CA | Skyline Home Services",
  description: "Expert electrical services including panel upgrades, outlet installation, lighting solutions, and safety inspections. Licensed electricians serving Palo Alto, Menlo Park, and Mountain View.",
  keywords: ["electrician Palo Alto", "electrical repair", "panel upgrade", "lighting installation", "safety inspection"],
}

export default function ElectricalPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Services', href: '/services/' },
        { label: 'Electrical Services' }
      ]} />

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-navy mb-6">
            Professional Electrical Services in Palo Alto
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Ensure your home's safety and efficiency with professional electrical services from Skyline Home Services. 
            Our licensed electricians provide comprehensive electrical solutions for residential and commercial 
            properties throughout Palo Alto, Menlo Park, and Mountain View.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-poppins font-bold text-2xl text-navy mb-4">Our Electrical Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Electrical panel upgrades and repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Outlet and switch installation or replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Lighting design and installation (indoor & outdoor)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ceiling fan and appliance wiring</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Whole-home surge protection</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Electrical safety inspections & code compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Smart home device installation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-light-gray rounded-lg p-6">
              <h3 className="font-poppins font-semibold text-xl text-navy mb-4">Why Choose Our Electricians?</h3>
              <ul className="space-y-2">
                <li>✓ Licensed and insured electricians</li>
                <li>✓ Up-to-date with local codes and safety standards</li>
                <li>✓ Fast troubleshooting and emergency repairs</li>
                <li>✓ Clean, professional workmanship</li>
                <li>✓ Satisfaction guarantee on all work</li>
                <li>✓ Energy-efficient solutions</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <h3 className="font-poppins font-bold text-xl text-yellow-800 mb-3">
              ⚡ Electrical Safety & Upgrades
            </h3>
            <p className="text-yellow-700 mb-4">
              Outdated wiring or panels can be a fire hazard. Our team can inspect your system and recommend upgrades to keep your home safe and up to code.
            </p>
            <a 
              href="/contact/" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Schedule Electrical Inspection
            </a>
          </div>

          <FaqAccordion 
            title="Electrical Services FAQ"
            faqs={[
              {
                question: "When should I upgrade my electrical panel?",
                answer: "If your home is over 30 years old, you have frequent breaker trips, or you're adding major appliances, it's time to consider a panel upgrade. Modern panels are safer and can handle today's electrical demands."
              },
              {
                question: "Are your electricians licensed and insured?",
                answer: "Yes, all our electricians are fully licensed by the state of California and carry comprehensive insurance. We also stay current with the latest safety codes and standards."
              },
              {
                question: "Do you offer emergency electrical repairs?",
                answer: "Yes, we provide 24/7 emergency electrical repair services for urgent issues like power outages, exposed wiring, or electrical hazards. Our team responds quickly to restore safety and power."
              },
              {
                question: "Can you help with smart home installations?",
                answer: "Absolutely! We install smart switches, outlets, lighting, thermostats, and other smart home devices. We'll ensure everything is set up safely and works seamlessly with your home network."
              },
              {
                question: "What types of lighting do you install?",
                answer: "We install all types of lighting including recessed, pendant, landscape, security, and energy-efficient LED solutions. We can help you design the perfect lighting for your home or business."
              },
              {
                question: "Do you provide free estimates?",
                answer: "Yes, we offer free estimates for all electrical projects. Contact us to schedule your consultation."
              }
            ]}
          />

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Electrical Services",
            "description": "Professional electrical services including panel upgrades, outlet installation, lighting solutions, and safety inspections in Palo Alto, CA.",
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
              "serviceUrl": "https://skylinehomesvc.vercel.app/services/electrical/"
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
                "name": "When should I upgrade my electrical panel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If your home is over 30 years old, you have frequent breaker trips, or you're adding major appliances, it's time to consider a panel upgrade. Modern panels are safer and can handle today's electrical demands."
                }
              },
              {
                "@type": "Question",
                "name": "Are your electricians licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our electricians are fully licensed by the state of California and carry comprehensive insurance. We also stay current with the latest safety codes and standards."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer emergency electrical repairs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide 24/7 emergency electrical repair services for urgent issues like power outages, exposed wiring, or electrical hazards. Our team responds quickly to restore safety and power."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help with smart home installations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We install smart switches, outlets, lighting, thermostats, and other smart home devices. We'll ensure everything is set up safely and works seamlessly with your home network."
                }
              },
              {
                "@type": "Question",
                "name": "What types of lighting do you install?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We install all types of lighting including recessed, pendant, landscape, security, and energy-efficient LED solutions. We can help you design the perfect lighting for your home or business."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide free estimates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer free estimates for all electrical projects. Contact us to schedule your consultation."
                }
              }
            ]
          })
        }}
      />
    </>
  )
} 