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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bgPurple': 'linear-gradient(180deg, rgba(78,45,91,1) 0%, rgba(134,79,160,1) 75%, rgba(184,146,195,1) 100%)',
        'bgPink': 'linear-gradient(180deg, rgba(155,33,101,1) 0%, rgba(222,47,144,1) 75%, rgba(239,151,200,1) 100%);',
      },
    },
  },
  plugins: [],
}
