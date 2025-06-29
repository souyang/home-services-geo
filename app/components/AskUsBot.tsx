"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function AskUsBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    try {
      const res = await fetch("/api/placeholder/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
      const data = await res.json()
      setResponse(data.answer)
      setMessage("")
    } catch (error) {
      setResponse("Sorry, there was an error processing your request. Please try again or contact us directly.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-sky-blue hover:bg-sky-blue/90 text-white p-4 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 z-50"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-6 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
            {/* Header */}
            <div className="bg-navy text-white p-4 rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-poppins font-semibold">Ask Us Anything</h3>
                <p className="text-sm text-gray-300">AI-ready demo using structured content</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  setResponse("")
                  setMessage("")
                }}
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy rounded"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              {response ? (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-800">{response}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    This is a demo response. In production, this would connect to AI services using our structured
                    content summaries.
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" aria-hidden="true" />
                  <p>Ask us about our services, pricing, or availability!</p>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="bg-sky-blue hover:bg-sky-blue/90 text-white p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                      aria-hidden="true"
                    ></div>
                  ) : (
                    <Send className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
