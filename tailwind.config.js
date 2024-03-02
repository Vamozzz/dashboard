/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      mainColor: "#6C54FF",
      greyBorder: "#F2F2F2",
      textColor: {
        textSec: "#535353",
        textGrey: "#BCBCBC",
        textGrey2: "#939393",
        textBlack: "#3D3E40",
      },
      redColor: {
        redPrime: "#E60000",
        redSec: "#FF4848",
      },
    },
    extend: {},
  },
  plugins: [],
};
