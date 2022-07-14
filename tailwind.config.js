/** @type {import('tailwindcss').Config} */
module.exports = {
  // plugins: [require("@tailwindcss/forms")],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
