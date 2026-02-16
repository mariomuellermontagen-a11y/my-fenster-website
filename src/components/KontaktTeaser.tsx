// src/components/KontaktTeaser.tsx
import Link from 'next/link'
import { Container } from './Container'

export default function KontaktTeaser() {
  return (
    <section className="bg-primary text-white py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihr Projekt starten?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Beschreiben Sie uns Ihr Vorhaben – wir melden uns innerhalb von 24–48 Stunden persönlich bei Ihnen.
          </p>

          <Link
            href="/kontakt"
            className="inline-block bg-white text-primary px-10 py-5 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Jetzt Projekt anfragen
          </Link>

          <p className="mt-8 text-sm opacity-80">
            Oder direkt anrufen: <a href="tel:+491631124962" className="underline hover:text-white">0163 1124962</a>
          </p>
        </div>
      </Container>
    </section>
  )
}