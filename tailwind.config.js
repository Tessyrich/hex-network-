/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        deorange: "#eb5d47",
        depurple: "#a933b2",
        degreen: "#a4f9ff",
        iconbg: "hsla(0,0%,100%,0.1)",
      },
      fontSize: {
        big: "9rem",
        bigger: "15rem",
      },
    },
  },
  plugins: [],
};
