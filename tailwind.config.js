module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}
