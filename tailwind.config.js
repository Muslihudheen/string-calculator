module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131010',
        secondary: '#543A14',
        accent: '#F0BB78',
        light: '#FFF0DC',
        'accent-dark': '#F0BB78'
      },
      fontFamily: {
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};