// src/components/GoogleMaps.tsx (neu – aus Original)
import { Container } from './Container';
import { Section } from './Section';

export default function GoogleMaps() {
  return (
    <Section bg="bg-gray-100">
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Unser Standort</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Google Maps - Gebrüder Müller Fenster GmbH"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.123456789!2d7.987654321!3d51.87654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUyJzI3LjIiTiA3wrA1OScxNi4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </Section>
  );
}