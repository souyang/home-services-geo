'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { HelpCircle } from 'lucide-react'

// Dynamically import FaqAccordion with loading fallback
const FaqAccordion = dynamic(() => import('./FaqAccordion'), {
  loading: () => (
    <div className="bg-white rounded-lg p-6 border">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-6 h-6 text-sky-blue" />
        <h3 className="font-poppins font-semibold text-xl text-navy">Loading FAQ...</h3>
      </div>
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-100 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  ),
  ssr: false
})

interface LazyFaqAccordionProps {
  title: string
  faqs: Array<{
    question: string
    answer: string
  }>
}

export default function LazyFaqAccordion(props: LazyFaqAccordionProps) {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-lg p-6 border">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-6 h-6 text-sky-blue" />
          <h3 className="font-poppins font-semibold text-xl text-navy">Loading FAQ...</h3>
        </div>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-100 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    }>
      <FaqAccordion {...props} />
    </Suspense>
  )
} 