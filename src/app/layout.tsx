// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gebrüder Müller Fenster GmbH – Fenster & Türen Osnabrück, Warendorf',
  description:
    'Hochwertige Fenster, Haustüren, Hebeschiebetüren und Projektabwicklung im Raum Osnabrück & Tecklenburger Land. Gebrüder Müller Fenster GmbH – professionelle Montage und Beratung in Warendorf und Umgebung.',
  keywords: [
    'Fenster Montage Warendorf',
    'Fenster Osnabrück',
    'Kunststofffenster',
    'Aluminiumfenster',
    'Hebeschiebetüren',
    'Gebrüder Müller Fenster',
    'Haustüren',
    'Fensterbau Münsterland',
  ],
  openGraph: {
    title: 'Gebrüder Müller Fenster GmbH',
    description:
      'Professionelle Montage von Fenstern, Türen und Hebeschiebetüren in Warendorf, Osnabrück und Umgebung.',
    url: 'https://www.gebrueder-mueller-fenster.de', // ← später deine echte Domain
    siteName: 'Gebrüder Müller Fenster GmbH',
    images: [
      {
        url: '/Hero.jpg', // ← oder dein Logo / Hero-Bild
        width: 1200,
        height: 630,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        {/* Structured Data – LocalBusiness Schema für Google Business Profile & Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gebrüder Müller Fenster GmbH",
              description:
                "Professionelle Montage, Handel und Beratung von Fenstern, Haustüren, Hebeschiebetüren und Sonnenschutz in Warendorf und Umgebung (Osnabrück, Münsterland, Tecklenburger Land).",
              url: "https://www.gebrueder-mueller-fenster.de", // ← später echte Domain
              telephone: "+491631124962",
              email: "info@gebrueder-mueller-fenster.de", // ← falls du eine hast, sonst weglassen
              address: {
                "@type": "PostalAddress",
                streetAddress: "Müssinger Str. 4",
                addressLocality: "Warendorf",
                postalCode: "48231",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.95093897,
                longitude: 7.97010378,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                // Samstag / Sonntag – falls ihr geöffnet habt, sonst weglassen oder anpassen
                // Beispiel für Samstag:
                // {
                //   "@type": "OpeningHoursSpecification",
                //   dayOfWeek: "Saturday",
                //   opens: "09:00",
                //   closes: "13:00",
                // },
              ],
              image: "/logo-gebrueder-mueller.svg", // ← oder /Hero.jpg
              priceRange: "€€",
              sameAs: [
                "https://www.instagram.com/gebruedermuellerfenster", // ← deine echten Social-Links
                // "https://www.facebook.com/...", 
                // "https://www.youtube.com/..."
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}