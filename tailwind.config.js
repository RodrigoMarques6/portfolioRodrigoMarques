/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts,scss}", "./node_modules/flowbite/**/*.js"],
  important: true,
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "5.5rem",
      "7xl": "6rem",
      "8xl": "6.5rem",
      "9xl": "7rem",
      "10xl": "7.5rem",
    },
    screens: {
      sm: "460px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          50: "#eef9e7",
          100: "#d5f0c2",
          200: "#b9e59b",
          300: "#9bdb70",
          400: "#82d34d",
          500: "#69cb25",
          600: "#5aba1c",
          700: "#42a60f",
          800: "#279200",
          900: "#007000",
          950: "#007000",
          DEFAULT: "#269200",
        },
        accent: colors.slate,
        slate: {
          50: "#fafafa",
          100: "#f4f4f4",
          200: "#ededed",
          300: "#dfdfdf",
          400: "#bbbbbb",
          500: "#9c9c9c",
          600: "#737373",
          700: "#606060",
          800: "#414141",
          900: "#202020",
          950: "#202020",
          DEFAULT: "#ededed",
        },
        warn: colors.red,
      },
      fontFamily: {
        sans: `"Mulish var", ${defaultTheme.fontFamily.sans.join(",")}`,
        mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(",")}`,
      },
      zIndex: {
        9999: 9999,
      },
      backgroundImage: {
        "carrousel-1": "url('/assets/images/carrousel-1.jpeg')",
        "carrousel-133": "url('/assets/images/carrousel-133.jpeg')",
        "programming": "url('/assets/imagens/programming.jpg)"
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
