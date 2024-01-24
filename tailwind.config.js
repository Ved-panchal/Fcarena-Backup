/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004F2D",
        secondary: "#EDF67D",
        bodyTextLight: "#F2FFEF",
        bodyTextDark: "#1C0F13",
      },
    },
  },
  plugins: [],
};
