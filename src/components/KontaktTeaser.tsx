// src/components/KontaktTeaser.tsx
import Link from 'next/link'
import { Container } from './Container'

export default function KontaktTeaser() {
  return (
    <section className="bg-primary text-white py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ihr Projekt starten?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            Beschreiben Sie uns Ihr Vorhaben in Warendorf, Osnabrück oder Umgebung – wir melden uns innerhalb von 24–48 Stunden persönlich bei Ihnen.
          </p>

          <Link
            href="/kontakt"
            className="inline-block bg-white text-primary px-10 py-5 rounded-xl text-lg md:text-xl font-semibold shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Jetzt Projekt anfragen
          </Link>

          <p className="mt-8 text-base md:text-lg opacity-90">
            Oder direkt anrufen:  
            <a href="tel:+491631124962" className="underline hover:text-white font-medium ml-2">
              0163 1124962
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}