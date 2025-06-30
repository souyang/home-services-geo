import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  features: string[]
  headingLevel?: 2 | 3 | 4
}

export default function ServiceCard({ title, description, icon, href, features, headingLevel = 3 }: ServiceCardProps) {
  const renderHeading = () => {
    const className = "font-poppins font-semibold text-xl text-navy"
    
    switch (headingLevel) {
      case 2:
        return <h2 className={className}>{title}</h2>
      case 4:
        return <h4 className={className}>{title}</h4>
      default:
        return <h3 className={className}>{title}</h3>
    }
  }

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center text-sky-blue">{icon}</div>
        {renderHeading()}
      </div>

      <p className="text-gray-600 mb-4 flex-grow">{description}</p>

      <ul className="space-y-2 mb-6" role="list">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-700 flex items-start">
            <span className="w-1.5 h-1.5 bg-sky-blue rounded-full mt-2 mr-2 flex-shrink-0" aria-hidden="true"></span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="inline-flex items-center space-x-2 text-sky-blue hover:text-navy font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded mt-auto"
        aria-label={`Learn more about ${title} services`}
      >
        <span>Learn More About {title}</span>
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </article>
  )
}
