import { Metadata } from "next"
import Link from "next/link"
import { Star, Quote, ThumbsUp, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Customer Reviews - 5-Star Home Services | Skyline Home Services",
  description: "Read real customer reviews for Skyline Home Services. 5-star rated HVAC, plumbing, and roofing services in Palo Alto, Menlo Park, and Mountain View. See what our satisfied customers say!",
  keywords: ["customer reviews", "5-star reviews", "HVAC reviews", "plumbing reviews", "roofing reviews", "Skyline Home Services"],
}

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "Palo Alto, CA",
    service: "HVAC",
    rating: 5,
    date: "2024-06-15",
    avatar: "SC",
    verified: true,
    title: "Outstanding AC Installation Service",
    content: "Skyline Home Services completely transformed our home's comfort with their professional AC installation. The team was punctual, knowledgeable, and went above and beyond to ensure everything was perfect. They installed a new high-efficiency system that's already saving us money on our energy bills. The installation was clean, professional, and they even cleaned up after themselves. Highly recommend for any HVAC needs!",
    highlights: ["Professional Installation", "Energy Efficient", "Clean Work", "Cost Savings"],
    serviceDetails: "New AC Installation & Ductwork"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Menlo Park, CA",
    service: "Plumbing",
    rating: 5,
    date: "2024-06-10",
    avatar: "MR",
    verified: true,
    title: "Emergency Plumbing Hero",
    content: "Had a major pipe burst at 2 AM and Skyline was there within 30 minutes! Their emergency response was incredible. The plumber quickly identified the issue, made temporary repairs, and returned the next day to complete the permanent fix. Professional, honest pricing, and they didn't try to upsell unnecessary work. This is exactly the kind of service you want when you're dealing with a plumbing emergency.",
    highlights: ["24/7 Emergency Service", "Fast Response", "Honest Pricing", "Professional"],
    serviceDetails: "Emergency Pipe Repair & Replacement"
  },
  {
    id: 3,
    name: "Jennifer Thompson",
    location: "Mountain View, CA",
    service: "Roofing",
    rating: 5,
    date: "2024-06-05",
    avatar: "JT",
    verified: true,
    title: "Complete Roof Replacement Excellence",
    content: "After a storm damaged our roof, Skyline Home Services handled everything from insurance coordination to final inspection. Their attention to detail was impressive - they even matched our existing roof tiles perfectly. The crew was professional, worked efficiently, and kept us informed throughout the entire process. The new roof looks beautiful and we feel confident it will last for decades. Worth every penny!",
    highlights: ["Insurance Coordination", "Perfect Matching", "Professional Crew", "Quality Work"],
    serviceDetails: "Complete Roof Replacement & Gutter Installation"
  },
  {
    id: 4,
    name: "David Kim",
    location: "Palo Alto, CA",
    service: "HVAC",
    rating: 5,
    date: "2024-05-28",
    avatar: "DK",
    verified: true,
    title: "Heating System Repair & Maintenance",
    content: "Our furnace stopped working during a cold spell, and Skyline had it fixed the same day. The technician was thorough in diagnosing the issue and explained everything clearly. They also performed a complete system maintenance and gave us tips for preventing future problems. The service was reasonably priced and the technician was courteous and professional. We've since signed up for their maintenance plan.",
    highlights: ["Same Day Service", "Thorough Diagnosis", "Preventive Tips", "Maintenance Plan"],
    serviceDetails: "Furnace Repair & Annual Maintenance"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "Menlo Park, CA",
    service: "Plumbing",
    rating: 5,
    date: "2024-05-20",
    avatar: "LA",
    verified: true,
    title: "Kitchen Remodel Plumbing Perfection",
    content: "Skyline handled all the plumbing for our kitchen remodel and the results are amazing. They worked seamlessly with our contractor and completed everything on schedule. The new fixtures are beautiful and everything works perfectly. They even installed a water filtration system we hadn't planned for, which has been a great addition. Professional, reliable, and excellent workmanship.",
    highlights: ["Kitchen Remodel", "On Schedule", "Quality Fixtures", "Water Filtration"],
    serviceDetails: "Kitchen Plumbing Remodel & Fixture Installation"
  },
  {
    id: 6,
    name: "Robert Wilson",
    location: "Mountain View, CA",
    service: "Roofing",
    rating: 5,
    date: "2024-05-15",
    avatar: "RW",
    verified: true,
    title: "Roof Inspection & Repair Service",
    content: "Called Skyline for a routine roof inspection and they found several issues that needed attention. They provided a detailed report with photos and gave us options for repairs. We chose their recommended solution and they completed the work efficiently. The crew was safety-conscious and professional. Our roof is now in excellent condition and we have peace of mind going into the rainy season.",
    highlights: ["Detailed Inspection", "Photo Documentation", "Safety Conscious", "Peace of Mind"],
    serviceDetails: "Roof Inspection & Preventive Repairs"
  }
]

const serviceStats = [
  {
    service: "HVAC",
    rating: 5.0,
    reviews: 127,
    icon: "❄️",
    description: "Heating, Ventilation & Air Conditioning"
  },
  {
    service: "Plumbing",
    rating: 5.0,
    reviews: 89,
    icon: "🔧",
    description: "Emergency & Routine Plumbing Services"
  },
  {
    service: "Roofing",
    rating: 5.0,
    reviews: 64,
    icon: "🏠",
    description: "Roof Installation, Repair & Maintenance"
  }
]

export default function ReviewsPage() {
  const averageRating = 5.0
  const totalReviews = reviews.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/5 to-navy/5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-blue to-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              See what our satisfied customers say about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold">{averageRating}</div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{totalReviews}+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-4">
              Service Ratings
            </h2>
            <p className="text-xl text-gray-600">
              Consistent 5-star ratings across all our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {serviceStats.map((stat) => (
              <Card key={stat.service} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <CardTitle className="font-poppins text-2xl text-navy">{stat.service}</CardTitle>
                  <CardDescription className="text-base">{stat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-navy mb-1">{stat.rating}</div>
                  <div className="text-sm text-gray-600">{stat.reviews} reviews</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied customers across the Peninsula
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={`/avatars/${review.avatar.toLowerCase()}.svg`} alt={review.avatar} className="w-12 h-12" />
                        <AvatarFallback className="bg-sky-blue text-white font-semibold">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-navy">{review.name}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="w-3 h-3" />
                          {review.location}
                        </div>
                      </div>
                    </div>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-sky-blue border-sky-blue">
                      {review.service}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <CardTitle className="font-poppins text-lg text-navy mb-2">
                    {review.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-3 h-3" />
                    {new Date(review.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <Quote className="w-6 h-6 text-sky-blue/30 mb-2" />
                    <p className="text-gray-700 leading-relaxed">
                      "{review.content}"
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy mb-2">Service Details:</h4>
                    <p className="text-sm text-gray-600">{review.serviceDetails}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {review.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-8">
              Why Customers Choose Skyline Home Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600">
                  Available around the clock for urgent plumbing, HVAC, and roofing emergencies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed by the state of California with comprehensive insurance coverage.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Over 14 years serving the Peninsula with deep knowledge of local requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-blue to-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our satisfied customers and get the same exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-navy hover:bg-gray-100">
              <Link href="/contact/">
                Get Free Estimate
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              <Link href="tel:650-555-0199">
                Call (650) 555-0199
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 