import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#f7c948',
        goldSoft: '#f5d66f',
        dark: '#070707',
        darker: '#111111',
        panel: '#171717',
        panelAlt: '#1f1f1f',
        text: '#f5f5f5',
        muted: '#9ca3af',
        accent: '#8ab4f8',
        success: '#4ade80',
        danger: '#f87171',
        warning: '#fbbf24'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(247, 201, 73, 0.25), 0 20px 45px rgba(10, 10, 10, 0.35)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(247,201,73,0.18), rgba(10,10,10,0) 55%)'
      }
    }
  },
  plugins: []
};

export default config;
