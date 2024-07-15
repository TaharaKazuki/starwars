import { useState } from 'react';

import { JEDI, SITH } from '../const/starWarsTheme';

export const useGetStarWarsTheme = (initialTheme: string) => {
  const [theme, setTheme] = useState<string>(initialTheme);

  const getButtonClass = (theme: string) => {
    switch (theme) {
      case JEDI:
        return `neon-jedi bg-jedi`;
      case SITH:
        return `neon-sith bg-sith`;
      default:
        return '';
    }
  };

  const starWarsClass = getButtonClass(theme);

  return { setTheme, starWarsClass };
};
