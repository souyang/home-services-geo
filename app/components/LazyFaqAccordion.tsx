'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { HelpCircle } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

// Dynamically import FaqAccordion with loading fallback
const FaqAccordion = dynamic(() => import('./FaqAccordion'), {
  loading: () => (
    <div className="bg-white rounded-lg p-6 border">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-6 h-6 text-sky-blue" />
        <h3 className="font-poppins font-semibold text-xl text-navy">Loading FAQ...</h3>
      </div>
      <LoadingSpinner size="sm" text="Loading questions..." />
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
        <LoadingSpinner size="sm" text="Loading questions..." />
      </div>
    }>
      <FaqAccordion {...props} />
    </Suspense>
  )
} 