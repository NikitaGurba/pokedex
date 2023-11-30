/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '100px',
      'xd': '600px',
      'lg': '1420px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        '3xl': '1900px',
      },
      colors: {
        gray: {
          50:  '#e9e9ea',
          100: '#d2d4d5',
          200: '#bcbec0',
          300: '#a6a8ab',
          400: '#909397',
          500: '#797d82',
          600: '#63676d',
          700: '#4d5158',
          800: '#363c43',
          900: '#20262e',
        },
        red:
        {
          50:'#fdf5f6',
          100:'#f7cfd2',
          200:'#f0a8af',
          300:'#e9828c',
          400:'#e35b68',
          500:'#dc3545',
          600:'#bb2d3b',
          700:'#9a2530',
          800:'#791d26',
          900:'#58151c',
        },
        lightBlue: "#54B4D3",
        BSBlueDark: "#8dd0ff",
        BSBlueLight: "#007bff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
