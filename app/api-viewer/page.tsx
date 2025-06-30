"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading API data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-2">Error</div>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">API Response Viewer</h1>
              <p className="text-gray-600">
                JSON response from <code className="bg-gray-200 px-2 py-1 rounded">/api/summary/</code>
              </p>
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

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Response Data</h2>
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

        {data && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Info</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Status:</span>{" "}
                  <span className="text-green-600">Success</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Total Sections:</span>{" "}
                  <span className="text-blue-600">{data.meta.totalSections}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Last Updated:</span>{" "}
                  <span className="text-gray-600">
                    {new Date(data.meta.lastUpdated).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Structure</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Services:</span>{" "}
                  <span className="text-blue-600">{Object.keys(data.data.services).length} services</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Locations:</span>{" "}
                  <span className="text-blue-600">{Object.keys(data.data.locations).length} locations</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Company Info:</span>{" "}
                  <span className="text-blue-600">{Object.keys(data.data.company).length} sections</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{data.meta.usage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 