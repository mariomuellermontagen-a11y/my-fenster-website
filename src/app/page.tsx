// src/app/page.tsx
import Hero from '@/components/Hero'
import LeistungenTeaser from '@/components/LeistungenTeaser'  // oder wie du deine Komponenten nennst
import ReferenzenTeaser from '@/components/ReferenzenTeaser'
import KontaktTeaser from '@/components/KontaktTeaser'

export default function Home() {
  return (
    <>
      <Hero />
      <LeistungenTeaser />
      <ReferenzenTeaser />
      <KontaktTeaser />
      {/* weitere Teaser oder Sections */}
    </>
  )
}