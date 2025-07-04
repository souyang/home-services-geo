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
  const mapInstanceRef = useRef<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mapRef.current) return

    // Cleanup existing map if it exists
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    // Dynamically import Leaflet only on client side
    const initMap = async () => {
      try {
        const L = (await import('leaflet')).default
        await import('leaflet/dist/leaflet.css')

        // Create custom icon to avoid marker-icon.png 404 errors
        const createCustomIcon = () => {
          return L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                width: 32px;
                height: 32px;
                background: #0ea5e9;
                border: 3px solid white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                position: relative;
              ">
                <div style="
                  width: 12px;
                  height: 12px;
                  background: white;
                  border-radius: 50%;
                "></div>
                <div style="
                  width: 6px;
                  height: 6px;
                  background: #0ea5e9;
                  border-radius: 50%;
                  position: absolute;
                "></div>
              </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
          })
        }

        // Initialize map
        const map = L.map(mapRef.current!).setView([coordinates.lat, coordinates.lng], zoom)
        mapInstanceRef.current = map

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map)

        // Add custom marker
        const marker = L.marker([coordinates.lat, coordinates.lng], {
          icon: createCustomIcon()
        }).addTo(map)

        // Add popup
        const popup = L.popup({
          className: 'custom-popup',
          closeButton: true,
          maxWidth: 300
        }).setContent(`
          <div style="padding: 20px;">
            <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${location}</h3>
            <p style="margin: 0; font-size: 12px; color: #334155;">${address}</p>
          </div>
        `)

        marker.bindPopup(popup)

      } catch (error) {
        console.error('Failed to load map:', error)
      }
    }

    initMap()

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [isClient, coordinates.lat, coordinates.lng, zoom]) // Only re-run when coordinates or zoom change

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
      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
        .custom-popup .leaflet-popup-close-button {
          color: #64748b;
          font-size: 18px;
          padding: 4px 8px;
        }
        .custom-popup .leaflet-popup-close-button:hover {
          color: #1e293b;
        }
        .leaflet-container {
          font-family: inherit;
        }
      `}</style>
    </div>
  )
} 