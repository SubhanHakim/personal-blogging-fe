/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter"],
    },
    colors:{
      primary: "#191919",
      white: "#ffffff",
      black: "#242424",
    }
  },
};
