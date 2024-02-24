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
        'title':"url('../public/assets/title.png')",
        'h1':"url('../public/assets/h1.png')"
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