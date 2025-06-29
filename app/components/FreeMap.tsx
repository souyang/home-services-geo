"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

interface FreeMapProps {
  location: string
  address: string
  coordinates: { lat: number; lng: number }
  className?: string
  zoom?: number
}

export default function FreeMap({ 
  location, 
  address, 
  coordinates, 
  className = "",
  zoom = 14 
}: FreeMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mapRef.current) return

    // Dynamically import Leaflet only on client side
    const initMap = async () => {
      try {
        const L = (await import('leaflet')).default
        await import('leaflet/dist/leaflet.css')

        // Initialize map
        const map = L.map(mapRef.current!).setView([coordinates.lat, coordinates.lng], zoom)

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map)

        // Add simple marker
        const marker = L.marker([coordinates.lat, coordinates.lng]).addTo(map)

        // Add popup
        const popup = L.popup({
          closeButton: true,
          maxWidth: 300
        }).setContent(`
          <div style="padding: 8px;">
            <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #1e293b;">${location}</h3>
            <p style="margin: 0; font-size: 12px; color: #64748b;">${address}</p>
          </div>
        `)

        marker.bindPopup(popup)

        // Cleanup function
        return () => {
          map.remove()
        }
      } catch (error) {
        console.error('Failed to load map:', error)
      }
    }

    initMap()
  }, [isClient, coordinates, zoom, location, address])

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className={`bg-gray-100 rounded-lg overflow-hidden ${className}`}>
        <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-navy" />
            <h3 className="font-semibold text-xl text-navy mb-2">{location}</h3>
            <p className="text-gray-600 mb-4">{address}</p>
            <p className="text-sm text-gray-500">Loading interactive map...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      <div 
        ref={mapRef} 
        className="aspect-video w-full"
        style={{ minHeight: '300px' }}
      />
    </div>
  )
} 