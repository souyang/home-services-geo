import { NextResponse } from "next/server"

// Required for static export
export const dynamic = "force-static"

// Mock content summaries - in a real app, this would come from a CMS or database
const contentSummaries = {
  services: {
    plumbing: {
      title: "Plumbing Services",
      summary:
        "Professional plumbing services in Palo Alto including emergency repairs, water heater services, pipe replacement, and drain cleaning by licensed plumbers.",
      excerpt:
        "Expert plumbing solutions for residential and commercial properties in Palo Alto and surrounding areas.",
      tags: ["plumbing", "Palo Alto", "emergency plumbing", "water heater", "pipe repair"],
      url: "/services/plumbing/",
    },
    hvac: {
      title: "HVAC Services",
      summary:
        "Complete HVAC services in Palo Alto including AC installation, heating repair, duct cleaning, and energy efficiency solutions by certified technicians.",
      excerpt:
        "Professional heating, ventilation, and air conditioning services to keep your home comfortable year-round.",
      tags: ["HVAC", "air conditioning", "heating", "Palo Alto", "energy efficiency"],
      url: "/services/hvac/",
    },
    electrical: {
      title: "Electrical Services",
      summary:
        "Licensed electrical services in Palo Alto including panel upgrades, outlet installation, lighting solutions, and safety inspections by certified electricians.",
      excerpt: "Safe, reliable electrical work from panel upgrades to smart home installations.",
      tags: ["electrical", "electrician", "Palo Alto", "panel upgrade", "lighting"],
      url: "/services/electrical/",
    },
    roofing: {
      title: "Roofing Services",
      summary:
        "Professional roofing services in Palo Alto including inspections, leak repairs, gutter installation, and complete roof replacement by experienced contractors.",
      excerpt: "Comprehensive roofing solutions to protect your home from the elements.",
      tags: ["roofing", "roof repair", "Palo Alto", "gutter installation", "roof replacement"],
      url: "/services/roofing/",
    },
  },
  locations: {
    "palo-alto": {
      title: "Palo Alto Home Services",
      summary:
        "Complete home services in Palo Alto, CA including plumbing, HVAC, electrical, and roofing. Serving all Palo Alto neighborhoods with licensed professionals.",
      excerpt: "Professional home services throughout Palo Alto with same-day availability.",
      tags: ["Palo Alto", "home services", "local contractor"],
      url: "/service-area/palo-alto/",
    },
    "menlo-park": {
      title: "Menlo Park Home Services",
      summary:
        "Expert home services in Menlo Park, CA including emergency repairs, installations, and maintenance. Licensed contractors serving all Menlo Park areas.",
      excerpt: "Reliable home services in Menlo Park with 24/7 emergency availability.",
      tags: ["Menlo Park", "home services", "emergency repairs"],
      url: "/service-area/menlo-park/",
    },
    "mountain-view": {
      title: "Mountain View Home Services",
      summary:
        "Professional home services in Mountain View, CA including plumbing, HVAC, electrical, and roofing services. Trusted local contractors since 2010.",
      excerpt: "Comprehensive home services in Mountain View with satisfaction guarantee.",
      tags: ["Mountain View", "home services", "trusted contractor"],
      url: "/service-area/mountain-view/",
    },
  },
  company: {
    about: {
      title: "About Skyline Home Services",
      summary:
        "Skyline Home Services has been serving Palo Alto and surrounding areas since 2010 with professional plumbing, HVAC, electrical, and roofing services. Licensed, insured, and locally owned.",
      excerpt: "Your trusted local home services company with over 14 years of experience.",
      tags: ["about", "company history", "licensed contractor"],
      url: "/about/",
    },
    contact: {
      title: "Contact Skyline Home Services",
      summary:
        "Contact Skyline Home Services for free estimates on plumbing, HVAC, electrical, and roofing services. Located at 2211 Elm Street, Palo Alto, CA. Call (650) 555-0199.",
      excerpt: "Get your free quote today - call (650) 555-0199 or fill out our contact form.",
      tags: ["contact", "free estimate", "Palo Alto"],
      url: "/contact/",
    },
  },
}

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: contentSummaries,
      meta: {
        totalSections: Object.keys(contentSummaries).length,
        lastUpdated: new Date().toISOString(),
        usage:
          "This endpoint provides structured content summaries for AI/LLM consumption. Use this data to answer questions about Skyline Home Services offerings, locations, and company information.",
      },
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch content summaries" }, { status: 500 })
  }
}
