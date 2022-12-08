/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'red': '#7D001E',
        'golden': '#FED395',
        'black': '#080F24',
      },
      fontFamily: {
        'berkshire': ['Berkshire Swash', 'cursive'],
        'cinzel': ['Cinzel Decorative', 'cursive'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
