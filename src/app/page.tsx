// src/app/page.tsx
import Hero from '@/components/Hero'
import LeistungenTeaser from '@/components/LeistungenTeaser'
import ReferenzenTeaser from '@/components/ReferenzenTeaser'
import KontaktTeaser from '@/components/KontaktTeaser'

export const metadata = {
  title: 'Gebrüder Müller Fenster GmbH – Fenster, Haustüren & Hebeschiebetüren | Warendorf, Osnabrück',
  description:
    'Professionelle Montage von Fenstern, Haustüren und Hebeschiebetüren im Raum Warendorf, Münster und Osnabrück. Persönliche Beratung, hochwertige Lösungen und zuverlässiger Service aus einer Hand.',
  openGraph: {
    title: 'Gebrüder Müller Fenster GmbH – Ihr Partner für Fenster & Türen',
    description: 'Fenster, Haustüren, Hebeschiebetüren – individuell, sicher und energieeffizient im Raum Warendorf, Münster und Osnabrück.',
    images: '/og-image.jpg' // Falls du ein OG-Bild hast
  }
}

export default function Home() {
  return (
    <>
      {/* Hero – emotionaler Einstieg */}
      <Hero />

      {/* Leistungen-Teaser – jetzt mit 3 Karten und Verweis */}
      <LeistungenTeaser />

      {/* Referenzen-Teaser – echte Projekte zeigen Vertrauen */}
      <ReferenzenTeaser />

      {/* Kontakt-Teaser – starker Abschluss */}
      <KontaktTeaser />

      {/* Optional: Warum wir? oder Vorteile – wenn du magst */}
      {/* <WarumWir /> */}
    </>
  )
}