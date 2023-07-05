/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f4f4f5",
        lighter: "#fafafa",
        lightest: "#ffffff",

        primary: "#1d4ed8",
      },
    },
  },
};
