/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        monserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "cust-blue": "#F3C86A",
        "cust-sky": "#F3C86A",
        "cust-light": "#F9F9F9",
        "cust-yellow" : "#F3C86A",
        "cust-pink" : "#E02DAC",
        "cust-violet" : "#881F86",
        "cust-purple" : "#12021D"
      },
    },
  },
  plugins: [],
}