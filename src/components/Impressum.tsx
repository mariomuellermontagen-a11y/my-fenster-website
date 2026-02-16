// src/components/Impressum.tsx (neu)
import { Container } from './Container';
import { Section } from './Section';

export default function Impressum() {
  return (
    <Section id="impressum">
      <Container className="max-w-4xl text-sm leading-relaxed">
        <h2 className="text-4xl font-bold mb-6">Impressum</h2>
        {/* Dein Original-Inhalt hier */}
        <p><strong>Gebrüder Müller Fenster GmbH</strong></p>
        <p>Müssinger Straße 4<br />48231 Warendorf<br />Deutschland</p>
        {/* ... restlicher Inhalt */}
      </Container>
    </Section>
  );
}