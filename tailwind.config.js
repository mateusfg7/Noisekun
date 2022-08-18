/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    screens: {
      'xs': '350px',
      '2xs': '500px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'header': '0px 1px 30px rgba(0, 0, 0, 0.05)',
        'sound': '0px 0px 30px rgba(0, 0, 0, 0.04)'
      },
    }
  },
  plugins: []
}
