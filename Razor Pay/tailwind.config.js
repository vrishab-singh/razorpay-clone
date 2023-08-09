/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish: ["Mulish", "sans-serif"],
      },
      colors:{
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lighblue300: "#4b94ed",
        lighblue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        grey2: "#e2e2e2",
      }
    },
  },
  plugins: [],
}