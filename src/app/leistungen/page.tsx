// src/app/leistungen/page.tsx
import Link from 'next/link'
import { Container } from '@/components/Container'

export default function Leistungen() {
  const leistungen = [
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
    {
      title: 'Hebeschiebetüren',
      description: 'Großformatige, barrierefreie Elemente bis 6–7 m Breite – leichtgängig und dicht.',
      href: '/leistungen/hebeschiebetueren',
    },
    {
      title: 'Wartung & Inspektion',
      description: 'Regelmäßige Pflege, Dichtheitsprüfung, Beschlagwartung und Reparaturen für maximale Langlebigkeit.',
      href: '/leistungen/wartung-inspektion',
    },
    {
      title: 'Projektabwicklung',
      description: 'Von der Ausschreibung über CAD-Planung bis zur termintreuen Montage und Abnahme.',
      href: '/leistungen/projektabwicklung',
    },
  ]

  return (
    <div className="bg-white py-16 md:py-24">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Unsere Leistungen
        </h1>

        <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Wir bieten Ihnen hochwertige und technisch durchdachte Lösungen – von der Beratung über die Planung bis zur präzisen Montage.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leistungen.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
            >
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">
                {item.description}
              </p>
              <span className="text-primary font-semibold group-hover:underline mt-auto">
                Mehr erfahren →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Haben Sie Fragen oder wünschen Sie eine persönliche Beratung?
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors shadow-md"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </Container>
    </div>
  )
}