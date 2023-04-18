/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
