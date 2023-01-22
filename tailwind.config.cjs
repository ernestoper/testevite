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
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
      card: "0px 14px 20px 0px rgba(0, 0, 0, 0.05)",
      "2xl": "0 0px 40px 0px rgba(0, 0, 0, 0.1)",
    },
    screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... } #0E7373 #00ff5f

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1103px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1720px",
        // => @media (min-width: 1536px) { ... }

        "4xl": "1856px",
        // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
  ],
}
