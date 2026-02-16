// src/components/Leistungen.tsx
import { Container } from './Container';
import { Section } from './Section';

export default function Leistungen() {
  const cards = [
    { title: 'Fenster & Haustüren', text: 'Kunststoff (76–92 mm) und Aluminiumsysteme für Neubau, Sanierung und Denkmalschutz.' },
    { title: 'Kernsanierungen', text: 'Kompletter Fensteraustausch inkl. statischer Prüfung, Laibungsdämmung & energetischer Optimierung.' },
    { title: 'Projektgeschäft', text: 'Technische Gesamtbetreuung für Mehrfamilienhäuser, Gewerbe und öffentliche Bauten.' },
  ];

  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Unsere Kernleistungen</h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <div key={i} className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}