/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        112: "28rem",
        128: "32rem",
        400: "100rem",
        600: "150rem",
        800: "200rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
