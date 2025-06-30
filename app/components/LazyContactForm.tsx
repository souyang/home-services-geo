'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Phone } from 'lucide-react'

// Dynamically import ContactForm with loading fallback
const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => (
    <div className="bg-white rounded-lg p-6 border flex flex-col items-center">
      <Phone className="w-8 h-8 text-sky-blue animate-pulse mb-2" />
      <div className="h-6 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-100 rounded w-3/4 mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-100 rounded w-2/3 mb-2 animate-pulse"></div>
      <div className="h-10 bg-gray-100 rounded w-full mb-2 animate-pulse"></div>
      <div className="h-10 bg-gray-100 rounded w-full mb-2 animate-pulse"></div>
      <div className="h-10 bg-gray-100 rounded w-full animate-pulse"></div>
    </div>
  ),
  ssr: false
})

export default function LazyContactForm() {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-lg p-6 border flex flex-col items-center">
        <Phone className="w-8 h-8 text-sky-blue animate-pulse mb-2" />
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-100 rounded w-3/4 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-100 rounded w-2/3 mb-2 animate-pulse"></div>
        <div className="h-10 bg-gray-100 rounded w-full mb-2 animate-pulse"></div>
        <div className="h-10 bg-gray-100 rounded w-full mb-2 animate-pulse"></div>
        <div className="h-10 bg-gray-100 rounded w-full animate-pulse"></div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  )
} 