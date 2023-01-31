/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      OS: ["Open Sans"],
      pop: ["Poppins"]
    }
  },
  plugins: [],
}
