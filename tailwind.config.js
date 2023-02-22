/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // text-brand-...
          aqua: "#31b59f",
          grey: "#596273",
          "dark-grey": "#333",
          "dark-blue": "#071c44",
        },
      },
    },
  },
  plugins: [],
};
