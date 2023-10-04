/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner':"linear-gradient(to right bottom, rgb(125, 124, 124,0.9), rgb(25, 23, 23,1)), url('https://i.ibb.co/McWJW9Q/assortment-teacher-s-day-elements.jpg')"
      }
    },
  },
  plugins: [],
}

