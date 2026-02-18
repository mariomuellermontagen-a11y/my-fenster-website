// src/app/leistungen/fenster-haustueren/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Fenster & Haustüren | Gebrüder Müller',
  description: 'Fenster und Haustüren in Kunststoff, Aluminium und Holz – für mehr Licht, Sicherheit und Komfort im Raum Warendorf, Münster und Osnabrück.',
}

export default function FensterHaustueren() {
  const options = [
    {
      title: 'Kunststofffenster',
      description: 'Pflegeleicht, energieeffizient und preiswert – GreenEvolution & BlueEvolution für Neubau und Sanierung.',
      href: '/leistungen/kunststofffenster',
      image: '/images/teaser-kunststoff.jpg' // Ersetze mit echtem Bildpfad aus /public/
    },
    {
      title: 'Aluminiumfenster',
      description: 'Schlanke Profile, maximale Stabilität und modernes Design – ideal für große Glasflächen.',
      href: '/leistungen/aluminiumfenster',
      image: '/images/teaser-alu.jpg'
    },
    {
      title: 'Holzfenster',
      description: 'Natürliche Wärme und Gemütlichkeit – optional mit Alu-Deckschalen für mehr Langlebigkeit.',
      href: '/leistungen/holzfenster',
      image: '/images/teaser-holz.jpg'
    },
    {
      title: 'Haustüren',
      description: 'Individuell, sicher und stilvoll – barrierefrei mit Nullschwelle möglich.',
      href: '/leistungen/haustueren',
      image: '/images/teaser-haustuer.jpg'
    }
  ]

  return (
    <div className="bg-white">
      <Breadcrumbs
        items={[
          { label: 'Leistungen', href: '/leistungen' },
          { label: 'Fenster & Haustüren' }
        ]}
      />

      <section className="py-16 md:py-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Fenster & Haustüren
          </h1>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
            Ob Kunststoff, Aluminium oder Holz – wir finden für Ihr Zuhause die perfekte Kombination aus Design, Sicherheit und Energieeffizienz. Persönlich beraten im Raum Warendorf, Münster und Osnabrück.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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