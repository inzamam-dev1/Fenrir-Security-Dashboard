/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Critical for R1 Dark/Light mode [cite: 52]
  theme: {
    extend: {
      colors: {
        primary: '#0CC8A8',
        darkBG: '#0F0F0F',
        lightBG: '#F5F5F5',
        critical: '#FF0000',
        high: '#FFA500',
        medium: '#FFFF00',
        low: '#008000',
      },
    },
  },
  plugins: [],
}