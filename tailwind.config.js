// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    colors: {
      'green': '#00ff00',
      fontFamily: {
        mono: ['VT323'],
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};