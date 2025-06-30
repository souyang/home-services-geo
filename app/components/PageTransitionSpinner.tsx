'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import LoadingSpinner from './LoadingSpinner'

export default function PageTransitionSpinner() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    // Listen for route changes
    window.addEventListener('beforeunload', handleStart)
    
    // Reset loading state when pathname changes (navigation complete)
    setIsLoading(false)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
    }
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 border">
        <LoadingSpinner size="lg" text="Loading page..." />
      </div>
    </div>
  )
} 