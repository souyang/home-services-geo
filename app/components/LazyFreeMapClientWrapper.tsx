'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { MapPin } from 'lucide-react'

const LazyFreeMap = dynamic(() => import('./FreeMap'), {
  loading: () => <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center"><MapPin className="w-12 h-12 text-navy animate-pulse" /><p className="text-sm text-gray-500">Loading map...</p></div>,
  ssr: false
})

interface Props {
  location: string
  address: string
  coordinates: { lat: number; lng: number }
  zoom?: number
}

export default function LazyFreeMapClientWrapper(props: Props) {
  return (
    <Suspense fallback={<div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center"><MapPin className="w-12 h-12 text-navy animate-pulse" /><p className="text-sm text-gray-500">Loading map...</p></div>}>
      <LazyFreeMap {...props} />
    </Suspense>
  )
} 