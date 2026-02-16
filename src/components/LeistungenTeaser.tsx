// src/components/LeistungenTeaser.tsx
import Link from 'next/link'
import { Container } from './Container'

export default function LeistungenTeaser() {
  const teasers = [
    {
      title: 'Kunststofffenster',
      description: 'Moderne 76–92 mm Systeme mit hervorragender Wärmedämmung, Schallschutz und Sicherheit.',
      href: '/leistungen/kunststofffenster',
    },
    {
      title: 'Aluminiumfenster',
      description: 'Schlanke, elegante Profile für große Glasflächen – langlebig und architektonisch anspruchsvoll.',
      href: '/leistungen/aluminiumfenster',
    },
    {
      title: 'Holzfenster',
      description: 'Natürliche Holzfenster mit hohem Wohnkomfort, exzellenter Dämmung und nachhaltiger Ökobilanz.',
      href: '/leistungen/holzfenster',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Unsere Kernleistungen
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teasers.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all border border-gray-200 flex flex-col h-full text-center"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {item.description}
              </p>
              <span className="text-primary text-sm font-medium group-hover:underline mt-auto">
                Mehr erfahren →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/leistungen"
            className="inline-block text-primary font-medium hover:underline"
          >
            Alle Leistungen ansehen →
          </Link>
        </div>
      </Container>
    </section>
  )
}