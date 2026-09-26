/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#060709',
          900: '#0B0C10',
          800: '#14161D',
          700: '#1F222E',
          600: '#2E3244',
        },
        gold: {
          900: '#5A461E',
          700: '#8C6F2D',
          500: '#C5A047',
          400: '#D4AF37',
          300: '#E5C467',
          100: '#F9F1D8',
        },
        ivory: {
          100: '#FAF8F5',
          200: '#F2EDE4',
          300: '#E6DEC9',
          400: '#D4C9AF',
        },
        midnight: {
          950: '#030712',
          900: '#070E20',
          800: '#0F1A36',
        },
        sandstone: '#C2B280',
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cinzel Decorative', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
    },
  },
  plugins: [],
}
