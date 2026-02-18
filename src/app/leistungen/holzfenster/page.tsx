// src/app/leistungen/holzfenster/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Holzfenster 68 mm, 80 mm & 92 mm | Gebrüder Müller',
  description: 'Hochwertige Holzfenster mit 68, 80 und 92 mm Bautiefe – natürlich, warm & nachhaltig, optional mit Gutmann-Alu-Deckschalen für maximale Langlebigkeit im Raum Warendorf, Münster und Osnabrück.',
}

export default function Holzfenster() {
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Leistungen', href: '/leistungen' },
          { label: 'Holzfenster' }
        ]}
      />

      {/* Hero-Bereich */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Holzfenster – 68 mm • 80 mm • 92 mm
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              Natürlich, warm & nachhaltig – aus hochwertigen Hölzern für behagliches Wohnen im Raum Warendorf, Münster und Osnabrück
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
            Wir fertigen Holzfenster in bewährten Bautiefen von 68 mm bis 92 mm – aus hochwertigen Hölzern wie Lärche, Eiche, Kiefer oder Meranti. Natürliche Wärme, hoher Wohnkomfort und nachhaltige Materialien für Neubau und Sanierung im Raum Warendorf, Münster und Osnabrück.
          </p>
        </Container>
      </section>

      {/* Abschnitt 1: 68 mm */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                68 mm – Das kompakte Holzfenster
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Das 68-mm-System ist besonders schlank und lichtdurchlässig – ideal für Sanierungen und Projekte mit klassischer Optik und guter Energieeffizienz.
              </p>

              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis ca. 0,85 W/(m²K) mit Dreifachverglasung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schlanke Ansichtsbreiten für maximale Tageslichtausbeute
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
                  Ideal für Altbausanierungen und klassische Optik
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/68.png"
                alt="Querschnitt 68-mm-Holzfenstersystem – schlankes Profil für Sanierung und klassische Optik"
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

      {/* Abschnitt 2: 80 mm */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                80 mm – Das ausgewogene Holzfenster
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Das 80-mm-System bietet einen exzellenten Kompromiss aus schlanker Optik und hoher Dämmung – ideal für energieeffiziente Neubauten und Sanierungen.
              </p>

              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis ca. 0,80 W/(m²K)
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
                  Natürliche Holzoptik mit hohem Wohnkomfort
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/80.png"
                alt="Querschnitt 80-mm-Holzfenstersystem – ausgewogene Dämmung und Stabilität"
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

      {/* Abschnitt 3: 92 mm */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                92 mm – Das Premium-Holzfenster
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Das 92-mm-System ist unser leistungsstärkstes Holzfenster – maximale Dämmung und Stabilität für Passivhaus-Standards und extreme Anforderungen.
              </p>

              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis ca. 0,75 W/(m²K)
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
                  Ideal für Passivhaus-Standards und extreme Anforderungen
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/92.png"
                alt="Querschnitt 92-mm-Holzfenstersystem – Premium-Dämmung und Stabilität für Passivhaus-Standards"
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

      {/* Neuer Abschnitt: Farb- und Oberflächen-Hinweis */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Vielfältige Oberflächenmöglichkeiten
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Unsere Holzfenster-Systeme können optional mit hochwertigen Gutmann-Aluminium-Deckschalen kombiniert werden – für maximale Witterungsbeständigkeit und die volle Farbvielfalt von Aluminium (nahezu alle RAL-Farben, Feinstruktur, Eloxal). Die genaue Machbarkeit und das perfekte Finish besprechen wir in der persönlichen Beratung vor Ort im Raum Warendorf, Münster und Osnabrück.
            </p>
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
              Wir beraten Sie individuell zu 68 mm, 80 mm oder 92 mm – kostenlos und vor Ort im Raum Warendorf, Münster und Osnabrück.
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