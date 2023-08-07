/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      brand: {
        light: "#39BDDE",
        DEFAULT: "#00A2C1",
        dark: "#00829B",
      },
      accent: {
        red: "#F35B56",
        yellow: "#FFDE59",
        "yellow-dark": "#c89607"
      },
      // neutral: {
      //   light: colors.gray.400, //#5B666C
      //   DEFAULT: colors.gray.600,
      //   dark: colors.gray.800, //#272727
      // },
    },
    fontFamily: {
      heading: ["Mali"],
      sans: ["Nunito"],
    },
    // extend: {
    // }
  },
  plugins: [require("@tailwindcss/typography")],
};
