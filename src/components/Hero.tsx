// src/components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'
import { Section } from './Section'

export default function Hero() {
  return (
    <Section bg="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ihr Zuhause verdient Fenster & Türen, die halten, was sie versprechen
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Mehr Licht in jedem Raum. Mehr Wärme im Winter. Mehr Sicherheit für Ihre Familie. Und vor allem mehr Wohlbefinden – jeden Tag. Wir montieren hochwertige Fenster, Haustüren und Hebeschiebetüren persönlich und sorgfältig im Raum Warendorf, Münster und Osnabrück.
            </p>

            {/* Dezent, einladender Text-Link – kein Button, wie ursprünglich */}
            <p className="text-lg text-gray-700 mb-10">
              Suchen Sie eine individuelle Lösung für Ihr Bauvorhaben?  
              <Link
                href="/kontakt"
                className="text-primary font-semibold hover:underline ml-1 transition-colors"
              >
                Jetzt persönlich & unverbindlich anfragen →
              </Link>
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                Persönliche Beratung bei Ihnen vor Ort – ohne Druck
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                Über 15 Jahre Erfahrung in Fenster & Türen Montage
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                Hochwertige Systeme für Neubau, Sanierung & Modernisierung
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                Präzise, termintreue Montage – alles aus einer Hand
              </li>
            </ul>
          </div>

          {/* Bild – mit optimiertem Alt-Text */}
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Hero.jpg"
              alt="Gebrüder Müller Fenster GmbH – Professionelle Montage moderner Fenster, Haustüren und Hebeschiebetüren mit viel Tageslicht und hohem Wohnkomfort im Raum Warendorf, Münster und Osnabrück"
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