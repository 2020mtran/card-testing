/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Adjust if needed based on your directory
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
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
