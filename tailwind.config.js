/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'], 
        second: ['Times New Roman', 'sans-serif'],
        third: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        text:'#04000c',
        secondary: '#a1a0a0',
        main: '#d5d5d5',
        grey: '#595959',
        error: '#d53838',
        white: '#fff',
      },
      maxWidth: {
        container: '1238px',
      },
    },
  },
  plugins: [],
}

