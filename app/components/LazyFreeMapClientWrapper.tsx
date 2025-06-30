'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { MapPin } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

const LazyFreeMap = dynamic(() => import('./FreeMap'), {
  loading: () => (
    <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center">
      <LoadingSpinner size="md" text="Loading map..." />
    </div>
  ),
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
    <Suspense fallback={
      <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center">
        <LoadingSpinner size="md" text="Loading map..." />
      </div>
    }>
      <LazyFreeMap {...props} />
    </Suspense>
  )
} 