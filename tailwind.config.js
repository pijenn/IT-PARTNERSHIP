/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "cust-blue": "#19397F",
        "cust-sky": "#89A4DE",
        "cust-light": "#F9F9F9"
      },
    },
  },
  plugins: [],
}