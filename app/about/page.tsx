import Link from "next/link"
import ContactForm from "../components/ContactForm"

export const metadata = {
  title: "About Skyline Home Services - Your Trusted Peninsula Home Service Experts",
  description: "Learn about Skyline Home Services - serving Palo Alto, Menlo Park, and Mountain View since 2010 with professional plumbing, HVAC, electrical, and roofing services.",
  keywords: ["about Skyline Home Services", "Palo Alto home services", "trusted contractor", "licensed plumber", "HVAC contractor"],
}

export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <main id="main-content">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-navy mb-6">
            About Skyline Home Services
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            For over 14 years, Skyline Home Services has been the Peninsula's trusted partner for all your home service needs. 
            From emergency plumbing repairs to complete HVAC installations, we've built our reputation on quality work, 
            honest pricing, and exceptional customer service.
          </p>

          {/* Company Story Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" aria-labelledby="story-heading">
            <div>
              <h2 id="story-heading" className="font-poppins font-bold text-3xl text-navy mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010, Skyline Home Services began with a simple mission: to provide Peninsula homeowners 
                  with reliable, professional home services they could trust. What started as a small family business 
                  has grown into one of the region's most respected home service companies.
                </p>
                <p>
                  Our founder, Simon Ouyang, recognized that homeowners in Palo Alto, Menlo Park, and Mountain View 
                  deserved better than the inconsistent service and hidden fees that were common in the industry. 
                  He built Skyline Home Services on the principles of transparency, quality, and customer satisfaction.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers throughout the Peninsula, maintaining 
                  the same commitment to excellence that guided us from day one.
                </p>
              </div>
            </div>
            
            <div className="bg-light-gray rounded-lg p-8">
              <h3 className="font-poppins font-bold text-2xl text-navy mb-6">Why Choose Skyline?</h3>
              <div className="space-y-4" role="list">
                <div className="flex items-start" role="listitem">
                  <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                    <span className="text-white font-bold text-sm">14+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Years of Experience</h4>
                    <p className="text-sm text-gray-600">Serving Peninsula communities since 2010</p>
                  </div>
                </div>
                <div className="flex items-start" role="listitem">
                  <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                    <span className="text-white font-bold text-sm">4.9</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Customer Rating</h4>
                    <p className="text-sm text-gray-600">From 135+ verified customer reviews</p>
                  </div>
                </div>
                <div className="flex items-start" role="listitem">
                  <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                    <span className="text-white font-bold text-sm">24/7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Emergency Service</h4>
                    <p className="text-sm text-gray-600">Available around the clock for urgent repairs</p>
                  </div>
                </div>
                <div className="flex items-start" role="listitem">
                  <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                    <span className="text-white font-bold text-sm">100%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Licensed & Insured</h4>
                    <p className="text-sm text-gray-600">All technicians fully licensed and insured</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="font-poppins font-bold text-3xl text-navy mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-sky-blue" role="listitem">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-2">Plumbing</h3>
                <p className="text-sm text-gray-600 mb-4">Emergency repairs, water heaters, pipe replacement, and drain cleaning</p>
                <Link href="/services/plumbing/" className="text-blue-700 font-semibold  hover:underline text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-sky-blue" role="listitem">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-2">HVAC</h3>
                <p className="text-sm text-gray-600 mb-4">AC installation, furnace repair, duct cleaning, and energy efficiency</p>
                <Link href="/services/hvac/" className="text-blue-700 font-semibold  hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-sky-blue" role="listitem">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-2">Electrical</h3>
                <p className="text-sm text-gray-600 mb-4">Panel upgrades, outlet installation, lighting, and safety inspections</p>
                <Link href="/services/electrical/" className="text-blue-700 font-semibold  hover:underline text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-sky-blue" role="listitem">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-2">Roofing</h3>
                <p className="text-sm text-gray-600 mb-4">Inspections, leak repairs, gutter services, and complete replacement</p>
                <Link href="/services/roofing/" className="text-blue-700 font-semibold  hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded">
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16" aria-labelledby="values-heading">
            <h2 id="values-heading" className="font-poppins font-bold text-3xl text-navy mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-3">Quality & Reliability</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every job is completed to the highest standards, 
                  using premium materials and proven techniques that stand the test of time.
                </p>
              </div>
              
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen to your needs, provide honest advice, 
                  and ensure every interaction exceeds your expectations.
                </p>
              </div>
              
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We stay current with the latest technologies and techniques, offering energy-efficient 
                  solutions that save you money while protecting the environment.
                </p>
              </div>
            </div>
          </section>

          {/* Service Area */}
          <section className="bg-light-gray rounded-lg p-8 mb-16" aria-labelledby="service-areas-heading">
            <h2 id="service-areas-heading" className="font-poppins font-bold text-3xl text-navy mb-6 text-center">Service Areas</h2>
            <p className="text-center text-gray-600 mb-8">
              We proudly serve the entire Peninsula region with professional home services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
              <div className="text-center" role="listitem">
                <h3 className="font-semibold text-navy mb-2">Palo Alto</h3>
                <p className="text-sm text-gray-600">Downtown, Midtown, Old Palo Alto, College Terrace</p>
                <Link href="/service-area/palo-alto/" className="text-blue-700 font-semibold  hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded">
                  Learn More →
                </Link>
              </div>
              <div className="text-center" role="listitem">
                <h3 className="font-semibold text-navy mb-2">Menlo Park</h3>
                <p className="text-sm text-gray-600">Downtown, Allied Arts, Sharon Heights, Stanford Hills</p>
                <Link href="/service-area/menlo-park/" className="text-blue-700 font-semibold  first-letter:hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded">
                  Learn More →
                </Link>
              </div>
              <div className="text-center" role="listitem">
                <h3 className="font-semibold text-navy mb-2">Mountain View</h3>
                <p className="text-sm text-gray-600">Downtown, North Bayshore, Old Mountain View, Wagon Wheel</p>
                <Link href="/service-area/mountain-view/" className="text-blue-700 font-semibold hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded">
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-navy rounded-lg p-8 text-center text-white" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="font-poppins font-bold text-3xl mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Contact us today for a free estimate on your home service project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+16505550199" 
                className="bg-sky-blue hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy"
                aria-label="Call us at (650) 555-0199"
              >
                Call (650) 555-0199
              </a>
              <Link 
                href="/contact/" 
                className="bg-white hover:bg-gray-100 text-navy font-medium px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
              >
                Get Free Estimate
              </Link>
            </div>
          </section>
        </main>

        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </div>
  )
} 