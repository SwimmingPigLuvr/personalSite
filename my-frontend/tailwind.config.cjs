/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'herb': ['"jaf-herb"', 'serif'],
        'typewriter': ['"p22-typewriter"', 'san-serif'],
        'elizeth': ['"elizeth-condensed"', 'serif']
      }
    }
  },
  plugins: []
};
