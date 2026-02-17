// src/data/referenzen.ts
export type Referenz = {
  title: string
  description: string
  image: string
  alt: string
  jahr: string
}

export const referenzen: Referenz[] = [
  {
    title: 'Warendorf – Kernsanierung',
    description: 'Kompletter Austausch sämtlicher Fenster und Haustür im Altbau mit energetischer Optimierung und statischer Prüfung.',
    image: '/referenzen/warendorf.jpg',
    alt: 'Referenz Warendorf 2025: Kernsanierung mit Fensteraustausch und Haustür – Gebrüder Müller Fenster GmbH',
    jahr: '2025',
  },
  {
    title: 'Osnabrück – Neubau mit großformatigen Fensterflächen & Hebeschiebetüren',
    description: 'Moderner Neubau mit großformatigen Fensterflächen und hochwertigen Hebeschiebetüren – lichtdurchflutet, energieeffizient und architektonisch anspruchsvoll.',
    image: '/referenzen/osnabrueck.jpg',
    alt: 'Referenz Osnabrück 2025: Neubau mit großformatigen Fensterflächen und Hebeschiebetüren – moderne Architektur, viel Tageslicht und hohe Energieeffizienz – Gebrüder Müller Fenster GmbH',
    jahr: '2025',
  },
  {
    title: 'Unna – Öffentliches Gebäude',
    description: 'Austausch von 48 Fensterelementen in einer öffentlichen Baumaßnahme mit präziser Koordination und termingerechter Umsetzung.',
    image: '/referenzen/unna.jpg',
    alt: 'Referenz Unna 2025: 48 Fenster Montage in öffentlichem Gebäude – präzise Koordination und hohe Qualität – Gebrüder Müller Fenster GmbH',
    jahr: '2025',
  },
  // Hier später weitere hinzufügen – nur an einer Stelle ändern!
]