// src/components/Impressum.tsx
export default function Impressum() {
  return (
    <div className="prose prose-lg max-w-none text-left">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>Gebrüder Müller Fenster GmbH</strong><br />
        Müssinger Str. 4<br />
        48231 Warendorf<br />
        Deutschland
      </p>

      <p>
        <strong>Vertreten durch die Geschäftsführer:</strong><br />
        Mario Müller<br />
        Sinan Müller
      </p>

      <p>
        <strong>Handelsregister:</strong> Amtsgericht Münster HRB 22553<br />
        <strong>Umsatzsteuer-Identifikationsnummer:</strong> DE [deine USt-ID – falls vorhanden, sonst weglassen]
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+491631124962">0163 1124962</a><br />
        E-Mail: <a href="mailto:info@gebrueder-mueller-fenster.de">info@gebrueder-mueller-fenster.de</a>
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>
      {/* Weitere Absätze wie Haftung für Links, Urheberrecht – falls du mehr willst, sag Bescheid */}
    </div>
  )
}