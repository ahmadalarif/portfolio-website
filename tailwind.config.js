/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BPdotsUnicaseSquareLight: 'BPdotsUnicaseSquareLight',
      }
    },
  },
  plugins: [require("tailwind-scrollbar"),
    "prettier-plugin-svelte",
    "prettier-plugin-organize-imports",
    'prettier-plugin-tailwindcss'],
  "pluginSearchDirs": false
};
