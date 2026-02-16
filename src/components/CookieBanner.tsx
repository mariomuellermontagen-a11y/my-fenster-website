// src/components/CookieBanner.tsx
'use client';

import { useState } from 'react';
import { Container } from './Container';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white text-sm p-5 z-50 border-t border-gray-700 shadow-2xl">
      <Container className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>
          Diese Website nutzt Google Maps. Dabei werden personenbezogene Daten (IP-Adresse) an Google übermittelt. Mehr in unserer <a href="#datenschutz" className="underline hover:text-gray-300">Datenschutzerklärung</a>.
        </p>
        <button onClick={() => setVisible(false)} className="bg-white text-primary px-6 py-2.5 rounded-xl font-medium hover:bg-gray-100 transition">
          Akzeptieren
        </button>
      </Container>
    </div>
  );
}