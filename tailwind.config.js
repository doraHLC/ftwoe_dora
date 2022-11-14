/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryDefault: '#007FAB',
        primaryDark: '#003A4F',
        primaryTint: '#B0D2DE',
        secondaryDefault: '#FFC37D',
        secondaryDark: '#A46039',
        secondaryTint: '#FFE2A9',
        HighlightDefault: '#FF5136',
        HighlightDark: '#CD331A',
        HighlightTint: '#FFB5A4'
      }
    }
  },
  plugins: []
}
