// src/components/Datenschutz.tsx (neu)
import { Container } from './Container';
import { Section } from './Section';

export default function Datenschutz() {
  return (
    <Section id="datenschutz" bg="bg-gray-50">
      <Container className="max-w-4xl text-sm leading-relaxed">
        <h2 className="text-4xl font-bold mb-6">Datenschutzerklärung</h2>
        {/* Dein Original-Inhalt hier */}
        <h3 className="font-semibold mt-6">1. Allgemeine Hinweise</h3>
        {/* ... restlicher Inhalt */}
      </Container>
    </Section>
  );
}