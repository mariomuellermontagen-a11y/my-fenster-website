// src/components/Footer.tsx
import { Container } from './Container';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 text-center text-sm">
      <Container>
        <p>© {new Date().getFullYear()} Gebrüder Müller Fenster GmbH · Müssinger Straße 4 · 48231 Warendorf</p>
        <p className="mt-2">
          Tel: <a href="tel:+491631124962" className="hover:text-white">0163 1124962</a> · 
          <a href="mailto:info@gebrueder-mueller-fenster.de" className="hover:text-white">info@gebrueder-mueller-fenster.de</a>
        </p>

        {/* Korrigierte Links zu echten Seiten */}
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <a href="/impressum" className="hover:text-white underline">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-white underline">
            Datenschutz
          </a>
          {/* Optional: Falls du später Cookie-Einstellungen hast */}
          {/* <button className="hover:text-white underline">Cookie-Einstellungen</button> */}
        </div>
      </Container>
    </footer>
  );
}