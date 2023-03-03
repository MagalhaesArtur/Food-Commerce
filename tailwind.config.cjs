/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        shadowZin:
          "rgba(202, 196, 196, 0.16) 0px 3px 6px, rgba(178, 166, 166, 0.23) 0px 3px 6px",
      },
    },
  },
  plugins: [],
};
