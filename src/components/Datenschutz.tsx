// src/components/Datenschutz.tsx
export default function Datenschutz() {
  return (
    <div className="prose prose-lg max-w-none text-left">
      <h2>Datenschutzerklärung</h2>
      <p>Stand: Februar 2026</p>

      <h3>1. Verantwortlicher</h3>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
        Gebrüder Müller Fenster GmbH<br />
        Müssinger Str. 4<br />
        48231 Warendorf<br />
        Telefon: 0163 1124962<br />
        E-Mail: info@gebrueder-mueller-fenster.de
      </p>

      <h3>2. Erhebung und Verarbeitung personenbezogener Daten</h3>
      <p>Beim Aufruf unserer Website werden automatisch technische Daten (z. B. IP-Adresse, Browser, Betriebssystem) in Server-Logfiles gespeichert. Diese Daten werden für maximal 7 Tage gespeichert und dann gelöscht.</p>
      <p>Über das Kontaktformular erheben wir Name, E-Mail, Telefon (optional) und Nachricht. Diese Daten dienen ausschließlich der Bearbeitung Ihrer Anfrage und werden nach Abschluss gelöscht (oder bei Widerruf).</p>

      <h3>3. Google Maps</h3>
      <p>Diese Website nutzt Google Maps zur Darstellung unseres Standorts. Beim Aufruf der Kontaktseite wird Ihre IP-Adresse an Google übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an ansprechender Darstellung). Mehr Infos: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Datenschutzerklärung</a>.</p>

      <h3>4. Cookies & Einwilligung</h3>
      <p>Wir setzen nur technisch notwendige Cookies (z. B. für Cookie-Banner). Für weitere Cookies holen wir Ihre Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO). Sie können Einwilligungen jederzeit widerrufen.</p>

      <h3>5. Ihre Rechte</h3>
      <p>Sie haben Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit (Art. 15–21 DSGVO). Kontaktieren Sie uns einfach per E-Mail.</p>
      <p>Beschwerderecht bei der Aufsichtsbehörde: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.</p>

      {/* Weitere Abschnitte wie SSL, Speicherdauer – erweitere bei Bedarf */}
    </div>
  )
}