/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors:{
        "orange-button":'#ff561e',
        "neon":'#0E7373',
        "salmao":'#fd6699',
        "magenta":'#FF00FF',
        "laranjaneon":'#FF5F1F',
        "vermelhoneon":'#fc1723',
        "pretoneon":'#1c1c1c',
        "verdecatarro":'#C8FF5D',
        "azulverde":'#600DFF',
        "azulbebe":'#08ECF0',
        "amarelobebe":'#FAEE0A'
      }

    },
  },
  plugins: [],
}
