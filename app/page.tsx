'use client';

import { LightSaber } from '@/components/Lightsaber';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
      <div className="flex flex-col">
        <h1 className="text-outline text-center text-5xl font-semibold uppercase text-black/45">
          Lightsaber
        </h1>
      </div>
      <div className="flex flex-col gap-16">
        <h2 className="text-outline text-3xl font-semibold uppercase text-neon-jedi">
          Jedi
        </h2>
        <LightSaber type="jedi" imageUrl="/assets/Lightsaber.png" />
        <h2 className="text-outline text-3xl font-semibold uppercase text-neon-sith">
          Sith
        </h2>
        <LightSaber type="sith" imageUrl="/assets/Lightsaber.png" />
      </div>
    </main>
  );
}
