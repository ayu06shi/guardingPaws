/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "yellow-main": "#FFD466",
        blobColor: "#FCC844",
      },
      screens: {
        sm: "340px",
        md: "560px",
        
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    darkMode: "class",
    plugins: [require("tw-elements-react/dist/plugin.cjs")],
  },
};
