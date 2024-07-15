'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type LightSaberProps = {
  type: string;
  imageUrl: string;
};

export const LightSaber = ({ type, imageUrl }: LightSaberProps) => {
  const [expanded, setExpanded] = useState(false);
  const initialRender = useRef(true);

  const neonType = type === 'jedi' ? 'neon-jedi' : 'neon-sith';

  const toggleExpand = () => {
    if (!initialRender.current) {
      setExpanded(!expanded);
    }
  };

  useEffect(() => {
    initialRender.current = false;
  }, []);

  return (
    <div className="relative flex w-[700px] items-center">
      <div
        onClick={toggleExpand}
        className="absolute left-[-45px] cursor-pointer"
      >
        <Image
          src={imageUrl}
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
          `p-1 rounded-2xl bg-white ${neonType}`,
          !initialRender.current &&
            (expanded ? 'animate-expand' : 'animate-shrink')
        )}
      />
    </div>
  );
};
