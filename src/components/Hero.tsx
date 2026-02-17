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
              Ihr Partner für hochwertige Fenster & Türen in Ihrer Region
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Präzise Montage, persönliche Beratung und langlebige Systeme für Privatkunden, Bauträger und öffentliche Auftraggeber im Münsterland, Warendorf und Osnabrück.
            </p>

            {/* Dezent, aber einladend – kein Button */}
            <p className="text-lg text-gray-700 mb-10">
              Suchen Sie eine individuelle Lösung für Ihr Bauvorhaben?  
              <a
                href="/kontakt"
                className="text-primary font-semibold hover:underline ml-1 transition-colors"
              >
                Jetzt persönlich & unverbindlich anfragen →
              </a>
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">✓ Architektonisch & statisch fundierte Planung</li>
              <li className="flex items-start gap-3">✓ Hochwertige Kunststoff- & Aluminiumsysteme</li>
              <li className="flex items-start gap-3">✓ Präzise Montage – verbindliche Termine</li>
              <li className="flex items-start gap-3">✓ Persönliche, fachliche Beratung ohne Druck</li>
            </ul>
          </div>

          {/* Bild mit optimiertem Alt-Text */}
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Hero.jpg"
              alt="Gebrüder Müller Fenster GmbH – Professionelle Montage moderner Fenster und Türen mit viel Tageslicht und hohem Wohnkomfort in Warendorf und Osnabrück"
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