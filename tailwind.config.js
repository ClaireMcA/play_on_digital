/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {


      'purple': '#864FA0',
      'orange': '#F47F52',
      'green': '#76B966',
      'yellow': '#FEC66A',
      'pink': '#DE2F90',
      'darkBlue': '#01519C',
      'lightBlue': '#20B6C9',

      'lightGrey': '#BCBCBC',
      'medGrey': '#59595B',
      'darkGrey': '#3B3B3F',
      'white': '#ffffff',
      'black': '#000000',

    },
    fontFamily: {
      sans: ['trade-gothic-next', 'sans-serif'],
      serif: ['thinkMusic', 'serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
