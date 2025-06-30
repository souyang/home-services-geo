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
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Project description is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
        setErrors({})
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please try again or call us directly.")
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
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg" role="alert" aria-live="polite">
          <p className="text-green-800">
            Thank you! Your message has been sent to simonouyang@yahoo.com. We'll contact you within 24 hours to schedule your free consultation.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert" aria-live="polite">
          <p className="text-red-800">
            {errorMessage || "Sorry, there was an error submitting your form. Please try again or call us directly at (650) 555-0199."}
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
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
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
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
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
              aria-describedby="phone-help"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200"
            />
            <p id="phone-help" className="mt-1 text-sm text-gray-500">
              Optional - we'll call you if you prefer
            </p>
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
            Project Description *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : "message-help"}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-colors duration-200 resize-vertical ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Tell us about your project..."
          ></textarea>
          {errors.message ? (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          ) : (
            <p id="message-help" className="mt-1 text-sm text-gray-500">
              Please describe your project in detail so we can provide an accurate estimate
            </p>
          )}
        </div>

        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note: </strong> 
            We'll respond within 24 hours to schedule your free consultation.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2"
          aria-describedby="submit-status"
        >
          {isSubmitting ? (
            <>
              <div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              ></div>
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" aria-hidden="true" />
              <span>Send Message</span>
            </>
          )}
        </button>
        
        <div id="submit-status" className="sr-only" aria-live="polite">
          {isSubmitting ? "Submitting form..." : ""}
        </div>
      </form>
    </section>
  )
}
