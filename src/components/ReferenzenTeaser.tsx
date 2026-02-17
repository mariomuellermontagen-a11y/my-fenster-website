// src/components/ReferenzenTeaser.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'
import { referenzen } from '@/data/referenzen' // ← zentrale Daten

export default function ReferenzenTeaser() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Ausgewählte Referenzen in Warendorf & Osnabrück
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ein kleiner Auszug aus unseren realisierten Projekten – privat, gewerblich und öffentlich.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {referenzen.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title} {project.jahr}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/referenzen"
            className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Alle Referenzen entdecken →
          </Link>
        </div>
      </Container>
    </section>
  )
}