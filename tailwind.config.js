// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          600: '#4CAF50', // Example color value
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
