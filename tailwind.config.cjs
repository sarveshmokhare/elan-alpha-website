/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '576px',
      'vs':'480px',
      'vvs':'360px',
      'lg':'1024px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {

      keyframes :{
        bannermove: {
  '0%' :{
    transform: 'translateX(0)'
  },
  '100%' :{
    transform: 'translateX(-50%)'
  }
}
},


      colors: {
        'red': '#7D001E',
        'golden': '#FED395',
        'black': '#080F24',
        'green': '#0B8661',
        'yellow': '#FFB345',
        'blue':'#0D1838',
        'white':'#FFFFFF'
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
