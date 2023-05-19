/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
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
        "amarelobebe":'#FAEE0A',
        "bege":'#ede7e2',
        "azulneon":'#07C7F2',
        "vermelho":'#A6033F',
        "navb":'#3098F2',
        "cinzaed":'#3E3E3E',
        "azuldio":"#1e192c",
        "roxosombra":"#b936ee",
        "azulciano":"#3bace2",
        "azulmarinho":"#1e192c",
        "azulroxo":"#430261",
        "azulroxoclaro":"#29013b",
        "rosapink":"#ff56f6 ",
        "azulforte":"#406aff"
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}
