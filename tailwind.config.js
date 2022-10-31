/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-dark-blue': 'hsl(209, 23%, 22%)',
        'color-very-dark-blue-dm': 'hsl(207, 26%, 17%)',
        'color-very-dark-blue-lm': 'hsl(200, 15%, 8%)',
        'color-dark-gray': 'hsl(0, 0%, 52%)',
        'color-very-light-gray': 'hsl(0, 0%, 98%)',
        'color-white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
