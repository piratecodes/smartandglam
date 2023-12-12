const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      fontSize:{
        'xxs': ['10px', '16px']
      },
      width: {
        '4.5': '1.125rem',
      },
      height: {
        '4.5': '1.125rem',
        '100':'30rem',
        '105':'32rem'
      },
      colors: {
        stone: colors.stone,
        zinc: colors.zinc,
        neutral: colors.neutral,
        fuchsia: colors.fuchsia,
        teal: colors.teal
      },
      spacing: {
        '0.25': '0.0625rem',
      },
      screens: {
        'xs': '350px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  darkMode: 'class',
}
