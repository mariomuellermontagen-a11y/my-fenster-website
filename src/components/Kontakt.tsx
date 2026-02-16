// src/components/Kontakt.tsx
'use client'; // Für Form-State

import { useState } from 'react';
import { Container } from './Container';
import { Section } from './Section';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeframe: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: 'DEIN_WEB3FORMS_ACCESS_KEY', // Ersetze mit deinem Key von web3forms.com
        ...formData,
      }),
    });
    const result = await response.json();
    if (result.success) {
      alert('Anfrage gesendet! Wir melden uns bald.');
      setFormData({ name: '', email: '', phone: '', projectType: '', timeframe: '', message: '' });
    } else {
      alert('Fehler beim Senden. Bitte per E-Mail versuchen.');
    }
  };

  return (
    <Section id="kontakt" bg="bg-primary text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Projekt starten?</h2>
          <p className="text-xl text-gray-300 mb-12">Beschreiben Sie uns Ihr Vorhaben – wir melden uns innerhalb von 24–48 Stunden.</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
          {/* ... (gleiche Form-Felder wie zuvor, mit onChange={handleChange}) */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name / Firma *</label>
              <input id="name" type="text" value={formData.name} onChange={handleChange} placeholder="z. B. Max Mustermann GmbH" className="w-full p-4 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-white" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail *</label>
              <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="ihre@email.de" className="w-full p-4 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-white" required />
            </div>
          </div>
          {/* Füge die restlichen Felder ähnlich hinzu: phone, projectType, timeframe, message */}
          <button type="submit" className="w-full sm:w-auto bg-white text-primary font-semibold px-10 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg shadow-md">
            Anfrage absenden
          </button>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Ihre Daten werden nur zur Bearbeitung verwendet. Details in unserer <a href="#datenschutz" className="underline hover:text-white">Datenschutzerklärung</a>.
          </p>
        </form>
      </Container>
    </Section>
  );
}