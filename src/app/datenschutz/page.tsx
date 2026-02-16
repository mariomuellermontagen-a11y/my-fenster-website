// src/app/datenschutz/page.tsx
import Datenschutz from '@/components/Datenschutz'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Datenschutzerklärung - Gebrüder Müller Fenster GmbH',
  description: 'Datenschutzerklärung gemäß DSGVO der Gebrüder Müller Fenster GmbH.',
}

export default function DatenschutzPage() {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Datenschutzerklärung
          </h1>

          <Datenschutz />  {/* ← Deine bestehende Komponente wird hier gerendert */}
        </div>
      </Container>
    </div>
  )
}