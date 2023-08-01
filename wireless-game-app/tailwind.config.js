/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        darkRed: "#FF0000",
        red: "#DC4492",
        lightRed: "rgba(220, 68, 146, 0.5)",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        salmon: "#ff7675",
        transparent: "rgba(0, 0, 0, 0)",
        scroll: "#7d5fff",
        buttonText: "#fffa65",
        button: "#ffeaa7",
        // test: "rgba(220, 68, 146, 1)",
        test: "#32ff7e",
        lightBlack: "rgba(0,0,0,0.5)",
      },
      backgroundImage: (theme) => ({
        rainbow:
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        rainblue:
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        ufo: "url('./assets/wallpaper.jpg')",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
      },
      width: {
        lg: "28rem",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
