import { Metadata } from "next"
import Breadcrumbs from '../../components/Breadcrumbs'
import LazyFaqAccordion from '../../components/LazyFaqAccordion'
import LazyContactForm from '../../components/LazyContactForm'

export const metadata: Metadata = {
  title: "Professional HVAC Services - Heating & Air Conditioning | Skyline Home Services",
  description: "Professional HVAC services including AC installation, furnace repair, duct cleaning, and energy efficiency upgrades. Serving Palo Alto, Menlo Park, and Mountain View.",
  keywords: ["HVAC Palo Alto", "air conditioning repair", "furnace installation", "duct cleaning", "energy efficiency"],
}

export default function HvacPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: 'Services', href: '/services/' },
        { label: 'HVAC Services' }
      ]} />

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-navy mb-6">
            Professional HVAC Services
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Keep your home comfortable year-round with professional HVAC services from Skyline Home Services. 
            Our certified technicians provide expert heating, ventilation, and air conditioning solutions 
            throughout Palo Alto, Menlo Park, and Mountain View.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-poppins font-bold text-2xl text-navy mb-4">Our HVAC Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Air conditioning installation and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Furnace maintenance and replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Duct cleaning and sealing services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Thermostat installation and programming</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Energy efficiency audits and upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Indoor air quality solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Heat pump installation and service</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-light-gray rounded-lg p-6">
              <h3 className="font-poppins font-semibold text-xl text-navy mb-4">HVAC Expertise</h3>
              <ul className="space-y-2">
                <li>✓ NATE-certified technicians</li>
                <li>✓ Energy-efficient system recommendations</li>
                <li>✓ Preventive maintenance programs</li>
                <li>✓ Emergency repair services</li>
                <li>✓ Manufacturer warranties honored</li>
                <li>✓ Financing options available</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
            <h3 className="font-poppins font-bold text-xl text-blue-800 mb-3">
              🌡️ Seasonal HVAC Maintenance
            </h3>
            <p className="text-blue-700 mb-4">
              Regular maintenance keeps your HVAC system running efficiently and extends its lifespan. 
              Schedule your seasonal tune-up to avoid unexpected breakdowns and save on energy costs.
            </p>
            <a 
              href="/contact/" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Schedule Maintenance
            </a>
          </div>

          <LazyFaqAccordion 
            title="HVAC Services FAQ"
            faqs={[
              {
                question: "How often should I service my HVAC system?",
                answer: "We recommend servicing your HVAC system twice a year - once in spring for your air conditioning and once in fall for your heating system. Regular maintenance helps prevent breakdowns, improves efficiency, and extends the life of your equipment."
              },
              {
                question: "What are signs that my HVAC system needs repair?",
                answer: "Common signs include unusual noises, inconsistent temperatures, higher energy bills, poor air quality, frequent cycling on/off, and weak airflow. If you notice any of these issues, contact us for a professional diagnosis."
              },
              {
                question: "How long do HVAC systems typically last?",
                answer: "With proper maintenance, air conditioning units typically last 15-20 years, while furnaces can last 20-25 years. Factors like usage, maintenance, and quality of installation affect lifespan. We can assess your system and recommend the best course of action."
              },
              {
                question: "Do you offer energy-efficient HVAC solutions?",
                answer: "Yes, we specialize in high-efficiency HVAC systems that can significantly reduce your energy costs. We offer ENERGY STAR certified equipment and can perform energy audits to identify opportunities for improved efficiency."
              },
              {
                question: "What financing options are available for HVAC installation?",
                answer: "We offer flexible financing options for HVAC installations, including 0% interest plans for qualified customers. We also help you take advantage of available rebates and tax credits for energy-efficient equipment."
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
            "name": "HVAC Services",
            "description": "Professional HVAC services including air conditioning installation, furnace repair, duct cleaning, and energy efficiency upgrades in Palo Alto, CA.",
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
              "serviceUrl": "https://skylinehomesvc.vercel.app/services/hvac/"
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
                "name": "How often should I service my HVAC system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend servicing your HVAC system twice a year - once in spring for your air conditioning and once in fall for your heating system. Regular maintenance helps prevent breakdowns, improves efficiency, and extends the life of your equipment."
                }
              },
              {
                "@type": "Question",
                "name": "What are signs that my HVAC system needs repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common signs include unusual noises, inconsistent temperatures, higher energy bills, poor air quality, frequent cycling on/off, and weak airflow. If you notice any of these issues, contact us for a professional diagnosis."
                }
              },
              {
                "@type": "Question",
                "name": "How long do HVAC systems typically last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With proper maintenance, air conditioning units typically last 15-20 years, while furnaces can last 20-25 years. Factors like usage, maintenance, and quality of installation affect lifespan. We can assess your system and recommend the best course of action."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer energy-efficient HVAC solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in high-efficiency HVAC systems that can significantly reduce your energy costs. We offer ENERGY STAR certified equipment and can perform energy audits to identify opportunities for improved efficiency."
                }
              },
              {
                "@type": "Question",
                "name": "What financing options are available for HVAC installation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer flexible financing options for HVAC installations, including 0% interest plans for qualified customers. We also help you take advantage of available rebates and tax credits for energy-efficient equipment."
                }
              }
            ]
          })
        }}
      />
    </>
  )
} 