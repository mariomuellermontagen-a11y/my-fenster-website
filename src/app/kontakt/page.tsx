// src/app/kontakt/page.tsx
'use client' // Client-Komponente für Formular-Interaktion und Status

import { useState } from 'react'
import { Container } from '@/components/Container'

export default function Kontakt() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setMessage('')

    const form = e.currentTarget
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const originalText = submitBtn.textContent

    submitBtn.textContent = 'Wird gesendet...'
    submitBtn.disabled = true

    try {
      const formData = new FormData(form)
      formData.append('access_key', 'e9e8122c-6a26-4e7c-bee1-e294a7ce7bb8')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setMessage('Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns schnellstmöglich.')
        form.reset()
      } else {
        setStatus('error')
        setMessage(data.message || 'Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Verbindungsfehler. Bitte direkt anrufen: 0163 1124962')
    } finally {
      submitBtn.textContent = originalText || 'Anfrage absenden'
      submitBtn.disabled = false
    }
  }

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Kontakt & Projektanfrage
          </h1>

          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Beschreiben Sie uns Ihr Vorhaben – wir melden uns innerhalb von 24–48 Stunden persönlich bei Ihnen.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-6 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name / Firma *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>

            <div>
              <label htmlFor="betreff" className="block text-sm font-medium text-gray-700 mb-2">
                Betreff / Projektart *
              </label>
              <select
                id="betreff"
                name="betreff"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              >
                <option value="">Bitte auswählen</option>
                <option value="Kunststofffenster">Kunststofffenster</option>
                <option value="Aluminiumfenster">Aluminiumfenster</option>
                <option value="Holzfenster">Holzfenster</option>
                <option value="Hebeschiebetüren">Hebeschiebetüren</option>
                <option value="Wartung & Inspektion">Wartung & Inspektion</option>
                <option value="Projektabwicklung">Projektabwicklung</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                Ihre Nachricht / Projektbeschreibung
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full md:w-auto px-10 py-5 rounded-xl text-lg font-semibold shadow-md transition-colors ${
                status === 'sending'
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-gray-800'
              }`}
            >
              {status === 'sending' ? 'Wird gesendet...' : 'Anfrage absenden'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center font-medium mt-4 text-lg">{message}</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center font-medium mt-4">{message}</p>
            )}

            <p className="text-sm text-gray-500 text-center mt-4">
              Mit dem Absenden erklären Sie sich einverstanden, dass Ihre Daten zur Bearbeitung Ihrer Anfrage verwendet werden. Details in unserer <a href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</a>.
            </p>
          </form>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Oder direkt anrufen:</p>
            <a href="tel:+491631124962" className="text-2xl font-bold text-primary hover:underline">
              0163 1124962
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}