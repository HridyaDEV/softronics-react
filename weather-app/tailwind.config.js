/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-image': "url('./assets/images/Clearsky.jpg')",
      },
    },
  },
  plugins: [],
}

