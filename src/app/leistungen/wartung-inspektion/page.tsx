// src/app/leistungen/wartung-inspektion/page.tsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Wartung, Inspektion & Reparatur von Fenstern & Türen | Gebrüder Müller',
  description: 'Regelmäßige Wartung, Inspektion und sofortige Reparatur Ihrer Fenster & Türen – wir prüfen, pflegen und tauschen defekte Teile aus einer Hand im Raum Warendorf, Münster und Osnabrück.',
}

export default function WartungInspektion() {
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
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
              Wartung, Inspektion & Reparatur – alles aus einer Hand
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              Wir prüfen nicht nur Ihre Fenster & Türen – wir pflegen sie, reparieren Defekte sofort und tauschen kaputte Teile aus, bevor aus kleinen Problemen teure Schäden werden.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-gray-900 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </Container>
      </section>

      {/* Einleitung */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Wir lassen Ihre Fenster & Türen nicht allein
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto text-center">
            Fenster und Türen müssen jeden Tag Wind, Regen, Sonne, Kälte und tägliche Nutzung aushalten. Ohne Pflege werden Dichtungen porös, Beschläge verschleißen, Scharniere quietschen – und plötzlich tropft es rein oder die Tür klemmt.
          </p>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Deshalb kommen wir nicht nur zum Prüfen. Wir reinigen, fetten, justieren und reparieren oder tauschen defekte Teile gleich vor Ort aus, wenn möglich. So haben Sie jahrelang Ruhe – und wir sind Ihr Ansprechpartner für alles aus einer Hand. Persönlich bei Ihnen im Raum Warendorf, Münster und Osnabrück.
          </p>
        </Container>
      </section>

      {/* Vorteile */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Was Sie durch regelmäßige Wartung gewinnen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Keine teuren Folgeschäden</h3>
              <p className="text-gray-700">
                Kleine Undichtigkeiten oder verschlissene Beschläge werden früh erkannt und behoben – bevor Wasser eindringt, Schimmel entsteht oder der Griff abbricht.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Besonders attraktiv für Vermieter</h3>
              <p className="text-gray-700">
                Als Vermieter kennen Sie den Zustand Ihrer Fenster oft nicht genau – und Mieter melden kleine Probleme meist erst spät oder gar nicht. Mit regelmäßiger Wartung behalten Sie den Überblick, vermeiden teure Spätschäden und schützen den Wert Ihrer Immobilie langfristig.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">30+ Jahre Freude an Ihren Fenstern</h3>
              <p className="text-gray-700">
                Mit regelmäßiger Pflege und schneller Reparatur halten Ihre Elemente oft Jahrzehnte länger – statt nach 10–15 Jahren ausgetauscht zu werden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Mehr Komfort, weniger Kosten</h3>
              <p className="text-gray-700">
                Bessere Dichtheit spart Heizkosten. Weniger Lärm dringt ein. Und Sie haben einen festen Ansprechpartner – keine langen Wartezeiten auf Ersatzteile.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Unsere Leistungen */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            So kümmern wir uns um Ihre Fenster & Türen
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Einmalige Wartung & Inspektion</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Perfekt für den Einstieg oder wenn Sie erstmal testen möchten:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>✓ Komplette Reinigung von Profilen, Dichtungen & Glas</li>
                <li>✓ Fetten, Einstellen & Justieren aller Beschläge</li>
                <li>✓ Prüfung und sofortige Reparatur kleiner Defekte (soweit möglich)</li>
                <li>✓ Austausch verschlissener Teile vor Ort, wenn vorrätig</li>
                <li>✓ Detaillierter Bericht mit Fotos & Empfehlungen</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Jährlicher Wartungsvertrag</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Für Mehrfamilienhäuser, Gewerbe oder wenn Sie auf Nummer sicher gehen wollen:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>✓ 1× jährlich komplette Wartung, Inspektion & Reparatur</li>
                <li>✓ Austausch defekter Teile (Dichtungen, Beschläge etc.) im Rahmen des Vertrags</li>
                <li>✓ Priorisierter Service bei Störungen – oft am selben Tag</li>
                <li>✓ Jährliche Dokumentation & Zustandsbericht</li>
                <li>✓ Planbare, transparente Kosten – keine bösen Überraschungen</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-xl font-medium mt-12 max-w-3xl mx-auto">
            Wir sind nicht nur Gutachter – wir sind Ihr Partner, der prüft, repariert und austauscht, damit Sie sorgenfrei wohnen können.
          </p>
        </Container>
      </section>

      {/* Call-to-Action */}
      <section className="bg-primary text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Lassen Sie uns jetzt für Ihre Fenster & Türen sorgen
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Ob einmalige Wartung oder jährlicher Vertrag – wir kommen zu Ihnen, prüfen genau und reparieren oder tauschen bei Bedarf sofort aus.  
              Rufen Sie uns an oder schreiben Sie – wir sind im Raum Warendorf, Münster und Osnabrück für Sie da.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-primary px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}