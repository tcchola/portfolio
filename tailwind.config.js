/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/index.html',
    './public/output.css',
    './src/styles.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'glow-blue':  '0 0 2rem rgba(0, 255, 255, 1)',
        'glow-white': '0 0 1.5rem rgba(255, 255, 255, 1)',
        'glow-gold':  '0 0 1.5rem rgba(255, 215, 0, 1)',
        'glow-green': '0 0 1.5rem rgba(160, 252, 132, 1)',
        'glow-purple': '0 0 1.5rem rgba(46, 16, 101, 1)',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}