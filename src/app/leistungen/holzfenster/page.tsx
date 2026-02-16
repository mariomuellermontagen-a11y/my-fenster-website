// src/app/leistungen/holzfenster/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Holzfenster 68 mm, 80 mm & 92 mm mit Gutmann-Alu-Deckschalen | Gebrüder Müller',
  description: 'Hochwertige Holzfenster mit 68, 80 und 92 mm Bautiefe – optional mit Gutmann-Aluminium-Deckschalen für maximale Langlebigkeit und Pflegeleichtigkeit in Warendorf und Osnabrück.',
}

export default function Holzfenster() {
  return (
    <div className="bg-white">
      {/* Hero-Bereich */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Holzfenster – 68 mm • 80 mm • 92 mm
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              Natürlich, warm & nachhaltig – optional mit hochwertigen Gutmann-Aluminium-Deckschalen für maximale Langlebigkeit in Warendorf, Osnabrück und Münsterland
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
            Unsere Holzfenster-Systeme im Detail
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Wir fertigen Holzfenster in bewährten Bautiefen von 68 mm bis 92 mm – aus hochwertigen Hölzern wie Lärche, Eiche, Kiefer oder Meranti. Alle Systeme sind optional mit Gutmann-Aluminium-Deckschalen kombinierbar, was die Lebensdauer erheblich verlängert und die Pflege minimiert.
          </p>
        </Container>
      </section>

      {/* Abschnitt 1: 68 mm Bautiefe */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                68 mm Bautiefe – Das kompakte Holzfenster
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Das 68-mm-System ist besonders schlank und lichtdurchlässig – ideal für Sanierungen und Projekte mit klassischer Optik und guter Energieeffizienz in Warendorf und Osnabrück.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis ca. 0,85–0,95 W/(m²K) mit Dreifachverglasung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schlanke Ansichtsbreiten für mehr Tageslicht
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schallschutz bis Rw 42 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 möglich
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Optional mit Gutmann-Aluminium-Deckschale
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/68.png"
                alt="Querschnitt 68-mm-Holzfenstersystem – schlankes Profil für Sanierung und klassische Optik, optional mit Gutmann-Alu-Deckschale"
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

      {/* Abschnitt 2: 80 mm Bautiefe */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                80 mm Bautiefe – Das ausgewogene Holzfenster
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Das 80-mm-System bietet einen exzellenten Kompromiss aus schlanker Optik und hoher Dämmung – ideal für energieeffiziente Neubauten und Sanierungen in Warendorf und Osnabrück.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis ca. 0,80–0,85 W/(m²K)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Guter Schallschutz bis Rw 44 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Hohe Stabilität und große Glasflächen möglich
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Optional mit Gutmann-Aluminium-Deckschale für pflegeleichte Außenseite
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/80.png"
                alt="Querschnitt 80-mm-Holzfenstersystem – ausgewogene Dämmung und Stabilität, optional mit Gutmann-Alu-Deckschale"
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

      {/* Abschnitt 3: 92 mm Bautiefe */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                92 mm Bautiefe – Das Premium-Holzfenster
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Das 92-mm-System ist unser leistungsstärkstes Holzfenster – maximale Dämmung und Stabilität für Passivhaus-Standards und extreme Anforderungen in Warendorf und Osnabrück.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis ca. 0,75–0,80 W/(m²K)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schallschutz bis Rw 48 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3 / RC4
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Hohe Stabilität für große Formate und schwere Verglasungen
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Optional mit Gutmann-Aluminium-Deckschale – pflegeleicht und wetterfest
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/92.png"
                alt="Querschnitt 92-mm-Holzfenstersystem – Premium-Dämmung und Stabilität für Passivhaus-Standards, optional mit Gutmann-Alu-Deckschale"
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
              Bereit für Ihr neues Holzfenster?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Wir beraten Sie individuell zu 68 mm, 80 mm oder 92 mm – inklusive Gutmann-Aluminium-Deckschalen.
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