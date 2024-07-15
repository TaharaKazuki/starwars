import { PluginAPI } from 'tailwindcss/types/config';

export const customNeonColor = (plugins: PluginAPI) => {
  const neonUtilities: Record<string, { boxShadow: string }> = {};
  const { addUtilities, theme } = plugins;
  const colors = theme('colors');
  for (const color in colors) {
    if (typeof colors[color] === 'object') {
      const color1 = colors[color]['hover'] || colors[color]['500'];
      const color2 = colors[color]['DEFAULT'] || colors[color]['700'];
      neonUtilities[`.neon-${color}`] = {
        boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
      };
    }
  }
  addUtilities(neonUtilities);
};

export const customNeonText = (plugins: PluginAPI) => {
  const neonTextUtilities: Record<
    string,
    { color: string; textShadow: string }
  > = {};
  const { addUtilities, theme } = plugins;
  const colors = theme('colors');

  for (const color in colors) {
    if (typeof colors[color] === 'object') {
      const color1 = colors[color]['500'] || colors[color]['DEFAULT'];
      const color2 = colors[color]['700'] || colors[color]['hover'];
      if (color1 && color2) {
        neonTextUtilities[`.text-neon-${color}`] = {
          color: color1,
          textShadow: `0 0 1px ${color1}, 0 0 1px ${color1}, 0 0 1px ${color1}, 0 0 4px ${color2}, 0 0 1px ${color1}`,
        };
      }
    }
  }
  addUtilities(neonTextUtilities);
};
