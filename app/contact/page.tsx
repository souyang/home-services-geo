import Breadcrumbs from "../components/Breadcrumbs"
import ContactForm from "../components/ContactForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us | Skyline Home Services",
  description:
    "Contact Skyline Home Services for free estimates on plumbing, HVAC, electrical, and roofing services in Palo Alto, CA. Call (650) 555-0199 or fill out our contact form.",
  keywords: ["contact", "free estimate", "Palo Alto home services", "quote"],
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-navy mb-6">
              Contact Skyline Home Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get started on your home service project? Contact us today for your free estimate. We provide
              upfront pricing with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-poppins font-bold text-2xl text-navy mb-6">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-sky-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <a
                      href="tel:+16505550199"
                      className="text-gray-600 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded"
                      aria-label="Call us at (650) 555-0199"
                    >
                      (650) 555-0199
                    </a>
                    <p className="text-sm text-gray-500 mt-1">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sky-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a
                      href="mailto:info@skylinehomesvc.com"
                      className="text-gray-600 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded"
                      aria-label="Email us at info@skylinehomesvc.com"
                    >
                      info@skylinehomesvc.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sky-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Address</h3>
                    <address className="text-gray-600 not-italic">
                      2211 Elm Street
                      <br />
                      Palo Alto, CA 94301
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Business Hours</h3>
                    <div className="text-gray-600">
                      <div>Monday - Saturday: 8:00 AM - 6:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray rounded-lg p-6">
                <h3 className="font-poppins font-semibold text-xl text-navy mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-3">We proudly serve the following communities:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <li>• Palo Alto</li>
                  <li>• Menlo Park</li>
                  <li>• Mountain View</li>
                  <li>• Stanford</li>
                  <li>• East Palo Alto</li>
                  <li>• Atherton</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "HomeAndConstructionBusiness",
              name: "Skyline Home Services",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2211 Elm Street",
                addressLocality: "Palo Alto",
                addressRegion: "CA",
                postalCode: "94301",
                addressCountry: "US",
              },
              telephone: "(650) 555-0199",
              email: "info@skylinehomesvc.com",
              url: "https://skylinehomesvc.com",
              openingHours: ["Mo-Sa 08:00-18:00"],
            },
          }),
        }}
      />
    </>
  )
}
