/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        background: "#1E1E1E",
        secondary: "#02C3BD",
        button: "linear-gradient(135deg, #02C3BD 0%, #4062BB 100%);",
        logo: "linear-gradient(45deg, #02C3BD 0%, #5899FF 100%, #50BEBB 100%);",
        input: "#0E1114",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
