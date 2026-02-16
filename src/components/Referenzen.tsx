// src/components/Referenzen.tsx
import Image from 'next/image';
import { Container } from './Container';
import { Section } from './Section';

export default function Referenzen() {
  const projects = [
    {
      title: 'Warendorf – Kernsanierung',
      text: 'Kompletter Austausch sämtlicher Fenster und Haustür im Altbau mit energetischer Optimierung.',
      img: '/placeholder-ref1.jpg',
      alt: 'Referenz Warendorf: Kernsanierung mit Fensteraustausch und Haustür – Gebrüder Müller Fenster GmbH',
    },
    {
      title: 'Osnabrück – Umbau & Hebeschiebetüren',
      text: 'Umfangreiche Umbauten inklusive statischer Durchbrüche und hochwertiger Hebeschiebetüren.',
      img: '/placeholder-ref2.jpg',
      alt: 'Referenz Osnabrück: Hebeschiebetüren und Fensterumbau in Wohnhaus – Gebrüder Müller Fenster GmbH',
    },
    {
      title: 'Unna – Kompaniegebäude',
      text: 'Austausch von 48 Fensterelementen in öffentlicher Baumaßnahme mit präziser Koordination.',
      img: '/placeholder-ref3.jpg',
      alt: 'Referenz Unna: 48 Fenster Montage in öffentlichem Gebäude – Gebrüder Müller Fenster GmbH',
    },
  ];

  return (
    <Section bg="bg-gray-50">
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Ausgewählte Referenzen
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={proj.img}
                alt={proj.alt}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                loading="lazy"
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{proj.title}</h3>
                <p className="text-gray-700">{proj.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dezent CTA-Link unten – nicht aufdringlich */}
        <p className="text-center mt-12 text-gray-600">
          Ähnliches Projekt für Ihr Zuhause?  
          <a href="/kontakt" className="text-primary hover:underline font-medium ml-1">
            Jetzt anfragen →
          </a>
        </p>
      </Container>
    </Section>
  );
}