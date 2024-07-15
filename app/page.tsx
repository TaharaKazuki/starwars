'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <main className={'flex min-h-screen flex-col gap-16 bg-primary p-24'}>
      <div className="flex flex-col text-white/45">
        <h1 className="text-3xl font-semibold">Lightsaber</h1>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-left text-white">ジェダイ</h2>
        <div className="relative flex w-[700px] items-center">
          <button
            onClick={toggleExpand}
            className="absolute -left-12 z-10 bg-black text-white/60"
          >
            セーバー
          </button>
          <div
            className={cn(
              'p-1 rounded-2xl neon-jedi bg-white',
              expanded ? 'animate-expand' : 'animate-shrink'
            )}
            style={{ width: expanded ? '100%' : '0%' }}
          />
        </div>
        {/* <div className="w-[700px]">
          <div
            className={cn(`p-1 rounded-2xl neon-sith bg-white animate-expand`)}
          />
        </div> */}
      </div>
    </main>
  );
}
