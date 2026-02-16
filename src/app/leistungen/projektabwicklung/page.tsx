// src/app/leistungen/projektgeschaeft/page.tsx
import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Projektgeschäft – Fenster & Türen für Bauträger & öffentliche Bauvorhaben | Gebrüder Müller',
  description: 'Professionelle Abwicklung großer Projekte – von CAD-Planung über Statik bis zur termintreuen Montage für Bauträger, Gewerbe und öffentliche Auftraggeber.',
}

export default function Projektgeschaeft() {
  return (
    <div className="bg-white">
      {/* Hero-Bereich */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Projektgeschäft – Großprojekte termintreu umgesetzt
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              Von der Ausschreibung bis zur Abnahme – zuverlässige Fenster- und Tür-Lösungen für Bauträger, Gewerbe und öffentliche Bauvorhaben
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-gray-900 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Projekt anfragen
            </Link>
          </div>
        </Container>
      </section>

      {/* Einleitung */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ihr Partner für anspruchsvolle Bauvorhaben
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Im Projektgeschäft zählen Präzision, Termintreue und technische Kompetenz. Wir begleiten Bauträger, Architekten, Generalunternehmer und öffentliche Auftraggeber von der Planung bis zur schlüsselfertigen Übergabe – mit CAD-Detailplanung, statischen Nachweisen, bauphysikalischen Berechnungen und sauberer Montage.
          </p>
        </Container>
      </section>

      {/* Vorteile */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ihre Vorteile im Projektgeschäft
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Technisch durchdacht</h3>
              <p className="text-gray-700">
                Eigene CAD-Planung, Anschlussdetails, Statik und bauphysikalische Berechnungen – alles aus einer Hand.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Termintreu & zuverlässig</h3>
              <p className="text-gray-700">
                Feste Montagetermine, wöchentliche Statusberichte und klare Kommunikation – wir halten, was wir versprechen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Skalierbar für Großprojekte</h3>
              <p className="text-gray-700">
                Mehrfamilienhäuser, Gewerbebauten, Schulen, Kitas – wir realisieren Volumenprojekte mit 50 bis 500+ Elementen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Unser Ablauf */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unser bewährter Projektablauf
          </h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Ausschreibung & Beratung</h3>
                <p className="text-gray-700">
                  Analyse der Ausschreibung, Beratung zu Systemen (Kunststoff, Aluminium, Holz), erste Kostenschätzung und Machbarkeitsprüfung.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Planung & Angebot</h3>
                <p className="text-gray-700">
                  CAD-Detailplanung, Anschlussdetails, Statik (bei Bedarf) sowie bauphysikalische Berechnungen. 
                  Zusätzlich erstellen wir auf Wunsch Lüftungskonzepte nach DIN 1946 und integrieren erforderliche 
                  Lüftungskomponenten direkt in das Fenstersystem. So stellen wir sicher, dass Feuchteschutz, 
                  Wohnraumlüftung und alle gesetzlichen Anforderungen zuverlässig erfüllt werden – für maximale 
                  Planungssicherheit und nachhaltigen Schutz vor Schimmelbildung. 
                  Sie erhalten ein transparentes Festpreis-Angebot inklusive Terminplan.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Koordination & Lieferung</h3>
                <p className="text-gray-700">
                  Qualitätskontrolle, termingerechte Lieferung zur Baustelle, enge Abstimmung mit allen Gewerken.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Montage & Abnahme</h3>
                <p className="text-gray-700">
                  Präzise Montage durch eigene Teams, Einweisung, gemeinsame Abnahme und Übergabeprotokoll.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call-to-Action */}
      <section className="bg-primary text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ihr nächstes Projekt mit uns?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Wir übernehmen die komplette Abwicklung – termintreu, technisch einwandfrei und zuverlässig.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-primary px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Projekt besprechen
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
