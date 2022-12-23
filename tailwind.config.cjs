/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'proxima-nova': ['Proxima Nova', 'Roboto', 'System', 'Arial', 'sans-serif']
      },
      spacing: {
        '68': '17rem',
        '88': '22rem',
        '104': '26rem'
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [],
}
