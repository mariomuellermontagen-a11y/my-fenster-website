// src/app/leistungen/fenster/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Fenster | Gebrüder Müller',
  description: 'Fenster in Kunststoff, Aluminium und Holz – für mehr Licht, Sicherheit und Komfort im Raum Warendorf, Münster und Osnabrück.',
}

export default function Fenster() {
  const options = [
    {
      title: 'Kunststofffenster',
      description: 'Pflegeleicht, energieeffizient und preiswert – GreenEvolution & BlueEvolution.',
      href: '/leistungen/kunststofffenster',
      image: '/images/teaser-kunststoff.jpg' // Ersetze mit echtem Bildpfad
    },
    {
      title: 'Aluminiumfenster',
      description: 'Schlanke Profile, maximale Stabilität und modernes Design – ideal für große Glasflächen.',
      href: '/leistungen/aluminiumfenster',
      image: '/images/teaser-alu.jpg'
    },
    {
      title: 'Holzfenster',
      description: 'Natürliche Wärme und Gemütlichkeit – optional mit Alu-Deckschalen.',
      href: '/leistungen/holzfenster',
      image: '/images/teaser-holz.jpg'
    }
  ]

  return (
    <div className="bg-white">
      <Breadcrumbs
        items={[
          { label: 'Leistungen', href: '/leistungen' },
          { label: 'Fenster' }
        ]}
      />

      <section className="py-16 md:py-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Fenster
          </h1>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
            Ob pflegeleicht & energieeffizient (Kunststoff), schlank & modern (Aluminium) oder natürlich & warm (Holz) – wir finden für Ihr Zuhause die perfekte Lösung. Persönlich beraten im Raum Warendorf, Münster und Osnabrück.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {options.map((option) => (
              <Link
                key={option.href}
                href={option.href}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-48">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={85}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">
                    {option.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/kontakt"
              className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md"
            >
              Persönliche Beratung vereinbaren →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}