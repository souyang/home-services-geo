'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { MapPin } from 'lucide-react'

// Dynamically import FreeMap with loading fallback
const FreeMap = dynamic(() => import('./FreeMap'), {
  loading: () => (
    <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center">
      <div className="text-center p-8">
        <MapPin className="w-12 h-12 mx-auto mb-4 text-navy animate-pulse" />
        <p className="text-sm text-gray-500">Loading map...</p>
      </div>
    </div>
  ),
  ssr: false // Disable SSR for better performance
})

interface LazyFreeMapProps {
  location: string
  address: string
  coordinates: { lat: number; lng: number }
  className?: string
  zoom?: number
}

export default function LazyFreeMap(props: LazyFreeMapProps) {
  return (
    <Suspense fallback={
      <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center">
        <div className="text-center p-8">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-navy animate-pulse" />
          <p className="text-sm text-gray-500">Loading map...</p>
        </div>
      </div>
    }>
      <FreeMap {...props} />
    </Suspense>
  )
} 