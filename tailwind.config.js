const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      indigo: colors.indigo,
      white: colors.white,
      green: colors.emerald,
      pink: colors.pink,
      orange: colors.orange,
      teal: colors.teal,
      darkblue: "#151750",
    },
    fontSize: {
      "2xs": ".50rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "7rem",
      "10xl": "12rem",
    },

    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 2s cubic-bezier(0.1, 0.1, 0.1, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
      float: "float 3s infinite",
      refloat: "refloat 3s infinite",
    },
    extend: {
      fontFamily: {
        display: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        body: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        wiggle: "ease-in-out duration-2500",
        opacity: "ease-in transition-opacity	 duration-2000 opacity-60",
      },
      transitionProperty: {
        height: "height",
      },
      spacing: {
        116: "29rem",
        152: "38rem",
      },
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      auto: "auto",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("autoprefixer")],
};
