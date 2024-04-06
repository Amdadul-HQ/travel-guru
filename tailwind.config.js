/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btnBg': '#F9A51A'
      },
      fontFamily: {
        'Montserrat': ['"Montserrat", sans-serif"'],
      },
    },
  },
  plugins: [],
}

