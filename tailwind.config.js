/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', "sans-serif"],
        grimp: ['Cormorant Garamond', "serif"],
        crimson: ['Crimson Text', "serif"],
      },  
    },
  },
  plugins: [],
})