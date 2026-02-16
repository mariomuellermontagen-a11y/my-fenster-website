// src/app/leistungen/aluminiumfenster/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Aluminiumfenster Aluprof MB-45, MB-79N, MB-86N & MB-104N | Gebrüder Müller',
  description: 'Aluprof MB-45 (kalt), MB-79N, MB-86N & MB-104N – schlanke Profile, Passivhaus-tauglich, hoher Schallschutz und Einbruchschutz für Warendorf und Osnabrück.',
}

export default function Aluminiumfenster() {
  return (
    <div className="bg-white">
      {/* Hero-Bereich */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Aluprof Aluminiumfenster – MB-45 • MB-79N • MB-86N • MB-104N
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              Vom kalten Innenraumsystem bis zum Passivhaus-Premium – schlanke Profile für moderne Architektur und höchste Anforderungen in Warendorf, Osnabrück und Münsterland
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
            Unsere Aluprof Aluminium-Systeme im Detail
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Wir setzen auf die bewährten Aluprof MB-Serien – von kalten Innenraumsystemen (MB-45) bis hin zu hochdämmenden Passivhaus-Systemen (MB-104N). Schlanke Profile, höchste Stabilität und maximale Gestaltungsfreiheit für Neubau, Sanierung und Gewerbe in Warendorf und Umgebung.
          </p>
        </Container>
      </section>

      {/* Abschnitt 1: MB-45 */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                MB-45 – Das kalte Aluminiumsystem
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                MB-45 ist ein schlankes, kaltes Aluminiumsystem ohne thermische Trennung – ideal für Innenräume, Trennwände, Wintergärten oder Türen, bei denen Wärmedämmung keine Rolle spielt.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Bautiefe 45 mm – extrem schlanke Ansichtsbreiten
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Hohe Stabilität für große Glasflächen
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 möglich
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Ideal für Innentüren, Trennwände und Wintergärten
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Pulverbeschichtung in allen RAL-Farben
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/MB45.png"
                alt="Querschnitt Aluprof MB-45 kaltes Aluminiumsystem – 45 mm Bautiefe, extrem schlanke Ansichtsbreiten für Innentüren und Wintergärten"
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

      {/* Abschnitt 2: MB-79N */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                MB-79N – Das Standard-Wärmeschutzsystem
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                MB-79N ist ein ausgewogenes Wärmeschutzsystem mit 79 mm Bautiefe – solide Dämmung, schlanke Optik und vielseitig einsetzbar für Neubau und Sanierung in Warendorf und Osnabrück.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis 0,85 W/(m²K)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schallschutz bis Rw 45 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Große Flügelgewichte bis 200 kg
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Viele Farben & Oberflächen (RAL, Dekorfolie, Eloxal)
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/MB79.png"
                alt="Querschnitt Aluprof MB-79N Wärmeschutzsystem – 79 mm Bautiefe, solide Dämmung und hohe Stabilität für Neubau und Sanierung"
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

      {/* Abschnitt 3: MB-86N */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                MB-86N – Das hochdämmende System
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                MB-86N mit 86 mm Bautiefe bietet exzellente Wärmedämmung und ist passivhausgeeignet – ideal für energieeffiziente Gebäude mit großen Glasflächen in Warendorf und Osnabrück.
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
                  Passivhaus-tauglich mit Dreifachverglasung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Schallschutz bis Rw 47 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3 / RC4
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Hohe Stabilität für große Flügel bis 300 kg
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/MB86.png"
                alt="Querschnitt Aluprof MB-86N hochdämmendes Aluminiumsystem – 86 mm Bautiefe, passivhausgeeignet für große Glasflächen"
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

      {/* Abschnitt 4: MB-104N */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start md:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                MB-104N – Das Premium-Passivhaus-System
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                MB-104N mit 104 mm Bautiefe ist das leistungsstärkste Aluprof-System – Passivhaus-tauglich selbst bei extremen Funktionsanforderungen, ohne teure Kryptonfüllung.
              </p>

              {/* Features-Übersicht */}
              <h3 className="text-2xl font-bold mb-4">Wichtige Features</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Uw-Wert bis 0,70 W/(m²K)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Passivhaus ohne Krypton – kosteneffizient
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Maximaler Schallschutz bis Rw 48 dB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Einbruchhemmung RC2 / RC3 / RC4
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  Höchste Stabilität für große Formate und schwere Verglasungen
                </li>
              </ul>
            </div>

            <div className="relative h-64 md:h-96">
              <Image
                src="/MB104.png"
                alt="Querschnitt Aluprof MB-104N Premium-Passivhaus-System – 104 mm Bautiefe, maximale Dämmung und Stabilität für energieeffiziente Gebäude"
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
              Bereit für Ihr neues Aluprof Aluminiumfenster?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Wir beraten Sie individuell zu MB-45, MB-79N, MB-86N oder MB-104N – kostenlos und vor Ort in Warendorf und Umgebung.
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