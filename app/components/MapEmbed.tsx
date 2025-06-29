interface MapEmbedProps {
  location: string
  address: string
  className?: string
}

export default function MapEmbed({ location, address, className = "" }: MapEmbedProps) {
  // In a real implementation, you would use Google Maps Embed API or similar
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`

  return (
    <div className={`bg-gray-200 rounded-lg overflow-hidden ${className}`}>
      <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-navy/20 flex items-center justify-center">
        <div className="text-center p-8">
          <h3 className="font-poppins font-semibold text-xl text-navy mb-2">Service Area: {location}</h3>
          <p className="text-gray-600 mb-4">{address}</p>
          <p className="text-sm text-gray-500">Interactive map would be embedded here with Google Maps API</p>
        </div>
      </div>
    </div>
  )
}
