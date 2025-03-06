/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGold: "#c5a664",
        customBlack: "#1a1919",
        customText: "#aaa",
      }
    },
  },
  plugins: [],
}

