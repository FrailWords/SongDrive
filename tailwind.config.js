const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"Fira Mono"', ...defaultTheme.fontFamily.mono],
      fira: ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'spring': {
          400: '#88b544',
          600: '#bbdd77',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
