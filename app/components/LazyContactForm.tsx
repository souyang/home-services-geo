'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Phone } from 'lucide-react'
it coimport LoadingSpinner from './LoadingSpinner'

// Dynamically import ContactForm with loading fallback
const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => (
    <div className="bg-white rounded-lg p-6 border flex flex-col items-center">
      <Phone className="w-8 h-8 text-sky-blue mb-2" />
      <LoadingSpinner size="sm" text="Loading contact form..." />
    </div>
  ),
  ssr: false
})

export default function LazyContactForm() {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-lg p-6 border flex flex-col items-center">
        <Phone className="w-8 h-8 text-sky-blue mb-2" />
        <LoadingSpinner size="sm" text="Loading contact form..." />
      </div>
    }>
      <ContactForm />
    </Suspense>
  )
} 