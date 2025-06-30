"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/5 to-navy/5 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-poppins font-bold text-6xl md:text-8xl text-navy mb-4">404</h1>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-navy mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-sky-blue text-white px-6 py-3 rounded-lg hover:bg-sky-blue/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
} 