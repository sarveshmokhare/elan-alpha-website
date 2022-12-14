/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'red': '#7D001E',
        'golden': '#FED395',
        'black': '#080F24',
        'green': '#0B8661',
        'yellow': '#FFB345',
        'blue':'#0D1838'
      },
      fontFamily: {
        'berkshire': ['Berkshire Swash', 'cursive'],
        'cinzel': ['Cinzel Decorative', 'cursive'],
        'century':['Century Schoolbook']
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
