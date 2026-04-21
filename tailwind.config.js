/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#e3d0a8',
        'gold-dark': '#c39a44',
        dark: '#1a1a1a',
        muted: '#4a4a4a',
      },
      fontFamily: {
        brandon: ['brandon-grot-w01-light', 'sans-serif'],
        avenir: ['avenir-lt-w01_35-light1475496', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
