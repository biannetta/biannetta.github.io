/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#428bca',
          1000: '#215c8e',
        }
      }
    },
  },
  plugins: [],
}

