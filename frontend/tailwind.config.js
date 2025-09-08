/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'skLightBlue': '#9EEAF2',
        'blurple': '#222F66',
        'header': '#111834',
        'spectro': '#c6bda6',
        'aero': '#48b06f',
        'divider': '#1f1f26',
        'navy-blue': '#18224D',
        'dark-navy': '#141B39',
      },
      fontFamily: {
        lagu: ['LaguSans', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': '2.625rem', // 42px
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
