import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDB913',
        dark: '#0F0F0F',
        darker: '#1A1A1A',
        card: '#1F1F1F',
        text: '#FFFFFF',
        'text-secondary': '#999999',
        success: '#4ADE80',
        warning: '#FBBF24',
        error: '#F87171',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      spacing: {
        safe: 'env(safe-area-inset-bottom)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        slideIn: {
          'from': { transform: 'translateY(10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
