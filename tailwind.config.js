/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Lato', 'sans-serif'],
      mono: ['Lato', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      sun: {
        50: '#FFEFC9',
        100: '#FEE9B5',
        200: '#FEDD8C',
        300: '#FED064',
        400: '#FDC43B',
        500: '#FDB813',
        600: '#D69702',
        700: '#9E7001',
        800: '#674901',
        900: '#2F2100',
        950: '#130E00'
      },
      minsk: {
        50: '#9191D0',
        100: '#8383C9',
        200: '#6666BD',
        300: '#4C4CAF',
        400: '#3F3F92',
        500: '#333376',
        600: '#22224F',
        700: '#160E44',
        800: '#111128',
        900: '#0A0816',
      },
    }
  },
  plugins: [],
}

