// src/components/Referenzen.tsx (neu hinzugefügt – erweitert)
import Image from 'next/image';
import { Container } from './Container';
import { Section } from './Section';

export default function Referenzen() {
  const projects = [
    { title: 'Warendorf – Kernsanierung', text: 'Austausch sämtlicher Fenster und Haustür im Altbau.', img: '/placeholder-ref1.jpg' },
    { title: 'Osnabrück – Umbau & Hebeschiebetüren', text: 'Umfangreiche Umbauten inkl. statischer Durchbrüche.', img: '/placeholder-ref2.jpg' },
    { title: 'Unna – Kompaniegebäude', text: 'Austausch von 48 Fensterelementen in öffentlicher Baumaßnahme.', img: '/placeholder-ref3.jpg' },
  ];

  return (
    <Section bg="bg-gray-50">
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Ausgewählte Referenzen</h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <Image src={proj.img} alt={proj.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-700">{proj.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}