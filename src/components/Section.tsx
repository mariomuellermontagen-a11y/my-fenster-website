// src/components/Section.tsx
import { ReactNode } from 'react';

export function Section({ id, bg = 'bg-white', children }: { id?: string; bg?: string; children: ReactNode }) {
  return (
    <section id={id} className={`${bg} py-20 lg:py-28`}>
      {children}
    </section>
  );
}