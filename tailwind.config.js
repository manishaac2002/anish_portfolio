/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: "#2C2F42",
        chalk: {
          100: "#F7F7F7",
          200: "#E9E9E9",
          300: "#FDFDFD",
          400: "#9E9E9E",
        },
        cloud: "#CAE7FF",
        coal: "#363636",
        glass: "#4D545B"
      },
      borderRadius: {
        '4xl': '100px',
        '5xl': '194px',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

