'use client';

import { LightSaber } from '@/components/Lightsaber';

export default function Home() {
  return (
    <main className={'flex min-h-screen flex-col gap-16 p-24'}>
      <div className="flex flex-col text-white/45">
        <h1 className="text-center text-3xl font-semibold uppercase">
          Lightsaber
        </h1>
      </div>
      <div className="flex flex-col items-center gap-16">
        <h2 className="text-2xl font-semibold text-neon-jedi">Jedi</h2>
        <LightSaber type="jedi" imageUrl="/assets/Lightsaber.png" />
        <h2 className="text-2xl font-semibold text-neon-sith">Sith</h2>
        <LightSaber type="sith" imageUrl="/assets/Lightsaber.png" />
      </div>
    </main>
  );
}
