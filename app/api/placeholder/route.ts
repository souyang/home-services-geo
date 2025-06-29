import { type NextRequest, NextResponse } from "next/server"

// Required for static export
export const dynamic = "force-static"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock AI response based on common queries
    let answer = "Thank you for your question! "

    if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) {
      answer +=
        "Our pricing varies by service and project scope. We provide free, upfront estimates with no hidden fees. Contact us at (650) 555-0199 for a personalized quote."
    } else if (message.toLowerCase().includes("emergency")) {
      answer +=
        "We offer 24/7 emergency services for urgent plumbing, electrical, and HVAC issues. Call our emergency line at (650) 555-0199 for immediate assistance."
    } else if (message.toLowerCase().includes("area") || message.toLowerCase().includes("location")) {
      answer +=
        "We serve Palo Alto, Menlo Park, Mountain View, and surrounding Peninsula communities. Contact us to confirm service availability in your specific area."
    } else if (message.toLowerCase().includes("license") || message.toLowerCase().includes("insured")) {
      answer +=
        "Yes, we are fully licensed by the state of California and carry comprehensive insurance. All our technicians are background-checked and professionally trained."
    } else {
      answer +=
        "We'd be happy to help with your home service needs. For detailed information about our plumbing, HVAC, electrical, and roofing services, please call us at (650) 555-0199 or visit our website."
    }

    answer +=
      "\n\nNote: This is a demo response. In production, this would connect to AI services using our structured content summaries from /api/summary."

    return NextResponse.json({
      success: true,
      answer,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 })
  }
}
