/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/*.{html, js, jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
