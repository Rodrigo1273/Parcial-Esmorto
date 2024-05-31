/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
    color :{
      danger: '#FF5F40',
      info:{
        900: '#234e52',
        800: '#285e61',
      }
    },
    },
    fontfamily: {
      rale: ['Raleway'],
    },
  },
  plugins: [],
}

