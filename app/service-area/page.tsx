import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import IntersectionMap from "@/app/components/IntersectionMap"

export const metadata: Metadata = {
  title: "Service Areas - Palo Alto, Menlo Park, Mountain View | Skyline Home Services",
  description: "Professional home services in Palo Alto, Menlo Park, and Mountain View. Licensed contractors serving the entire Peninsula with plumbing, HVAC, electrical, and roofing services.",
  keywords: ["Palo Alto", "Menlo Park", "Mountain View", "home services", "local contractor", "Peninsula"],
}

const serviceAreas = [
  {
    name: "Palo Alto",
    slug: "palo-alto",
    description: "Serving all Palo Alto neighborhoods with professional home services",
    address: "250 Hamilton Ave, Palo Alto, CA 94301",
    civicCenter: "Palo Alto City Hall",
    phone: "(650) 555-0199",
    hours: "24/7 Emergency Service Available",
    features: ["Downtown", "Stanford Area", "College Terrace", "Barron Park", "Midtown"],
    mapUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=250+Hamilton+Ave,+Palo+Alto,+CA+94301",
    coordinates: { lat: 37.4419, lng: -122.1430 }
  },
  {
    name: "Menlo Park",
    slug: "menlo-park", 
    description: "Expert home services throughout Menlo Park with same-day availability",
    address: "701 Laurel St, Menlo Park, CA 94025",
    civicCenter: "Menlo Park City Hall",
    phone: "(650) 555-0199",
    hours: "24/7 Emergency Service Available",
    features: ["Downtown", "Sharon Heights", "West Menlo Park", "Belle Haven", "Willows"],
    mapUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=701+Laurel+St,+Menlo+Park,+CA+94025",
    coordinates: { lat: 37.4538, lng: -122.1822 }
  },
  {
    name: "Mountain View",
    slug: "mountain-view",
    description: "Comprehensive home services in Mountain View with satisfaction guarantee",
    address: "500 Castro St, Mountain View, CA 94041",
    civicCenter: "Mountain View City Hall",
    phone: "(650) 555-0199",
    hours: "24/7 Emergency Service Available", 
    features: ["Downtown", "North Bayshore", "Shoreline West", "Old Mountain View", "Cuesta Park"],
    mapUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=500+Castro+St,+Mountain+View,+CA+94041",
    coordinates: { lat: 37.3861, lng: -122.0839 }
  }
]

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/5 to-navy/5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-blue to-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Our Service Areas
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional home services throughout the Peninsula
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceAreas.map((area) => (
                <Badge key={area.slug} variant="secondary" className="text-lg px-4 py-2">
                  {area.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <Card key={area.slug} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-sky-blue/10 to-navy/10">
                  <CardTitle className="font-poppins text-2xl text-navy">{area.name}</CardTitle>
                  <CardDescription className="text-lg">{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Map Placeholder */}
                  <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden">
                    <IntersectionMap
                      location={area.civicCenter}
                      address={area.address}
                      coordinates={area.coordinates}
                      zoom={13}
                    />
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-sky-blue" />
                      <span className="font-medium">{area.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-sky-blue" />
                      <span className="text-sm">{area.hours}</span>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Serving Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-sky-blue hover:bg-sky-blue/90">
                      <Link href={`/service-area/${area.slug}/`}>
                        Learn More About {area.name}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact/">
                        Get Free Estimate
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-8">
              Why Choose Skyline Home Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Over 14 years serving the Peninsula with deep knowledge of local building codes and requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">24/7 Availability</h3>
                <p className="text-gray-600">
                  Emergency services available around the clock for urgent plumbing, electrical, and HVAC issues.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed by the state of California with comprehensive insurance coverage for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-blue to-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free estimate on your home service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-navy hover:bg-gray-100">
              <Link href="/contact/">
                Get Free Estimate
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              <Link href="tel:650-555-0199">
                Call (650) 555-0199
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 