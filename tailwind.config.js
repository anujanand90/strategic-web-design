/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#000000',
          white: '#FFFFFF',
          zinc: '#71717a',
          accent: '#007DBC',
          hover: '#1A8ED8',
          light: '#4DB3F0',
        },
      },
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        shimmer: 'shimmer 2s linear infinite',
        beam: 'beam 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        beam: {
          '0%, 100%': {
            opacity: 0.3,
            transform: 'translateX(-10%) translateY(-10%)',
          },
          '50%': {
            opacity: 0.6,
            transform: 'translateX(10%) translateY(10%)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
