// src/app/leistungen/projektgeschaeft/page.tsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Projektgeschäft – Fenster & Türen für Bauträger & öffentliche Bauvorhaben | Gebrüder Müller',
  description: 'Professionelle Abwicklung großer Projekte – von CAD-Planung über Statik bis zur termintreuen Montage für Bauträger, Gewerbe und öffentliche Auftraggeber im Raum Warendorf, Münster und Osnabrück.',
}

export default function Projektgeschaeft() {
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Leistungen', href: '/leistungen' },
          { label: 'Projektgeschäft' }
        ]}
      />

      {/* Hero-Bereich */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Projektgeschäft – Großprojekte termintreu & stressfrei umgesetzt
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              Von der Ausschreibung bis zur Schlüsselübergabe – zuverlässige Fenster- und Tür-Lösungen für Bauträger, Architekten, Generalunternehmer und öffentliche Auftraggeber im Raum Warendorf, Münster und Osnabrück.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-gray-900 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Jetzt Projekt anfragen
            </Link>
          </div>
        </Container>
      </section>

      {/* Einleitung */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Ihr zuverlässiger Partner für anspruchsvolle Bauvorhaben
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto text-center">
            Große Projekte leben von Präzision, klarer Kommunikation und absoluter Termintreue. Mit über 15 Jahren persönlicher Berufserfahrung im Fenster- und Türenbau entlasten wir Sie genau da, wo es für Sie am wichtigsten ist: Planung, Koordination, Lieferung und Montage. Sie konzentrieren sich auf Ihr Kerngeschäft – wir kümmern uns um Fenster & Türen von A bis Z.
          </p>

          <p className="text-lg text-gray-600 text-center">
            Wir realisieren erfolgreich Mehrfamilienhäuser, Gewerbebauten, Schulen, Kitas und öffentliche Projekte – immer mit festem Ansprechpartner und transparenter Abwicklung.
          </p>
        </Container>
      </section>

      {/* Vorteile */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ihre Vorteile mit uns als Projektpartner
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Alles aus einer Hand</h3>
              <p className="text-gray-700">
                CAD-Detailplanung, Anschlussdetails, Statik, bauphysikalische Berechnungen, Lüftungskonzepte und Montage – keine Schnittstellenprobleme, keine Verzögerungen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Absolute Termintreue</h3>
              <p className="text-gray-700">
                Feste Montagetermine, wöchentliche Statusberichte, enge Abstimmung mit allen Gewerken – wir halten, was wir versprechen, damit Ihr Baufortschritt nicht leidet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Skalierbar & sicher</h3>
              <p className="text-gray-700">
                Ob 50 oder 500+ Elemente – wir liefern Qualität in Serie. Einbruchhemmung, Schallschutz, Passivhaus-Standards und Brandschutz? Alles abgedeckt.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ablauf */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            So läuft ein Projekt mit uns ab
          </h2>

          <div className="space-y-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Ausschreibung & erste Beratung</h3>
                <p className="text-gray-700">
                  Wir analysieren Ihre Ausschreibung, beraten zu passenden Systemen und erstellen eine erste realistische Kostenschätzung – schnell und unverbindlich.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Detailplanung & Festpreis-Angebot</h3>
                <p className="text-gray-700">
                  CAD-Detailplanung, Anschlussdetails, Statik, bauphysikalische Berechnungen und Lüftungskonzepte – alles inklusive. Sie erhalten ein transparentes Festpreis-Angebot mit klarem Terminplan.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Lieferung & Montage</h3>
                <p className="text-gray-700">
                  Qualitätskontrolle, termingerechte Lieferung zur Baustelle, präzise Montage durch eigene Teams und enge Abstimmung mit allen Gewerken.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Abnahme & Übergabe</h3>
                <p className="text-gray-700">
                  Gemeinsame Abnahme, Einweisung, Übergabeprotokoll und Nachbetreuung – Sie erhalten schlüsselfertige Qualität.
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
              Ihr nächstes Großprojekt mit uns?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Wir entlasten Sie von Anfang an – mit Planungssicherheit, Termintreue und voller Transparenz.  
              Lassen Sie uns jetzt sprechen – wir melden uns innerhalb von 24 Stunden.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-primary px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Jetzt Projekt anfragen & Angebot erhalten
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}