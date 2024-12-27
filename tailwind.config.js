import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mob: "767px",
    },
    fontFamily: {
      raleway: ["Raleway"],
      alata: ["Alata"]
    },
    extend: {
      colors: {
        primary: {
          100: "#754F23",
          200: "#C1AEA0",
        },
        secondary: {
          100: "#2F2F2F",
        },
        colorBorder: {
          100: "#C4C4C4",
          200: "#C1AEA066"
        },
        green: {
          100: "#369850",
          200: "#36985047",
          300: "#36985020"
        },
        red: {
          100: "#D13131"
        }
      },
    },
  },
  daisyui: {
    themes: ["light", "black"],
  },
  plugins: [daisyui],
};
