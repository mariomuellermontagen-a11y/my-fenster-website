// src/app/not-found.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <Image
        src="/logo-gebrueder-mueller.svg"
        alt="Gebrüder Müller Fenster GmbH Logo"
        width={180}
        height={60}
        className="mb-8"
        priority
      />

      <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mb-6">Ups – Seite nicht gefunden</p>
      <p className="text-lg text-gray-600 mb-10 max-w-xl">
        Die Seite, die du suchst, existiert nicht (mehr) oder wurde verschoben.
      </p>

      <Link
        href="/"
        className="inline-block bg-primary text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-primary-dark transition-colors shadow-md"
      >
        Zurück zur Startseite
      </Link>

      <p className="mt-8 text-gray-500">
        Oder direkt anrufen: <a href="tel:+491631124962" className="text-primary hover:underline">0163 1124962</a>
      </p>
    </div>
  )
}