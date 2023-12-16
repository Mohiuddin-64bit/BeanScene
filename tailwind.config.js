/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F9C06A',
        'customColor2': '#abcdef',
      },
    },
    fontFamily: {
      "clicker": ["Clicker Script", "cursive"],
      "playfair": ["Playfair Display", "serif"],
    },
    daisyui: {
      themes: ["light", "dark","coffee",],
    },
  },
  plugins: [require("daisyui")],
}

