// src/app/leistungen/hebeschiebetueren/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import Breadcrumbs from '@/components/Breadcrumbs' // ← neu importiert

export const metadata = {
  title: 'Hebeschiebetüren Kunststoff, Aluminium & Holz | Gebrüder Müller',
  description: 'Großformatige Hebeschiebetüren – Salamander EvolutionDrive (Kunststoff), Aluprof MB-77HS (Aluminium) und Holz 68/80 mm mit Gutmann-Alu-Deckschalen – barrierefrei & hochgedämmt in Warendorf und Osnabrück.',
}

export default function Hebeschiebetueren() {
  return (
    <div className="bg-white">
      {/* Breadcrumbs – direkt oben eingebaut */}
      <Breadcrumbs
        items={[
          { label: 'Leistungen', href: '/leistungen' },
          { label: 'Hebeschiebetüren' }
        ]}
      />

      {/* Hero-Bereich */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hebeschiebetüren – Kunststoff, Aluminium & Holz
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              Barrierefrei, hochgedämmt und lichtdurchflutet – für fließende Übergänge nach draußen in Warendorf, Osnabrück und Münsterland
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-gray-900 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Jetzt unverbindliches Angebot anfragen
            </Link>
          </div>
        </Container>
      </section>

      {/* Einleitung */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unsere Hebeschiebetür-Systeme im Detail
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Hebeschiebetüren (HST) schaffen großzügige, barrierefreie Übergänge zwischen Wohnraum und Terrasse/Garten. Wir bieten drei starke Systeme: Kunststoff (Salamander EvolutionDrive), Aluminium (Aluprof MB-77HS) und Holz (68/80 mm mit optionalen Gutmann-Alu-Deckschalen).
          </p>
        </Container>
      </section>

      {/* Abschnitt 1: Salamander EvolutionDrive (Kunststoff) */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Salamander EvolutionDrive – Kunststoff-Hebeschiebetüren
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                EvolutionDrive ist ein modernes, hochgedämmtes Kunststoff-Hebeschiebesystem mit exzellenter Wärmedämmung und einfacher Bedienung – ideal für energieeffiziente Neubauten und Sanierungen mit großen Öffnungen in Warendorf und Osnabrück.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis 0,78 W/(m²K) mit Dreifachverglasung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Barrierefrei (Nullschwelle möglich)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schallschutz bis Rw 45 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 serienmäßig möglich
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Flügelgewichte bis 400 kg
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Große Elemente bis 6,5 m Breite
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/ED82.png"
                alt="Querschnitt Salamander EvolutionDrive Kunststoff-Hebeschiebesystem – hochgedämmt, barrierefrei, Flügelgewichte bis 400 kg"
                fill
                className="object-contain rounded-2xl shadow-xl"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Abschnitt 2: Aluprof MB-77HS (Aluminium) */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Aluprof MB-77HS – Aluminium-Hebeschiebetüren
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                MB-77HS ist ein hochdämmendes Aluminium-Hebeschiebesystem mit 77 mm Bautiefe – schlanke Profile, hohe Stabilität und exzellente Wärmedämmung. Ideal für moderne Architektur mit großen Öffnungen und hohen Anforderungen in Warendorf und Osnabrück.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis 0,84 W/(m²K) mit Dreifachverglasung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Barrierefrei (Nullschwelle möglich)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schallschutz bis Rw 47 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Flügelgewichte bis 600 kg
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Große Elemente bis 3,3 m Höhe und 6,5 m Breite
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/HS77.png"
                alt="Querschnitt Aluprof MB-77HS Aluminium-Hebeschiebesystem – 77 mm Bautiefe, barrierefrei, Flügelgewichte bis 600 kg"
                fill
                className="object-contain rounded-2xl shadow-xl"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Abschnitt 3: Holz-Hebeschiebetüren */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Holz-Hebeschiebetüren – 68 mm & 80 mm
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Unsere Holz-Hebeschiebetüren in 68 mm (ideal für Altbausanierung) und 80 mm (ideal für Neubau) bieten natürliche Wärme und Wohnkomfort. Optional mit Gutmann-Aluminium-Deckschalen für maximale Witterungsbeständigkeit und pflegeleichte Außenseite.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis 0,80–0,95 W/(m²K) je nach Bautiefe und Verglasung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Barrierefrei (Nullschwelle möglich)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schallschutz bis Rw 44 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Optional mit Gutmann-Aluminium-Deckschale – wetterfest & pflegeleicht
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Flügelgewichte bis 400 kg
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/HS80.png"
                alt="Querschnitt Holz-Hebeschiebetüren 68/80 mm mit optionaler Gutmann-Alu-Deckschale – natürliche Optik, barrierefrei und witterungsbeständig"
                fill
                className="object-contain rounded-2xl shadow-xl"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Call-to-Action */}
      <section className="bg-primary text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für Ihre neuen Hebeschiebetüren?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Wir beraten Sie individuell zu Kunststoff (EvolutionDrive), Aluminium (MB-77HS) oder Holz (68/80 mm) – kostenlos und vor Ort in Warendorf und Umgebung.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-primary px-10 py-5 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Persönliche Beratung vereinbaren
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}