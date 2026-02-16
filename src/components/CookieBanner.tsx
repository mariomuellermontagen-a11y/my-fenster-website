// src/components/CookieBanner.tsx
'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Prüfen, ob schon eine Entscheidung getroffen wurde
    const consent = localStorage.getItem('cookieConsent')
    if (consent === null) {
      setIsVisible(true)
    } else {
      setHasConsent(consent === 'accepted')
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setHasConsent(true)
    setIsVisible(false)
    // Hier könntest du später Analytics / Tracking laden (z. B. Google Analytics)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    setHasConsent(true)
    setIsVisible(false)
    // Nur notwendige Cookies (kein Tracking)
  }

  const decline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setHasConsent(false)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-2xl z-50 border-t-4 border-primary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm md:text-base">
          <p>
            Wir nutzen Cookies, um unsere Website optimal zu gestalten und Ihnen die bestmögliche Nutzererfahrung zu bieten. 
            Dazu gehören notwendige Cookies sowie optionale für Analyse und Marketing.
          </p>
          <p className="mt-2">
            Mehr Informationen in unserer{' '}
            <a href="/datenschutz" className="underline hover:text-primary transition-colors">
              Datenschutzerklärung
            </a>.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <button
            onClick={decline}
            className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors text-sm md:text-base"
          >
            Ablehnen
          </button>
          <button
            onClick={acceptNecessary}
            className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition-colors text-sm md:text-base"
          >
            Nur notwendige
          </button>
          <button
            onClick={acceptAll}
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-semibold text-sm md:text-base"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}