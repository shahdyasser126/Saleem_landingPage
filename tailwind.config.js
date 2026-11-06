/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#18283F",
        petrol: "#397A78",
        champagne: "#C3A477",
        sage: "#A8B6A5",
        ivory: "#F6F2EA",
        slate: "#69737D"
      },
      fontFamily: {
        sans: ["DM Sans", "IBM Plex Sans Arabic", "sans-serif"],
        arabic: ["IBM Plex Sans Arabic", "sans-serif"]
      }
    }
  },
  plugins: []
};
