import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-sky-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-poppins font-bold text-xl">Skyline Home Services</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional home services in Palo Alto and surrounding areas. Licensed, insured, and trusted since 2010.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/plumbing/"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hvac/"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  HVAC Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electrical/"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/roofing/"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Roofing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/service-area/palo-alto/"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Palo Alto
                </Link>
              </li>
              <li>
                <Link
                  href="/service-area/menlo-park/"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Menlo Park
                </Link>
              </li>
              <li>
                <Link
                  href="/service-area/mountain-view/"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Mountain View
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="text-gray-300 not-italic">
                  2211 Elm Street
                  <br />
                  Palo Alto, CA 94301
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-blue flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+16505550199"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                  aria-label="Call us at (650) 555-0199"
                >
                  (650) 555-0199
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-blue flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:simonouyang@yahoo.com"
                  className="text-gray-300 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
                  aria-label="Email us at simonouyang@yahoo.com"
                >
                  simonouyang@yahoo.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-sky-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-gray-300">
                  <div>Mon–Sat: 8AM–6PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Skyline Home Services. All rights reserved. |
            <span className="ml-1">Licensed & Insured</span>
          </p>
          <div className="mt-4">
            <a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 bg-sky-blue text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 focus:ring-offset-navy"
              aria-label="Built with Bolt.new - Visit Bolt.new"
            >
              Built with Bolt.new
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
