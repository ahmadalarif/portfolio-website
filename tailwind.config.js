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
        BPdotsUnicase: 'BPdotsUnicase',
      }
    },
  },
  plugins: [require("tailwind-scrollbar"), 
  ('tailwindcss-rtl'),
    "prettier-plugin-svelte",
    "prettier-plugin-organize-imports",
    'prettier-plugin-tailwindcss'],
  "pluginSearchDirs": false
};
