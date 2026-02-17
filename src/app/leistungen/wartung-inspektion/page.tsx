// src/app/leistungen/wartung-inspektion/page.tsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import Breadcrumbs from '@/components/Breadcrumbs' // ← neu importiert

export const metadata = {
  title: 'Wartung & Inspektion von Fenstern & Türen | Gebrüder Müller',
  description: 'Regelmäßige Wartung und Inspektion verlängern die Lebensdauer Ihrer Fenster und Türen enorm – vermeiden Sie teure Schäden mit unseren Wartungsverträgen in Warendorf und Osnabrück.',
}

export default function WartungInspektion() {
  return (
    <div className="bg-white">
      {/* Breadcrumbs – direkt oben eingebaut */}
      <Breadcrumbs
        items={[
          { label: 'Leistungen', href: '/leistungen' },
          { label: 'Wartung & Inspektion' }
        ]}
      />

      {/* Hero-Bereich */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wartung & Inspektion – Langlebigkeit garantiert
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              Regelmäßige Pflege vermeidet teure Schäden und verlängert die Lebensdauer Ihrer Fenster und Türen um viele Jahre – in Warendorf, Osnabrück und Umgebung.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-gray-900 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Wartungsvertrag anfragen
            </Link>
          </div>
        </Container>
      </section>

      {/* Einleitung */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Warum regelmäßige Wartung & Inspektion unverzichtbar ist
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Fenster und Türen sind täglich Wind, Wetter, Temperaturschwankungen und mechanischer Belastung ausgesetzt. Ohne regelmäßige Pflege entstehen schnell vermeidbare Schäden: undichte Dichtungen, verschlissene Beschläge, Korrosion oder verzogene Profile. Regelmäßige Wartung verhindert genau das – sie erhöht die Lebensdauer enorm und spart langfristig Kosten in Warendorf und Osnabrück.
          </p>
        </Container>
      </section>

      {/* Vorteile der Wartung */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Was regelmäßige Wartung für Sie bedeutet
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Vermeidung teurer Folgeschäden</h3>
              <p className="text-gray-700">
                Früherkennung von Verschleiß, undichten Dichtungen oder defekten Beschlägen verhindert Wasserschäden, Schimmel oder teure Reparaturen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Deutlich längere Lebensdauer</h3>
              <p className="text-gray-700">
                Regelmäßig gepflegte Fenster und Türen halten oft 30–50 Jahre oder länger – ohne Wartung sinkt die Lebensdauer um viele Jahre.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Erhalt des Werts Ihrer Immobilie</h3>
              <p className="text-gray-700">
                Gepflegte Fenster und Türen sorgen für bessere Energieeffizienz, Komfort und Optik – und erhöhen den Gesamtwert Ihrer Immobilie.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Unsere Leistungen */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unsere Wartungs- und Inspektionsleistungen
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Einmalige Wartung & Inspektion</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Wir prüfen und pflegen Ihre Fenster und Türen einmalig oder nach Bedarf:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>✓ Reinigung von Profilen, Dichtungen und Glas</li>
                <li>✓ Fetten und Einstellen aller Beschläge</li>
                <li>✓ Prüfung von Dichtungen und Abdichtungen</li>
                <li>✓ Kontrolle auf Korrosion und Verschleiß</li>
                <li>✓ Dokumentation mit Fotos und Empfehlungen</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Jährliche Wartungsverträge</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Für Mehrfamilienhäuser, Gewerbeobjekte und größere Privatimmobilien bieten wir attraktive Wartungsverträge:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>✓ 1× jährlich komplette Wartung und Inspektion</li>
                <li>✓ Alle vorgeschriebenen Arbeiten nach Herstellerangaben</li>
                <li>✓ Priorisierter Service bei Störungen</li>
                <li>✓ Dokumentation und detaillierte Berichte</li>
                <li>✓ Planbare Kosten – keine Überraschungen</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-xl font-medium mt-12 max-w-3xl mx-auto">
            Regelmäßige Wartung spart Geld, erhält den Wert Ihrer Immobilie und sorgt für jahrelangen sorgenfreien Betrieb.
          </p>
        </Container>
      </section>

      {/* Call-to-Action */}
      <section className="bg-primary text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Lassen Sie Ihre Fenster & Türen professionell warten
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Ob einmalige Wartung oder jährlicher Vertrag – wir kümmern uns um Langlebigkeit und Werterhalt in Warendorf und Umgebung.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-primary px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Jetzt Wartungstermin vereinbaren
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}