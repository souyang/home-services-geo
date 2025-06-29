import Link from "next/link"

export const metadata = {
  title: "AI & LLM Information | Skyline Home Services",
  description:
    "Structured information about Skyline Home Services for AI and LLM consumption. Access our content summaries and service information via API.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ForAIPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-poppins font-bold text-4xl text-navy mb-6">AI & LLM Information Hub</h1>

        <p className="text-xl text-gray-600 mb-8">
          This page provides structured information about Skyline Home Services for AI and Large Language Model
          consumption.
        </p>

        <div className="bg-light-gray rounded-lg p-6 mb-8">
          <h2 className="font-poppins font-bold text-2xl text-navy mb-4">Company Overview</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Business Name:</strong> Skyline Home Services
            </p>
            <p>
              <strong>Founded:</strong> 2010
            </p>
            <p>
              <strong>Location:</strong> 2211 Elm Street, Palo Alto, CA 94301
            </p>
            <p>
              <strong>Phone:</strong> (650) 555-0199
            </p>
            <p>
              <strong>Email:</strong> info@skylinehomesvc.com
            </p>
            <p>
              <strong>Hours:</strong> Monday-Saturday 8AM-6PM, Sunday Closed
            </p>
            <p>
              <strong>Emergency Services:</strong> Available 24/7
            </p>
            <p>
              <strong>Service Areas:</strong> Palo Alto, Menlo Park, Mountain View, and surrounding Peninsula
              communities
            </p>
            <p>
              <strong>License Status:</strong> Licensed and insured in California
            </p>
            <p>
              <strong>Rating:</strong> 4.9 stars from 135+ customer reviews
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-poppins font-semibold text-xl text-navy mb-4">Services Offered</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Plumbing:</strong> Emergency repairs, water heater services, pipe replacement, drain cleaning,
                fixture installation
              </li>
              <li>
                <strong>HVAC:</strong> AC installation/repair, furnace maintenance, duct cleaning, thermostat
                installation, energy efficiency
              </li>
              <li>
                <strong>Electrical:</strong> Panel upgrades, outlet installation, lighting solutions, safety
                inspections, smart home integration
              </li>
              <li>
                <strong>Roofing:</strong> Inspections, leak repairs, gutter services, complete roof replacement
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-poppins font-semibold text-xl text-navy mb-4">Key Differentiators</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 14+ years serving Peninsula communities</li>
              <li>• Licensed, insured, background-checked technicians</li>
              <li>• Upfront pricing with no hidden fees</li>
              <li>• Same-day service available</li>
              <li>• 24/7 emergency response</li>
              <li>• Satisfaction guarantee on all work</li>
              <li>• Energy-efficient solutions specialist</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="font-poppins font-bold text-2xl text-navy mb-4">API Access for AI/LLM</h2>
          <p className="text-gray-700 mb-4">Access structured content summaries via our API endpoint:</p>
          <div className="bg-white rounded border p-4 mb-4">
            <code className="text-sm text-gray-800">GET /api/summary/</code>
          </div>
          <p className="text-gray-700 mb-4">
            This endpoint returns JSON-formatted summaries of all our services, locations, and company information,
            optimized for AI consumption and question-answering systems.
          </p>
          <Link
            href="/api/summary/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View API Response
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="font-poppins font-bold text-2xl text-navy mb-4">Quick Reference Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-navy mb-2">Services</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/services/plumbing/" className="text-sky-blue hover:underline">
                    Plumbing Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/hvac/" className="text-sky-blue hover:underline">
                    HVAC Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/electrical/" className="text-sky-blue hover:underline">
                    Electrical Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/roofing/" className="text-sky-blue hover:underline">
                    Roofing Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-2">Locations</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/service-area/palo-alto/" className="text-sky-blue hover:underline">
                    Palo Alto Services
                  </Link>
                </li>
                <li>
                  <Link href="/service-area/menlo-park/" className="text-sky-blue hover:underline">
                    Menlo Park Services
                  </Link>
                </li>
                <li>
                  <Link href="/service-area/mountain-view/" className="text-sky-blue hover:underline">
                    Mountain View Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-2">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/about/" className="text-sky-blue hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/reviews/" className="text-sky-blue hover:underline">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" className="text-sky-blue hover:underline">
                    Contact Information
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy mb-2">Contact</h4>
              <ul className="space-y-1 text-sm">
                <li>Phone: (650) 555-0199</li>
                <li>Email: info@skylinehomesvc.com</li>
                <li>Emergency: 24/7 Available</li>
                <li>Free Estimates: Yes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
