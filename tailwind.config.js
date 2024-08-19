/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        rainbow: {
          '0%': { color: '#ffb3b3' }, /* Light Red */
          '14%': { color: '#ffcc99' }, /* Light Orange */
          '28%': { color: '#ffff99' }, /* Light Yellow */
          '42%': { color: '#ccffcc' }, /* Light Green */
          '57%': { color: '#99ccff' }, /* Light Blue */
          '71%': { color: '#d4a0ff' }, /* Light Purple */
          '85%': { color: '#ffb3e6' }, /* Light Pink */
          '100%': { color: '#ffb3b3' }, /* Light Red */
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        bounce: 'bounce 2s infinite',
        rainbow: 'rainbow 3s linear infinite',
        float: 'float 10s linear infinite',
      },
      textShadow: {
        default: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Add this if you don't have a plugin for text shadow
  ],
};