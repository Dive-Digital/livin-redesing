/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.js',
    './src/**/*.scss',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        offWhite: '#FEFEFE',
        lightGray: '#FBFBFB',
        gray: '#DFDFDF',
        mediumGray: '#707070',
        darkGray: '#36414A',
        blackOpacity16: '#00000029', // 16% de opacidad
        blackOpacity43: '#0000006E', // 43% de opacidad
        limeGreen: '#CBDC00',
      },

    },
  },
  plugins: [],
}
