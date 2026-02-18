// src/components/LeistungenTeaser.tsx
import Link from 'next/link'
import { Container } from './Container'
import { Section } from './Section'

// Tabler Icons importieren
import {
  IconBorderAll,           // ← Für Fenster (wie gewünscht)
  IconDoor,
  IconArrowsLeftRight
} from '@tabler/icons-react'

export default function LeistungenTeaser() {
  const services = [
    {
      title: 'Fenster',
      text: 'Mehr Licht, Wärme und Sicherheit – in Kunststoff, Aluminium oder Holz, individuell für Ihr Zuhause.',
      href: '/leistungen/fenster',
      icon: <IconBorderAll size={48} stroke={1.5} className="text-primary" />
    },
    {
      title: 'Haustüren',
      text: 'Individuell, sicher und stilvoll – barrierefrei mit Nullschwelle möglich.',
      href: '/leistungen/haustueren',
      icon: <IconDoor size={48} stroke={1.5} className="text-primary" />
    },
    {
      title: 'Hebeschiebetüren',
      text: 'Großzügige, barrierefreie Übergänge zum Garten – lichtdurchflutet und hochgedämmt.',
      href: '/leistungen/hebeschiebetueren',
      icon: <IconArrowsLeftRight size={48} stroke={1.5} className="text-primary" />
    }
  ]

  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Unsere Leistungen – für Ihr Zuhause
        </h2>

        <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Ob Neubau, Sanierung oder Modernisierung – wir finden für jedes Projekt die passende Lösung. Persönlich, ehrlich und vor Ort im Raum Warendorf, Münster und Osnabrück.
        </p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group block p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.text}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Noch mehr Leistungen entdecken?
          </p>
          <Link
            href="/leistungen"
            className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md"
          >
            Alle Leistungen ansehen →
          </Link>
        </div>
      </Container>
    </Section>
  )
}