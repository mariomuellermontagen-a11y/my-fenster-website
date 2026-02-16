// src/app/impressum/page.tsx
import Impressum from '@/components/Impressum'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Impressum - Gebrüder Müller Fenster GmbH',
  description: 'Impressum und rechtliche Angaben der Gebrüder Müller Fenster GmbH in Warendorf.',
}

export default function ImpressumPage() {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Impressum
          </h1>

          <Impressum />  {/* ← Deine bestehende Komponente wird hier gerendert */}

          {/* Falls Impressum.tsx nur ein Fragment ist, kannst du hier mehr Text hinzufügen */}
        </div>
      </Container>
    </div>
  )
}