/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu_400Regular", "sans-serif"],
        "Ubuntu-Bold": ["Ubuntu_700Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
