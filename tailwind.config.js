module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/flowbite/**/*.js' // add this line
],
  theme: {
    extend: {
      colors: {
        'yellow': '#E7B545',
        'red': '#C1413C',
        'green': '#1B4543',
        'black': '#090B04',
        'white': '#FFFEFB'
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
};
