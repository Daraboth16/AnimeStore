/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login': "url('../assets/image/login.jpg')",
      }
    },
    fontFamily:{
      font:["Poppins","sans-serif"]
    }
  },
  plugins: [],
}