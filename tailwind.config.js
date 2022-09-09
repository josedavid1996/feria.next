/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xlg: '1444px'
      },
      colors: {
        primary: {
          100: '#B01F8C',
          200: 'rgba(176, 31, 140, 0.75)'
        },
        secundary: {
          100: '#FFC600',
          200: ' #007598',
          300: '#6CBE4C',
          400: '#173D35',
          500: '#FFC60B',
          600: '#69BF4A',
          700: '#024C3D'
        }
      }
    },
    fontFamily: {
      open: ['Open Sans', 'sans-serif']
    }
  },
  plugins: []
}
