"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
    { name: "Services", href: "/services/" },
    { name: "Service Areas", href: "/service-area/" },
    { name: "Reviews", href: "/reviews/" },
    { name: "Contact", href: "/contact/" },
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-sky-blue font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="w-4 h-4 text-sky-blue" aria-hidden="true" />
            <a
              href="tel:+16505550199"
              className="text-navy font-semibold hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Call us at (650) 555-0199"
            >
              (650) 555-0199
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-sky-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2"
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
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-sky-blue hover:bg-gray-50 font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t">
                <a
                  href="tel:+16505550199"
                  className="flex items-center space-x-2 text-navy font-semibold hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded px-2 py-1"
                  aria-label="Call us at (650) 555-0199"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>(650) 555-0199</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
