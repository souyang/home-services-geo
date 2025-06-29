"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-white rounded-lg shadow-md p-6" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="font-poppins font-bold text-2xl text-navy mb-6">
        Get Your Free Quote
      </h2>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg" role="alert">
          <p className="text-green-800">
            Thank you! We'll contact you within 24 hours to schedule your free consultation.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
          <p className="text-red-800">
            Sorry, there was an error submitting your form. Please try again or call us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200"
              aria-describedby="name-error"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200"
              aria-describedby="email-error"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select a service</option>
              <option value="plumbing">Plumbing</option>
              <option value="hvac">HVAC</option>
              <option value="electrical">Electrical</option>
              <option value="roofing">Roofing</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200 resize-vertical"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-describedby="submit-status"
        >
          {isSubmitting ? (
            <>
              <div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              ></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" aria-hidden="true" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </section>
  )
}
