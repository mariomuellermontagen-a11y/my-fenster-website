// src/components/Leistungen.tsx
import { Container } from './Container';
import { Section } from './Section';

export default function Leistungen() {
  const cards = [
    {
      title: 'Fenster & Haustüren',
      text: 'Hochwertige Kunststoff- (76–92 mm) und Aluminiumsysteme für Neubau, Sanierung, Denkmalschutz und energetische Modernisierung.',
    },
    {
      title: 'Kernsanierungen',
      text: 'Kompletter Fensteraustausch inklusive statischer Prüfung, Laibungsdämmung, energetischer Optimierung und barrierefreier Umsetzung.',
    },
    {
      title: 'Projektgeschäft',
      text: 'Technische Gesamtbetreuung für Mehrfamilienhäuser, Gewerbeobjekte und öffentliche Bauten – von der Planung bis zur schlüsselfertigen Übergabe.',
    },
  ];

  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Unsere Kernleistungen
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Optional: Kleiner dezenter CTA-Link unten – nicht aufdringlich */}
        <p className="text-center mt-12 text-gray-600">
          Welche Lösung passt zu Ihrem Projekt?  
          <a href="/kontakt" className="text-primary hover:underline font-medium ml-1">
            Jetzt unverbindlich anfragen →
          </a>
        </p>
      </Container>
    </Section>
  );
}