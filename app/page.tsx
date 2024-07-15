'use client';

import { STAR_WARS_TEMES } from '@/const/starWarsTheme';
import { useGetStarWarsTheme } from '@/hooks/useGetStarWarsTheme';
import { cn } from '@/lib/utils';

export default function Home() {
  const { setTheme, starWarsClass } = useGetStarWarsTheme(STAR_WARS_TEMES[0]);

  return (
    <main className={'flex min-h-screen flex-col gap-16 bg-primary p-24'}>
      <div className="flex flex-col text-white/45">
        <h3 className="font-semibold">Select theme Color</h3>
        <div className="flex gap-4">
          {STAR_WARS_TEMES.map((theme) => (
            <div
              className="cursor-pointer"
              key={theme}
              onClick={() => setTheme(theme)}
            >
              {theme}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={cn(`p-1 w-24 rounded-2xl neon-jedi`)}>aaa</div>
      </div>
    </main>
  );
}
