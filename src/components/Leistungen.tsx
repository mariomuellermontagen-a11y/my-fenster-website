// src/components/Leistungen.tsx
import Link from 'next/link'
import { Container } from './Container'
import { Section } from './Section'

export default function Leistungen() {
  const services = [
    {
      title: 'Fenster & Haustüren',
      text: 'Hochwertige Kunststoff-, Aluminium- und Holzsysteme – für mehr Licht, Wärme und Sicherheit in Ihrem Zuhause.',
      href: '/leistungen/kunststofffenster', // Hauptlink zu Kunststoff – oder zu einer Übersichtsseite, wenn du magst
      icon: '🪟' // Hier kannst du später ein SVG-Icon einfügen
    },
    {
      title: 'Haustüren',
      text: 'Individuelle Haustüren in Kunststoff, Aluminium oder Holz – sicher, modern oder klassisch, barrierefrei mit Nullschwelle.',
      href: '/leistungen/haustueren',
      icon: '🚪'
    },
    {
      title: 'Hebeschiebetüren',
      text: 'Großzügige, barrierefreie Übergänge zum Garten – lichtdurchflutet und hochgedämmt.',
      href: '/leistungen/hebeschiebetueren',
      icon: '🌅'
    },
    {
      title: 'Wartung & Inspektion',
      text: 'Regelmäßige Pflege & sofortige Reparatur – damit Ihre Fenster & Türen jahrzehntelang halten.',
      href: '/leistungen/wartung-inspektion',
      icon: '🔧'
    },
    {
      title: 'Projektgeschäft',
      text: 'Komplette Abwicklung für Mehrfamilienhäuser, Gewerbe & öffentliche Bauten – termintreu und stressfrei.',
      href: '/leistungen/projektgeschaeft',
      icon: '🏗️'
    },
    {
      title: 'Sonnenschutz & Insektenschutz',
      text: 'Außenraffstores, Rollläden, Markisen & Insektenschutz – für Komfort und Schutz an heißen Tagen.',
      href: '/kontakt', // Noch keine eigene Seite → zu Kontakt
      icon: '☀️🦟'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group block p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.text}
              </p>
            </Link>
          ))}
        </div>

        {/* Stärkerer CTA unten */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Welche Lösung passt zu Ihrem Zuhause oder Projekt?
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md"
          >
            Jetzt unverbindlich anfragen →
          </Link>
        </div>
      </Container>
    </Section>
  )
}