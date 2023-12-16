/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "clicker": ["Clicker Script", "cursive"],
    },
    daisyui: {
      themes: ["light", "dark","coffee",],
    },
  },
  plugins: [require("daisyui")],
}

