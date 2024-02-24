/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'profile':"url('../public/assets/profile.jpg')",
        'random':"url('https://img.imageboss.me/rinse-fm/cover:face/2400x1200/format:webp/Alexander-Nut-June-2023_2.jpg')"
      }
    },
    fontFamily: {
      oswald: ["'Oswald'", "sans-serif"],
      poppins: ["'Poppins'", "sans-serif"],
      jetbrains: ["'JetBrains Mono'", "monospace"],
      'roboto':['Roboto'],
      'roboto-condensed':['Roboto Condensed'],
      'ubuntu':['Ubuntu'],
      'ubuntu-condensed':['Ubuntu Condensed']
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}