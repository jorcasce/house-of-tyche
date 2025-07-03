/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
        colors: {
          tycheGold: '#FFD700',
          tycheNight: '#0C0C2D',
          tycheSurface: '#1A1A2E',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
  },
  plugins: [],
}
