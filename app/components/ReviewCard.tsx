import { Star } from "lucide-react"

interface ReviewCardProps {
  name: string
  location: string
  rating: number
  review: string
  service: string
  date: string
}

export default function ReviewCard({ name, location, rating, review, service, date }: ReviewCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">{rating} out of 5 stars</span>
      </div>

      <blockquote className="text-gray-700 mb-4 flex-grow italic">"{review}"</blockquote>

      <footer className="border-t pt-4">
        <div className="flex justify-between items-start">
          <div>
            <cite className="font-semibold text-navy not-italic">{name}</cite>
            <div className="text-sm text-gray-600">{location}</div>
            <div className="text-sm text-gray-500">{service}</div>
          </div>
          <time className="text-sm text-gray-500" dateTime={date}>
            {new Date(date).toLocaleDateString()}
          </time>
        </div>
      </footer>
    </article>
  )
}
