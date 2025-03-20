/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "my-image":"url(/public/gofood1.avif)",
        "my-newimage":"url(/public/pizza3.jpg)",
      }
    },
  },
  plugins: [],
}

