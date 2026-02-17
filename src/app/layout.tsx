// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gebrüder Müller Fenster GmbH – Fenster & Türen Warendorf, Osnabrück',
  description:
    'Professionelle Montage, Austausch und Wartung von Kunststofffenstern, Aluminiumfenstern, Holzfenstern, Haustüren und Hebeschiebetüren. Gebrüder Müller Fenster GmbH – Ihr Partner in Warendorf, Osnabrück und Münsterland.',
  keywords: [
    'Fenster Montage Warendorf',
    'Fenster Osnabrück',
    'Kunststofffenster Warendorf',
    'Aluminiumfenster Osnabrück',
    'Holzfenster Münsterland',
    'Hebeschiebetüren',
    'Haustüren Montage',
    'Fensterbau Tecklenburger Land',
    'Gebrüder Müller Fenster',
  ],
  openGraph: {
    title: 'Gebrüder Müller Fenster GmbH',
    description:
      'Professionelle Montage von Fenstern, Türen und Hebeschiebetüren in Warendorf, Osnabrück und Umgebung.',
    url: 'https://www.gebrueder-mueller-fenster.de', // ← später echte Domain einfügen
    siteName: 'Gebrüder Müller Fenster GmbH',
    images: [
      {
        url: '/Hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Gebrüder Müller Fenster GmbH – Professionelle Fenster- und Tür-Montage in Warendorf',
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
        {/* Verhindert Auto-Linking von Telefonnummern/E-Mails/Adressen auf Mobile */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

        {/* Favicons – Haupt-Favicon + Fallback + Apple Touch + Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data – LocalBusiness für Google Business Profile & Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gebrüder Müller Fenster GmbH",
              description:
                "Professionelle Montage, Handel und Beratung von Fenstern, Haustüren, Hebeschiebetüren und Sonnenschutz in Warendorf und Umgebung (Osnabrück, Münsterland, Tecklenburger Land).",
              url: "https://www.gebrueder-mueller-fenster.de",
              telephone: "+491631124962",
              email: "info@gebrueder-mueller-fenster.de",
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
                // Samstag – falls ihr geöffnet habt, sonst löschen oder anpassen
                // {
                //   "@type": "OpeningHoursSpecification",
                //   dayOfWeek: "Saturday",
                //   opens: "09:00",
                //   closes: "13:00",
                // },
              ],
              image: "/logo-gebrueder-mueller.svg",
              priceRange: "€€",
              sameAs: [
                "https://www.instagram.com/gebruedermuellerfenster",
                // Weitere Social-Links, falls vorhanden
              ],
            }),
          }}
        />
      </head>

      <body
        className={inter.className}
        suppressHydrationWarning={true} // Temporärer Schutz gegen Hydration-Warnungen
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}