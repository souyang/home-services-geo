import Breadcrumbs from "../components/Breadcrumbs"
import ServiceCard from "../components/ServiceCard"
import { Wrench, Thermometer, Zap, Home } from "lucide-react"

export const metadata = {
  title: "Home Services | Skyline Home Services",
  description:
    "Complete home services including plumbing, HVAC, electrical, and roofing in Palo Alto, Menlo Park, and Mountain View. Licensed professionals with 24/7 emergency service.",
  keywords: ["home services", "plumbing", "HVAC", "electrical", "roofing", "Palo Alto", "Menlo Park", "Mountain View"],
}

const services = [
  {
    title: "Plumbing Services",
    description:
      "Complete plumbing solutions from emergency repairs to new installations. Our licensed plumbers use the latest techniques and quality materials.",
    icon: <Wrench className="w-6 h-6" />,
    href: "/services/plumbing/",
    features: [
      "Emergency leak repairs",
      "Water heater installation & repair",
      "Pipe replacement & repiping",
      "Drain cleaning & unclogging",
      "Fixture installation",
      "Sewer line services",
    ],
  },
  {
    title: "HVAC Services",
    description:
      "Professional heating, ventilation, and air conditioning services to keep your home comfortable year-round with energy-efficient solutions.",
    icon: <Thermometer className="w-6 h-6" />,
    href: "/services/hvac/",
    features: [
      "AC installation & repair",
      "Furnace maintenance & replacement",
      "Duct cleaning & sealing",
      "Thermostat installation",
      "Energy efficiency audits",
      "Indoor air quality solutions",
    ],
  },
  {
    title: "Electrical Services",
    description:
      "Safe, code-compliant electrical work by certified electricians. From simple repairs to complete electrical system upgrades.",
    icon: <Zap className="w-6 h-6" />,
    href: "/services/electrical/",
    features: [
      "Panel upgrades & repairs",
      "Outlet & switch installation",
      "Lighting design & installation",
      "Safety inspections & code compliance",
      "Generator installation & maintenance",
      "Smart home electrical solutions",
    ],
  },
  {
    title: "Roofing Services",
    description:
      "Comprehensive roofing solutions to protect your home. From minor repairs to complete roof replacements using quality materials.",
    icon: <Home className="w-6 h-6" />,
    href: "/services/roofing/",
    features: [
      "Roof inspections & assessments",
      "Leak detection & repair",
      "Shingle & tile replacement",
      "Gutter installation & cleaning",
      "Skylight installation",
      "Complete roof replacement",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-navy mb-6">Professional Home Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home maintenance and repair services for Palo Alto, Menlo Park, and Mountain View. All work
              performed by licensed professionals with a satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="mt-16 bg-light-gray rounded-lg p-8 text-center">
            <h2 className="font-poppins font-bold text-2xl text-navy mb-4">Need Multiple Services?</h2>
            <p className="text-gray-600 mb-6">
              Save money with our bundled service packages. We can handle multiple home improvement projects
              efficiently.
            </p>
            <a href="/contact/" className="btn-primary" aria-label="Contact us for bundled service pricing and custom quotes">
              Get Bundled Service Quote
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
