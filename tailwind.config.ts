import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend Tera', 'serif'],
        'poiret': ['Poiret One', 'serif'],
      },
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'gray-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
} satisfies Config
