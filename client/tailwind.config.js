/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "yellow-main": "#FFD466",
        "blobColor": "#FCC844",
      },
      screens: {
        vvsm:{"max": "200px"},
        vsm:{"max": "356px"},
        sm: {"max":"640px"},
        md: {"max":"778px"},
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    plugins: [],
  },
};
