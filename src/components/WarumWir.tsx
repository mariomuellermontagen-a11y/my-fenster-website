// src/components/WarumWir.tsx (neu – aus deinem Original)
import { Container } from './Container';
import { Section } from './Section';

export default function WarumWir() {
  const points = [
    {
      title: 'Erfahrung trifft Dynamik',
      text: 'Zwei junge Geschäftsführer mit jahrzehntelanger Erfahrung führen das Unternehmen selbst.',
    },
    {
      title: 'Verständnis für Anforderungen',
      text: 'Lösungen für Privat, Gewerbe und Öffentliches – wirtschaftlich und technisch überzeugend.',
    },
    {
      title: 'Technische Kompetenz',
      text: 'Komplexe Detailanschlüsse, Statik und Bauphysik aus gelebter Praxis.',
    },
    {
      title: 'Qualität & Wirtschaftlichkeit',
      text: 'Langlebige Ergebnisse, die technisch durchdacht und gestalterisch passend sind.',
    },
  ];

  return (
    <Section>
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Warum uns wählen?</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {points.map((point, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-700 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}