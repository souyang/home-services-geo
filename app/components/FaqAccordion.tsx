"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
  title?: string
}

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-6" aria-labelledby="faq-title">
      <h2 id="faq-title" className="font-poppins font-bold text-2xl text-navy mb-6">
        {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              type="button"
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded-lg transition-colors duration-200"
              onClick={() => toggleItem(index)}
              aria-expanded={openItems.includes(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-navy pr-4">{faq.question}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-sky-blue flex-shrink-0" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-5 h-5 text-sky-blue flex-shrink-0" aria-hidden="true" />
              )}
            </button>

            {openItems.includes(index) && (
              <div
                id={`faq-answer-${index}`}
                className="px-6 pb-4 text-gray-700 leading-relaxed"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
