import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Clock, Star, CheckCircle, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FreeMap from "@/app/components/FreeMap"

export const metadata: Metadata = {
  title: "Menlo Park Home Services - Plumbing, HVAC, Electrical, Roofing | Skyline Home Services",
  description: "Professional home services in Menlo Park, CA. Licensed contractors serving Downtown, Sharon Heights, West Menlo Park, Belle Haven, and Willows. 24/7 emergency service available.",
  keywords: ["Menlo Park", "home services", "plumbing", "HVAC", "electrical", "roofing", "local contractor"],
}

const menloParkData = {
  name: "Menlo Park",
  description: "Expert home services throughout Menlo Park with same-day availability and 24/7 emergency service",
  civicCenter: {
    name: "Menlo Park City Hall",
    address: "701 Laurel St, Menlo Park, CA 94025",
    coordinates: { lat: 37.4538, lng: -122.1822 },
    mapUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=701+Laurel+St,+Menlo+Park,+CA+94025"
  },
  neighborhoods: [
    {
      name: "Downtown",
      description: "Historic downtown with shopping, dining, and the famous Menlo Park Caltrain station",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    },
    {
      name: "Sharon Heights",
      description: "Upscale residential area with beautiful homes and excellent schools",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    },
    {
      name: "West Menlo Park",
      description: "Family-friendly neighborhood with parks and community amenities",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    },
    {
      name: "Belle Haven",
      description: "Diverse community with strong neighborhood connections",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    },
    {
      name: "Willows",
      description: "Charming neighborhood with tree-lined streets and local businesses",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    }
  ],
  services: [
    {
      name: "Plumbing Services",
      description: "Emergency plumbing repairs, installations, and maintenance",
      features: ["24/7 Emergency Service", "Licensed Plumbers", "Free Estimates", "Same-Day Service"]
    },
    {
      name: "HVAC Services", 
      description: "Heating, ventilation, and air conditioning solutions",
      features: ["AC Installation", "Heating Repair", "Duct Cleaning", "Energy Efficiency"]
    },
    {
      name: "Electrical Services",
      description: "Safe and reliable electrical work by certified electricians",
      features: ["Panel Upgrades", "Outlet Installation", "Lighting Solutions", "Safety Inspections"]
    },
    {
      name: "Roofing Services",
      description: "Complete roofing solutions to protect your home",
      features: ["Roof Inspections", "Leak Repairs", "Gutter Installation", "Complete Replacement"]
    }
  ],
  contact: {
    phone: "(650) 555-0199",
    hours: "24/7 Emergency Service Available",
    address: "2211 Elm Street, Palo Alto, CA 94301"
  }
}

export default function MenloParkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/5 to-navy/5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-blue to-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-sky-blue bg-white">
              Service Area
            </Badge>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Menlo Park Home Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert home services throughout Menlo Park with same-day availability
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
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-4">
                Our Service Area in Menlo Park
              </h2>
              <p className="text-xl text-gray-600">
                Serving all Menlo Park neighborhoods from our local office
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Map */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-sky-blue/10 to-navy/10">
                  <CardTitle className="font-poppins text-2xl text-navy">
                    <MapPin className="inline w-6 h-6 mr-2" />
                    Menlo Park Civic Center
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {menloParkData.civicCenter.address}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <FreeMap
                    location={menloParkData.civicCenter.name}
                    address={menloParkData.civicCenter.address}
                    coordinates={menloParkData.civicCenter.coordinates}
                    zoom={14}
                  />
                </CardContent>
              </Card>

              {/* Service Areas */}
              <div className="space-y-6">
                <h3 className="font-poppins font-bold text-2xl text-navy mb-4">
                  Neighborhoods We Serve
                </h3>
                <div className="grid gap-4">
                  {menloParkData.neighborhoods.map((neighborhood) => (
                    <Card key={neighborhood.name} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-navy mb-1">{neighborhood.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{neighborhood.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {neighborhood.services.map((service) => (
                                <Badge key={service} variant="outline" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <CheckCircle className="w-5 h-5 text-sky-blue flex-shrink-0 mt-1" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-4">
                Our Services in Menlo Park
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive home services tailored to Menlo Park's unique needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {menloParkData.services.map((service) => (
                <Card key={service.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl text-navy">{service.name}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-sky-blue" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-8">
              Why Choose Skyline Home Services in Menlo Park?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep knowledge of Menlo Park's building codes, neighborhoods, and unique requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed by the state of California with comprehensive insurance coverage.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600">
                  Available around the clock for urgent plumbing, electrical, and HVAC issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-sky-blue to-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Ready to Get Started in Menlo Park?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free estimate on your home service needs
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <p>{menloParkData.contact.phone}</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Hours</h3>
                <p>{menloParkData.contact.hours}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Address</h3>
                <p>{menloParkData.contact.address}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-navy hover:bg-gray-100">
                <Link href="/contact/">
                  Get Free Estimate
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                <Link href="tel:650-555-0199">
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 