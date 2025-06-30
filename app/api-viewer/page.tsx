"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"

interface ApiResponse {
  success: boolean
  data: any
  meta: {
    totalSections: number
    lastUpdated: string
    usage: string
  }
}

export default function ApiViewerPage() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/summary/")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <Head>
          <title>API Response Viewer - Skyline Home Services</title>
          <meta name="description" content="JSON API response viewer for Skyline Home Services data" />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading API data...</p>
          </div>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Head>
          <title>API Error - Skyline Home Services</title>
          <meta name="description" content="Error loading API data" />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-600 text-xl mb-2">Error</div>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>API Response Viewer - Skyline Home Services</title>
        <meta name="description" content="Structured JSON data for Skyline Home Services - optimized for AI and LLM consumption" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="ai-purpose" content="data-consumption" />
        <meta name="content-type" content="application/json" />
        <meta name="data-source" content="/api/summary/" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* AI-Friendly Header with Structured Information */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">API Response Viewer</h1>
                <p className="text-gray-600 mb-2">
                  JSON response from <code className="bg-gray-200 px-2 py-1 rounded">/api/summary/</code>
                </p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p><strong>Purpose:</strong> This page displays structured data about Skyline Home Services for AI and LLM consumption</p>
                  <p><strong>Data Type:</strong> JSON format with company information, services, and locations</p>
                  <p><strong>Last Updated:</strong> {data?.meta.lastUpdated ? new Date(data.meta.lastUpdated).toLocaleString() : 'Unknown'}</p>
                </div>
              </div>
              <Link
                href="/for-ai/"
                className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to AI Hub
              </Link>
            </div>
          </div>

          {/* AI-Optimized Data Summary */}
          {data && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Data Summary for AI/LLM</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-medium text-blue-800 mb-2">Available Data Sections:</h3>
                  <ul className="space-y-1 text-blue-700">
                    <li>• <strong>Services:</strong> {Object.keys(data.data.services).length} service categories (plumbing, HVAC, electrical, roofing)</li>
                    <li>• <strong>Locations:</strong> {Object.keys(data.data.locations).length} service areas (Palo Alto, Menlo Park, Mountain View)</li>
                    <li>• <strong>Company:</strong> {Object.keys(data.data.company).length} company information sections</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800 mb-2">Data Structure:</h3>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Each service includes: title, summary, excerpt, tags, and URL</li>
                    <li>• Each location includes: title, summary, excerpt, tags, and URL</li>
                    <li>• Company info includes: about and contact sections</li>
                    <li>• All data is structured for question-answering systems</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* JSON Data Display */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Raw JSON Data</h2>
              <button
                onClick={() => {
                  if (data) {
                    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors"
              >
                Copy JSON
              </button>
            </div>
            <div className="p-6">
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            </div>
          </div>

          {/* Structured Data Breakdown for AI */}
          {data && (
            <div className="mt-8 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services Data Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {Object.entries(data.data.services).map(([key, service]: [string, any]) => (
                    <div key={key} className="border border-gray-200 rounded p-3">
                      <h4 className="font-medium text-gray-800 mb-2">{service.title}</h4>
                      <p className="text-gray-600 mb-2">{service.excerpt}</p>
                      <div className="text-xs text-gray-500">
                        <strong>Tags:</strong> {service.tags.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Locations Data Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  {Object.entries(data.data.locations).map(([key, location]: [string, any]) => (
                    <div key={key} className="border border-gray-200 rounded p-3">
                      <h4 className="font-medium text-gray-800 mb-2">{location.title}</h4>
                      <p className="text-gray-600 mb-2">{location.excerpt}</p>
                      <div className="text-xs text-gray-500">
                        <strong>Tags:</strong> {location.tags.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {Object.entries(data.data.company).map(([key, company]: [string, any]) => (
                    <div key={key} className="border border-gray-200 rounded p-3">
                      <h4 className="font-medium text-gray-800 mb-2">{company.title}</h4>
                      <p className="text-gray-600 mb-2">{company.excerpt}</p>
                      <div className="text-xs text-gray-500">
                        <strong>Tags:</strong> {company.tags.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* API Usage Information */}
          {data && (
            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">AI/LLM Usage Guidelines</h3>
              <div className="text-sm text-green-800 space-y-2">
                <p><strong>Purpose:</strong> {data.meta.usage}</p>
                <p><strong>Data Format:</strong> All data is structured for easy parsing and question-answering</p>
                <p><strong>Tags System:</strong> Each item includes relevant tags for categorization and search</p>
                <p><strong>URLs:</strong> All content includes direct links to detailed pages</p>
                <p><strong>Updates:</strong> Data is updated regularly to maintain accuracy</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
} 