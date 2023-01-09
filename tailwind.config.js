/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "textwhite":"var(--textWhite)",
        "greybase": "var(--greyBase)",
        "pinkbase": "var(--pinkBase)",
        "blackbase": "var(--blackBase)",
        "greenbase": "var(--greenBase)",
      },
    },
  },
  plugins: [],
}