/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "merriweather-sans": ["Merriweather Sans", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      fontWeight: {
        "merriweather-sans-regular": 400,
        "merriweather-sans-medium": 500,
        "merriweather-sans-semibold": 600,
        "nunito-sans-medium": 500,
        "nunito-sans-semibold": 600,
      },
    },
  },
  plugins: [],
};
