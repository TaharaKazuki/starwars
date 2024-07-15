'use client';

import Image from 'next/image';
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
        <h1 className="text-3xl font-semibold uppercase">Lightsaber</h1>
      </div>
      <div className="flex flex-col items-center gap-16">
        <div className="relative flex w-[700px] items-center">
          <div onClick={toggleExpand} className="absolute left-[-45px]">
            <Image
              src="/assets/Lightsaber.png"
              alt="Lightsaber"
              priority
              quality={100}
              className="object-contain"
              width={100}
              height={40}
            />
          </div>
          <div
            className={cn(
              'p-1 rounded-2xl neon-jedi bg-white',
              expanded ? 'animate-expand' : 'animate-shrink'
            )}
            style={{ width: expanded ? '100%' : '0%' }}
          />
        </div>
        <div className="relative flex w-[700px] items-center">
          <div onClick={toggleExpand} className="absolute left-[-45px]">
            <Image
              src="/assets/Lightsaber.png"
              alt="Lightsaber"
              priority
              quality={100}
              className="object-contain"
              width={100}
              height={40}
            />
          </div>
          <div
            className={cn(
              'p-1 rounded-2xl neon-sith bg-white',
              expanded ? 'animate-expand' : 'animate-shrink'
            )}
            style={{ width: expanded ? '100%' : '0%' }}
          />
        </div>
      </div>
    </main>
  );
}
