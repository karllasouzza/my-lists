/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu_400Regular", "sans-serif"],
        "Ubuntu-Bold": ["Ubuntu_700Bold", "sans-serif"],
      },
      colors: {
        primary: {
          default: "#FFC043",
          800: "#917337",
        },
        gray: {
          950: "#23262B",
          900: "#2A2B2F",
          800: "#303239",
          700: "#373940",
          600: "#414249",
          500: "#747B84",
          400: "#DADEE3",
          300: "#EBEEF2",
          200: "#F4F6F9",
          100: "#FAFAFB",
        },
        accent: {
          success: "#11BB8D",
          error: "#E24949",
          1: "#7CC6D6",
          2: "#937CD6",
          3: "#D67CC2",
          4: "#D67C7C",
          5: "#D6C27C",
          6: "#7CD685",
          7: "#F7B68A",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
