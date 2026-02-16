// src/components/GoogleMaps.tsx
import { Container } from './Container';
import { Section } from './Section';

export default function GoogleMaps() {
  return (
    <Section bg="bg-gray-100">
      <Container>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Unser Standort</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Google Maps - Gebrüder Müller Fenster GmbH in Warendorf"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4918.13736535019!2d7.9701037773731995!3d51.95093897191776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b990587c6c4aa5%3A0xd5d42561267af255!2sM%C3%BCssinger%20Str.%204%2C%2048231%20Warendorf!5e0!3m2!1sde!2sde!4v1771261485445!5m2!1sde!2sde"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Optional: Adress-Text unter der Karte – sieht professioneller aus */}
        <p className="text-center mt-6 text-gray-600 text-lg font-medium">
          Gebrüder Müller Fenster GmbH<br />
          Müssinger Str. 4<br />
          48231 Warendorf
        </p>
      </Container>
    </Section>
  );
}