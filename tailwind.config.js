/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteBg: "#ebebeb",
        greenBrand: "#42b883",
        greenBrandHover: "#3aa370",
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
      gridTemplateColumns: {
        shoppingLayout: "1fr 420px",
      },
    },
  },
  plugins: [],
};
