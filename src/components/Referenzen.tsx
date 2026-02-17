// src/components/Referenzen.tsx
import Image from 'next/image'
import { Container } from './Container'
import { Section } from './Section'
import { referenzen } from '@/data/referenzen' // ← zentrale Daten

export default function Referenzen() {
  return (
    <Section bg="bg-gray-50">
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Ausgewählte Referenzen 2025
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {referenzen.map((proj, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={proj.image}
                alt={proj.alt}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                loading="lazy"
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {proj.title} {proj.jahr}
                </h3>
                <p className="text-gray-700">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-gray-600">
          Ähnliches Projekt für Ihr Zuhause oder Bauvorhaben?  
          <a href="/kontakt" className="text-primary hover:underline font-medium ml-1">
            Jetzt anfragen →
          </a>
        </p>
      </Container>
    </Section>
  )
}