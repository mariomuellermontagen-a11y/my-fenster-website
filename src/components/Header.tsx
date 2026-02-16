// src/components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'

const navItems = [
  { label: 'Startseite', href: '/' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <Container className="flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 sm:gap-6">
          <Image
            src="/logo-gebrueder-mueller.svg"
            alt="Gebrüder Müller Fenster GmbH Logo"
            width={180}
            height={60}
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            priority
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight">Gebrüder Müller Fenster GmbH</h1>
            <p className="text-sm text-gray-600">Fenster · Haustüren · Projektgeschäft</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Angebot anfragen
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white py-6">
          <Container className="flex flex-col gap-5 text-center font-medium">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg py-2 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-primary text-white py-3 rounded-xl text-lg font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Angebot anfragen
            </Link>
          </Container>
        </div>
      )}
    </header>
  )
}