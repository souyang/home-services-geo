import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://skylinehomesvc.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://skylinehomesvc.com${item.href}` }),
      })),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="bg-light-gray py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm" role="list">
            <li>
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded"
                aria-label="Go to homepage"
              >
                <Home className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </Link>
            </li>

            {items.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-sky-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 rounded"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
