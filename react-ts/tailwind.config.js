/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      boxShadow: {
        'front-light': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        'front-strong': '0 0 10px 0 rgba(0, 0, 0, 0.13)',
        'front-xstrong': '0 0 10px 0 rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
