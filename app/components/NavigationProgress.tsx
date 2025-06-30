'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function NavigationProgress() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
      setProgress(0)
      
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval)
            return 90
          }
          return prev + 10
        })
      }, 100)

      return () => clearInterval(interval)
    }

    const handleComplete = () => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 200)
    }

    // Listen for route changes
    window.addEventListener('beforeunload', handleStart)
    
    // Reset when pathname changes
    handleComplete()

    return () => {
      window.removeEventListener('beforeunload', handleStart)
    }
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="h-1 bg-gradient-to-r from-sky-blue to-navy transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
} 