/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pura': {
          'bg': '#F5EFE8',
          'beige': '#E9DDD1',
          'brown': '#7A6251',
          'black': '#111111',
          'white': '#FAF7F2',
          'gray': '#B8AEA4',
        },
      },
      fontFamily: {
        'garamond': ['Cormorant Garamond', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      spacing: {
        'breathing': '3rem',
      },
      backgroundImage: {
        'grain': 'url("/noise.png")',
      },
    },
  },
  plugins: [],
}
