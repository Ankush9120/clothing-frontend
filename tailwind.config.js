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
      alata: ["Alata"],
      albert: ["Albert Sans"]
    },
    extend: {
      colors: {
        primary: {
          100: "#754F23",
          200: "#C1AEA0",
          300: "#C1AEA04D", // 30%
          400: "#C1AEA066", // 40%
          500: "#F0EADC",
          600: "#C1AEA01A", // 10%
          700: "#C1AEA0B2" // 70%
        },
        secondary: {
          100: "#2F2F2F",
          200: "#2F2F2FC4", // 70%,
          300: "#2F2F2F4D", // 50%
        },
        colorBorder: {
          100: "#C4C4C4",
          200: "#C1AEA066",
        },
        green: {
          100: "#369850",
          200: "#36985047",
          300: "#36985020"
        },
        red: {
          100: "#D13131"
        },
        yellow: {
          100: "#FFB200"
        }
      },
    },
  },
  daisyui: {
    themes: ["light", "black"],
  },
  plugins: [daisyui],
};
