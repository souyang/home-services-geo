import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Clock, Star, CheckCircle, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LazyFreeMapClientWrapper from '@/app/components/LazyFreeMapClientWrapper'

export const metadata: Metadata = {
  title: "Mountain View Home Services - Plumbing, HVAC, Electrical, Roofing | Skyline Home Services",
  description: "Professional home services in Mountain View, CA. Licensed contractors serving Downtown, North Bayshore, Shoreline West, Old Mountain View, and Cuesta Park. 24/7 emergency service available.",
  keywords: ["Mountain View", "home services", "plumbing", "HVAC", "electrical", "roofing", "local contractor"],
}

const mountainViewData = {
  name: "Mountain View",
  description: "Comprehensive home services in Mountain View with satisfaction guarantee and trusted local expertise",
  civicCenter: {
    name: "Mountain View City Hall",
    address: "500 Castro St, Mountain View, CA 94041",
    coordinates: { lat: 37.3861, lng: -122.0839 },
    mapUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=500+Castro+St,+Mountain+View,+CA+94041"
  },
  neighborhoods: [
    {
      name: "Downtown",
      description: "Vibrant downtown with Castro Street restaurants, shopping, and entertainment",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    },
    {
      name: "North Bayshore",
      description: "Tech corridor with major companies and modern office complexes",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    },
    {
      name: "Shoreline West",
      description: "Residential area near Shoreline Park and Google campus",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    },
    {
      name: "Old Mountain View",
      description: "Historic neighborhood with character homes and tree-lined streets",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing"]
    },
    {
      name: "Cuesta Park",
      description: "Family-friendly area with excellent schools and parks",
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

export default function MountainViewPage() {
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
              Mountain View Home Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive home services in Mountain View with satisfaction guarantee
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
                Our Service Area in Mountain View
              </h2>
              <p className="text-xl text-gray-600">
                Serving all Mountain View neighborhoods from our local office
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Map */}
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-sky-blue/10 to-navy/10">
                  <CardTitle className="font-poppins text-2xl text-navy">
                    <MapPin className="inline w-6 h-6 mr-2" />
                    Mountain View Civic Center
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {mountainViewData.civicCenter.address}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <LazyFreeMapClientWrapper
                    location={mountainViewData.civicCenter.name}
                    address={mountainViewData.civicCenter.address}
                    coordinates={mountainViewData.civicCenter.coordinates}
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
                  {mountainViewData.neighborhoods.map((neighborhood) => (
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
                Our Services in Mountain View
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive home services tailored to Mountain View's unique needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mountainViewData.services.map((service) => (
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
              Why Choose Skyline Home Services in Mountain View?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep knowledge of Mountain View's building codes, neighborhoods, and unique requirements.
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
              Ready to Get Started in Mountain View?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free estimate on your home service needs
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <p>{mountainViewData.contact.phone}</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Hours</h3>
                <p>{mountainViewData.contact.hours}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Address</h3>
                <p>{mountainViewData.contact.address}</p>
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