'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import LazyFreeMap
const LazyFreeMap = dynamic(() => import('./LazyFreeMap'), {
  ssr: false
})

interface IntersectionMapProps {
  location: string
  address: string
  coordinates: { lat: number; lng: number }
  className?: string
  zoom?: number
}

export default function IntersectionMap(props: IntersectionMapProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsVisible(true)
          setHasIntersected(true)
          // Unobserve after first intersection to prevent re-triggering
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the element is visible
        threshold: 0.1
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasIntersected])

  return (
    <div ref={ref} className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 rounded-lg overflow-hidden">
      {!isVisible ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-8">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-navy animate-pulse" />
            <p className="text-sm text-gray-500">Map will load when visible</p>
          </div>
        </div>
      ) : (
        <LazyFreeMap {...props} />
      )}
    </div>
  )
} 