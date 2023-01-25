/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "968px",
      xl: "1440px"
    },
    extend: {},
  },
  plugins: [],
}
