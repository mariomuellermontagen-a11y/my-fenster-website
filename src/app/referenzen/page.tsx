// src/app/referenzen/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

export default function Referenzen() {
  const referenzen = [
    {
      title: 'Kernsanierung Warendorf',
      description: 'Kompletter Fensteraustausch in einem Altbau mit statischer Prüfung und energetischer Optimierung.',
      image: '/referenzen/warendorf.jpg',
      jahr: '2024',
    },
    {
      title: 'Hebeschiebetüren Osnabrück',
      description: 'Umfangreiche Umbauten inklusive statischer Durchbrüche für großformatige Hebeschiebetüren.',
      image: '/referenzen/osnabrueck.jpg',
      jahr: '2025',
    },
    {
      title: 'Öffentliches Gebäude Unna',
      description: 'Austausch von 48 Fensterelementen im Rahmen einer öffentlichen Baumaßnahme.',
      image: '/referenzen/unna.jpg',
      jahr: '2023',
    },
    // Hier kannst du später weitere hinzufügen
  ]

  return (
    <div className="bg-white py-16 md:py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Unsere Referenzen
        </h1>

        <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Ein Auszug aus realisierten Projekten im privaten, gewerblichen und öffentlichen Bereich.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {referenzen.map((ref, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src={ref.image}
                  alt={ref.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <h3 className="font-bold">{ref.title}</h3>
                  <p className="text-sm">{ref.jahr}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{ref.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Haben Sie ein ähnliches Projekt geplant?
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors shadow-md"
          >
            Jetzt anfragen
          </Link>
        </div>
      </Container>
    </div>
  )
}