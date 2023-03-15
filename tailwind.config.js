/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boldPurple: '#546de5',
        lightPurple: '#778beb',
        inputBg: 'rgb(244,244,244)',
        lightGray: 'rgb(149,149,149)',
        darkGray: 'rgb(117,117,117)',
      }
    },
  },
  plugins: [],
}
