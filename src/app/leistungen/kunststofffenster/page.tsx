// src/app/leistungen/kunststofffenster/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Kunststofffenster GreenEvolution & BlueEvolution | Gebrüder Müller',
  description: 'Salamander GreenEvolution AD/MD, BlueEvolution 82 MD & 92 MD – detaillierte Übersicht zu Bautiefen, Dämmung und Features für Neubau und Sanierung in Warendorf und Osnabrück.',
}

export default function Kunststofffenster() {
  return (
    <div className="bg-white">
      {/* Hero-Bereich */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Salamander Kunststofffenster – GreenEvolution & BlueEvolution
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              GreenEvolution AD/MD • BlueEvolution 82 MD • BlueEvolution 92 MD – für höchste Energieeffizienz und Passivhaus-Standards in Warendorf, Osnabrück und Münsterland
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
            Unsere Salamander Kunststoff-Systeme im Detail
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Wir setzen auf die bewährten Salamander-Serien GreenEvolution und BlueEvolution – von Anschlag- bis Mitteldichtungssystemen. Ob Standard-Neubau oder Passivhaus: Finden Sie das passende Profil für Ihre Anforderungen in Warendorf und Umgebung.
          </p>
        </Container>
      </section>

      {/* Abschnitt 1: GreenEvolution AD */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                GreenEvolution AD – Das Anschlagdichtungssystem
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Das GreenEvolution AD ist ein vielseitiges Anschlagdichtungssystem mit 76 mm Bautiefe – ideal für kosteneffiziente Neubauten und Sanierungen in Warendorf und Osnabrück. Es bietet solide Dämmwerte und ist in zahlreichen Farben und Formen verfügbar.
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
                  Schallschutz bis Rw 45 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 serienmäßig möglich
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Umweltfreundlich: 100% recycelbar
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Vielseitige Formen: Rechteck, Schrägen, Rundbögen
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/GE-AD.png"
                alt="Querschnitt GreenEvolution AD Anschlagdichtungssystem – 76 mm Bautiefe, 5-Kammer-Profil für solide Wärmedämmung und Schallschutz"
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

      {/* Abschnitt 2: GreenEvolution MD */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                GreenEvolution MD – Das Mitteldichtungssystem
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Das GreenEvolution MD mit 76 mm Bautiefe und zusätzlicher Mitteldichtung bietet verbesserte Dämmung und Schallschutz – für energieeffiziente Projekte mit höheren Anforderungen in Warendorf und Osnabrück.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis 0,75 W/(m²K)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Erhöhter Schallschutz bis Rw 47 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Bessere Witterungsbeständigkeit durch Mitteldichtung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Passivhaus-kompatibel in Kombination mit Verglasung
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/GE-MD.png"
                alt="Querschnitt GreenEvolution MD Mitteldichtungssystem – 76 mm Bautiefe mit zusätzlicher Mitteldichtung für verbesserte Dämmung und Schallschutz"
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

      {/* Abschnitt 3: BlueEvolution 82 MD */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                BlueEvolution 82 MD – Das Mitteldichtungssystem
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                BlueEvolution 82 MD ist passivhausgeeignet, auch bei Funktionsgläsern. Es deckt anspruchsvolle Anforderungen an Dämmung und Design ab – ideal für energieeffiziente Neubauten und Sanierungen in Warendorf und Osnabrück.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis 0,75 W/(m²K)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Passivhaus-zertifiziert, auch mit Sonnenschutz- oder Schallschutzglas
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Hoher Schallschutz bis Rw 47 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schlanke Ansichtsbreiten für mehr Licht
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/BE82.png"
                alt="Querschnitt BlueEvolution 82 MD Mitteldichtungssystem – 82 mm Bautiefe, passivhausgeeignet für höchste Energieeffizienz"
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

      {/* Abschnitt 4: BlueEvolution 92 MD */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                BlueEvolution 92 MD – Das Mitteldichtungssystem
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                BlueEvolution 92 MD hat die größte Bautiefe am Markt und deckt Passivhaus-Standards selbst bei extremen Funktionsanforderungen ab – ohne teure Kryptonfüllung.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis 0,73 W/(m²K)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Passivhaus ohne Kryptonfüllung – auch bei Funktionsgläsern
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Maximaler Schallschutz bis Rw 48 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Höchste Stabilität für große Formate
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/BE92.png"
                alt="Querschnitt BlueEvolution 92 MD Mitteldichtungssystem – 92 mm Bautiefe, maximale Dämmung und Stabilität für Passivhaus-Projekte"
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
              Bereit für Ihr neues Salamander Kunststofffenster?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Wir beraten Sie individuell zu GreenEvolution oder BlueEvolution – kostenlos und unverbindlich.
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