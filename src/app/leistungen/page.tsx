// src/app/leistungen/page.tsx
import Link from 'next/link'
import { Container } from '@/components/Container'

// Tabler Icons importieren
import {
  IconBorderAll,
  IconDoor,
  IconArrowsLeftRight,
  IconTools,
  IconBuildingSkyscraper,
  IconSun
} from '@tabler/icons-react'

export default function Leistungen() {
  const leistungen = [
    {
      title: 'Fenster',
      description: 'Mehr Licht, Wärme und Sicherheit – in Kunststoff, Aluminium oder Holz, individuell für Ihr Zuhause.',
      href: '/leistungen/fenster',
      icon: <IconBorderAll size={48} stroke={1.5} className="text-primary" />
    },
    {
      title: 'Haustüren',
      description: 'Individuell, sicher und stilvoll – barrierefrei mit Nullschwelle möglich.',
      href: '/leistungen/haustueren',
      icon: <IconDoor size={48} stroke={1.5} className="text-primary" />
    },
    {
      title: 'Hebeschiebetüren',
      description: 'Großzügige, barrierefreie Übergänge zum Garten – lichtdurchflutet und hochgedämmt.',
      href: '/leistungen/hebeschiebetueren',
      icon: <IconArrowsLeftRight size={48} stroke={1.5} className="text-primary" />
    },
    {
      title: 'Wartung & Inspektion',
      description: 'Regelmäßige Pflege, sofortige Reparatur und Austausch – damit Ihre Fenster & Türen jahrzehntelang halten.',
      href: '/leistungen/wartung-inspektion',
      icon: <IconTools size={48} stroke={1.5} className="text-primary" />
    },
    {
      title: 'Projektabwicklung',
      description: 'Komplette Betreuung für Mehrfamilienhäuser, Gewerbe & öffentliche Bauten – termintreu und stressfrei.',
      href: '/leistungen/projektabwicklung',
      icon: <IconBuildingSkyscraper size={48} stroke={1.5} className="text-primary" />
    },
    {
      title: 'Sonnenschutz & Insektenschutz',
      description: 'Hitze draußen halten, Insekten draußen lassen – Raffstores, Rollläden, Markisen und Insektenschutz für mehr Komfort das ganze Jahr.',
      href: '/kontakt',
      icon: <IconSun size={48} stroke={1.5} className="text-primary" />
    }
  ]

  return (
    <div className="bg-white py-16 md:py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Unsere Leistungen
        </h1>

        <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Ob Neubau, Sanierung oder Modernisierung – wir finden für jedes Zuhause und jedes Projekt die passende Lösung. Persönlich, ehrlich und vor Ort im Raum Warendorf, Münster und Osnabrück.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leistungen.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors text-center">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6 flex-grow text-center">
                {item.description}
              </p>
              <span className="text-primary font-semibold group-hover:underline mt-auto text-center">
                Mehr erfahren →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Haben Sie Fragen oder wünschen Sie eine persönliche Beratung?
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors shadow-md"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </Container>
    </div>
  )
}