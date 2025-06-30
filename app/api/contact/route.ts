import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Skyline Home Services Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not specified"}

Message:
${message}

---
This message was sent from the Skyline Home Services contact form.
Website: https://skylinehomesvc.vercel.app
    `.trim();

    // For now, we'll simulate email sending
    // In a real implementation, you would use a service like:
    // - SendGrid
    // - Resend
    // - Nodemailer with SMTP
    // - EmailJS (client-side)

    console.log("Email would be sent to simonouyang@yahoo.com:");
    console.log(emailContent);

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real implementation, you would send the email here
    // Example with a hypothetical email service:
    /*
    const emailResult = await emailService.send({
      to: "simonouyang@yahoo.com",
      subject: "New Contact Form Submission - Skyline Home Services",
      text: emailContent,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })
    */

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We'll contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}
