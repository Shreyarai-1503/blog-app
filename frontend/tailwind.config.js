/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C5DD3",
        primaryDark: "#5A4BB4",
        customGray: "#9D9DAA",
        background: "#FAFAFB",
        borderGray: "#E0E0E0",
      }
    },
  },
  plugins: [],
}