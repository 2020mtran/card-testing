/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Adjust if needed based on your directory
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
  plugins: [],
};
