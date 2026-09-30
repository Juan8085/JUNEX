/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        junex: {
          dark: '#0B0F19',
          card: '#131C2E',
          cyan: '#00F0FF',
          teal: '#0D9488',
          slateText: '#94A3B8'
        }
      }
    },
  },
  plugins: [],
}