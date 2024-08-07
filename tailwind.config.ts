import type { Config } from 'tailwindcss';

import { customNeonColor, customNeonText } from './lib/customNeonUtilities';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        jedi: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        },
        sith: {
          DEFAULT: '#F60F0F',
          hover: '#FF3D3D',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        shrink: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        expand: 'expand 0.5s ease-in-out forwards',
        shrink: 'shrink 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), customNeonColor, customNeonText],
} satisfies Config;

export default config;
