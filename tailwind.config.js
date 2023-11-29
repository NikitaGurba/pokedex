/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#9FA6B2",
        red: "#DC4C64",
        green: "#14A44D",
        yellow: "#E4A11B",
        lightBlue: "#54B4D3",
        BSBlueDark: "#8dd0ff",
        BSBlueLight: "#007bff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
