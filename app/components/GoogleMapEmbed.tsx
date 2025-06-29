"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

interface GoogleMapEmbedProps {
  location: string
  address: string
  coordinates: { lat: number; lng: number }
  apiKey?: string
  className?: string
  zoom?: number
}

export default function GoogleMapEmbed({ 
  location, 
  address, 
  coordinates, 
  apiKey = "YOUR_API_KEY",
  className = "",
  zoom = 14 
}: GoogleMapEmbedProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)

  useEffect(() => {
    // Check if Google Maps API is loaded
    if (typeof window !== "undefined" && window.google && window.google.maps) {
      initializeMap()
    } else {
      // Load Google Maps API if not already loaded
      loadGoogleMapsAPI()
    }
  }, [coordinates, zoom])

  const loadGoogleMapsAPI = () => {
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      // API already loading or loaded
      const checkInterval = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkInterval)
          initializeMap()
        }
      }, 100)
      return
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    script.async = true
    script.defer = true
    script.onload = initializeMap
    document.head.appendChild(script)
  }

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return

    const mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    }

    mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions)

    // Add marker
    markerRef.current = new window.google.maps.Marker({
      position: coordinates,
      map: mapInstanceRef.current,
      title: location,
      icon: {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#0ea5e9"/>
            <circle cx="16" cy="16" r="8" fill="white"/>
            <circle cx="16" cy="16" r="4" fill="#0ea5e9"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(32, 32),
        anchor: new window.google.maps.Point(16, 16)
      }
    })

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 8px; max-width: 200px;">
          <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #1e293b;">${location}</h3>
          <p style="margin: 0; font-size: 12px; color: #64748b;">${address}</p>
        </div>
      `
    })

    markerRef.current.addListener('click', () => {
      infoWindow.open(mapInstanceRef.current, markerRef.current)
    })
  }

  // Fallback for when Google Maps API is not available
  if (typeof window === "undefined" || !window.google) {
    return (
      <div className={`bg-gray-100 rounded-lg overflow-hidden ${className}`}>
        <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-navy" />
            <h3 className="font-semibold text-xl text-navy mb-2">{location}</h3>
            <p className="text-gray-600 mb-4">{address}</p>
            <p className="text-sm text-gray-500">
              Interactive Google Map showing {location} service area
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Coordinates: {coordinates.lat}, {coordinates.lng}
            </p>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700">
                💡 To enable interactive maps, add your Google Maps API key to the component
              </p>
            </div>
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

// Add Google Maps types to window object
declare global {
  interface Window {
    google: typeof google
  }
} 