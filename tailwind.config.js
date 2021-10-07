module.exports = {
  purge: {
    content: ['./src/**/*.{ts,tsx}'],

    options: {
      safelist: [/^text-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      red: {
        100: '#fc9b97',
        200: '#ef8783',
        300: '#e97672',
        400: '#df6662',
        500: '#d9534f',
        600: '#ce3531',
        700: '#ba1b18',
        800: '#af0d0a',
        900: '#970400',
      },
      blue: {
        100: '#9de2ff',
        200: '#88d5f5',
        300: '#75cbef',
        400: '#66c2e9',
        500: '#53b6e0',
        600: '#3ca6d2',
        700: '#2696c4',
        800: '#1385b3',
        900: '#0077a7',
      },
      green: {
        100: '#cdffd5',
        200: '#b7f3c1',
        300: '#a2e9ad',
        400: '#8ad696',
        500: '#74c080',
        600: '#5cab68',
        700: '#4c9f58',
        800: '#3b9048',
        900: '#2b7c38',
      },
      yellow: {
        100: '#ffe493',
        200: '#ffde7c',
        300: '#ffd967',
        400: '#ffd350',
        500: '#ffcc35',
        600: '#ffc107',
        700: '#f4b700',
        800: '#e5ac00',
        900: '#d29d00',
      },
      orange: {
        100: '#ffb374',
        200: '#ffa860',
        300: '#ff9e4d',
        400: '#ff943a',
        500: '#ff8926',
        600: '#fd7e14',
        700: '#ff7808',
        800: '#f26e00',
        900: '#e46800',
      },
      gray: {
        100: '#ededed',
        200: '#dddcdc',
        300: '#cccccc',
        400: '#b5b5b5',
        500: '#999898',
        600: '#7a7979',
        700: '#5b5b5b',
        800: '#4a4a4a',
        900: '#383737',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
