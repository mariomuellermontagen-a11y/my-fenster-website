// src/components/Hero.tsx
import Image from 'next/image'
import { Container } from './Container'
import { Section } from './Section'

export default function Hero() {
  return (
    <Section bg="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Technisch durchdachte Fenster- & Tür-Lösungen für anspruchsvolle Bauvorhaben
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Hochwertige Umsetzung für Privatkunden, Bauträger und öffentliche Auftraggeber im Raum Osnabrück, Warendorf und Tecklenburger Land.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#kontakt"
                className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Jetzt unverbindlich anfragen
              </a>
              <a
                href="tel:+491631124962"
                className="border-2 border-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Direkt anrufen
              </a>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">✓ Architektonisch & statisch fundierte Planung</li>
              <li className="flex items-start gap-3">✓ Hochwertige Kunststoff- & Aluminiumsysteme</li>
              <li className="flex items-start gap-3">✓ Präzise Montage – verbindliche Termine</li>
              <li className="flex items-start gap-3">✓ Persönliche, fachliche Beratung ohne Druck</li>
            </ul>
          </div>

          {/* Fix-Version mit expliziten width/height statt fill */}
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Hero.jpg"
              alt="Referenzprojekt: Moderne Fenster- und Tür-Lösung mit viel Tageslicht"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-2xl"
              priority
              quality={75}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}