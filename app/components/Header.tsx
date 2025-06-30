"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isServiceAreasDropdownOpen, setIsServiceAreasDropdownOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
    { name: "Reviews", href: "/reviews/" },
    { name: "Contact", href: "/contact/" },
  ]

  const services = [
    { name: "All Services", href: "/services/" },
    { name: "Plumbing", href: "/services/plumbing/" },
    { name: "HVAC", href: "/services/hvac/" },
    { name: "Roofing", href: "/services/roofing/" },
    { name: "Electrical", href: "/services/electrical/" },
  ]

  const serviceAreas = [
    { name: "All Service Areas", href: "/service-area/" },
    { name: "Palo Alto", href: "/service-area/palo-alto/" },
    { name: "Menlo Park", href: "/service-area/menlo-park/" },
    { name: "Mountain View", href: "/service-area/mountain-view/" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sky-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-poppins font-bold text-xl text-navy">Skyline Home Services</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-sky-blue font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1 group"
            >
              <span className="group-hover:font-semibold transition-all duration-300">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link
              href="/about/"
              className="relative text-gray-700 hover:text-sky-blue font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1 group"
            >
              <span className="group-hover:font-semibold transition-all duration-300">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="relative flex items-center space-x-1 text-gray-700 hover:text-sky-blue font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1 group"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onBlur={() => setTimeout(() => setIsServicesDropdownOpen(false), 150)}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                <span className="group-hover:font-semibold transition-all duration-300">Services</span>
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 animate-in fade-in-0 slide-in-from-top-1 duration-200">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="relative block px-4 py-2 text-sm text-gray-700 hover:text-sky-blue hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 group"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <span className="group-hover:font-semibold transition-all duration-200">{service.name}</span>
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-sky-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Service Areas Dropdown */}
            <div className="relative">
              <button
                className="relative flex items-center space-x-1 text-gray-700 hover:text-sky-blue font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1 group"
                onClick={() => setIsServiceAreasDropdownOpen(!isServiceAreasDropdownOpen)}
                onBlur={() => setTimeout(() => setIsServiceAreasDropdownOpen(false), 150)}
                aria-expanded={isServiceAreasDropdownOpen}
                aria-haspopup="true"
              >
                <span className="group-hover:font-semibold transition-all duration-300">Service Areas</span>
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isServiceAreasDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isServiceAreasDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 animate-in fade-in-0 slide-in-from-top-1 duration-200">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.name}
                      href={area.href}
                      className="relative block px-4 py-2 text-sm text-gray-700 hover:text-sky-blue hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 group"
                      onClick={() => setIsServiceAreasDropdownOpen(false)}
                    >
                      <span className="group-hover:font-semibold transition-all duration-200">{area.name}</span>
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-sky-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/reviews/"
              className="relative text-gray-700 hover:text-sky-blue font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1 group"
            >
              <span className="group-hover:font-semibold transition-all duration-300">Reviews</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link
              href="/contact/"
              className="relative text-gray-700 hover:text-sky-blue font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1 group"
            >
              <span className="group-hover:font-semibold transition-all duration-300">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="w-4 h-4 text-sky-blue" aria-hidden="true" />
            <a
              href="tel:+16505550199"
              className="relative text-navy font-semibold hover:text-sky-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1 group"
              aria-label="Call us at (650) 555-0199"
            >
              <span className="group-hover:font-bold transition-all duration-300">(650) 555-0199</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-sky-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle main menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-sky-blue hover:bg-gray-50 font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="group-hover:font-semibold transition-all duration-200">Home</span>
              </Link>
              
              <Link
                href="/about/"
                className="block px-3 py-2 text-gray-700 hover:text-sky-blue hover:bg-gray-50 font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="group-hover:font-semibold transition-all duration-200">About</span>
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2 group-hover:font-semibold transition-all duration-200">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-blue hover:bg-gray-50 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="group-hover:font-semibold transition-all duration-200">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Service Areas Section */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2 group-hover:font-semibold transition-all duration-200">Service Areas</div>
                <div className="pl-4 space-y-1">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.name}
                      href={area.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-sky-blue hover:bg-gray-50 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="group-hover:font-semibold transition-all duration-200">{area.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href="/reviews/"
                className="block px-3 py-2 text-gray-700 hover:text-sky-blue hover:bg-gray-50 font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="group-hover:font-semibold transition-all duration-200">Reviews</span>
              </Link>
              
              <Link
                href="/contact/"
                className="block px-3 py-2 text-gray-700 hover:text-sky-blue hover:bg-gray-50 font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="group-hover:font-semibold transition-all duration-200">Contact</span>
              </Link>
              
              <div className="px-3 py-2 border-t">
                <a
                  href="tel:+16505550199"
                  className="flex items-center space-x-2 text-navy font-semibold hover:text-sky-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1 group"
                  aria-label="Call us at (650) 555-0199"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span className="group-hover:font-bold transition-all duration-200">(650) 555-0199</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
