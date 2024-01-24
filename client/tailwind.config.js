/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      },
      colors: {
        'yellow-main': '#FFD466',
        'blobColor': '#FCC844',
      },
      backgroundImage: {
        // 'dogg': 'url(/images/dog2.png)',
      }
    },
  },
  plugins: [],
}

