// src/app/page.tsx
import Hero from '@/components/Hero'
import LeistungenTeaser from '@/components/LeistungenTeaser'
import ReferenzenTeaser from '@/components/ReferenzenTeaser'
import KontaktTeaser from '@/components/KontaktTeaser'

export const metadata = {
  title: 'Gebrüder Müller Fenster GmbH – Fenster & Türen Montage Warendorf, Osnabrück',
  description:
    'Professionelle Montage von Fenstern, Haustüren und Hebeschiebetüren in Warendorf, Osnabrück und Münsterland. Hochwertige Lösungen – persönliche Beratung.',
  // OpenGraph & Keywords können hier überschrieben werden, falls gewünscht
}

export default function Home() {
  return (
    <>
      {/* Hero – Hauptbild oben */}
      <Hero />

      {/* Leistungen-Teaser – hier kommen wahrscheinlich Produktbilder */}
      <LeistungenTeaser />

      {/* Referenzen-Teaser – echte Projektbilder */}
      <ReferenzenTeaser />

      {/* Kontakt-Teaser – Formular oder Karte */}
      <KontaktTeaser />

      {/* Optional: Weitere Sections, z. B. Warum Wir, Vorteile */}
      {/* <WarumWir /> */}
    </>
  )
}