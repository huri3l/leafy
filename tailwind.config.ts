import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lf-green-400': '#72CBAE',
        'lf-green-200': '#BCDEE6',
        'lf-green-alt': '#3A9C4C',
        'lf-green-logo': '#A6D189',
        'lf-gray-900': '#1B1B1B',
        'lf-gray-800': '#242424',
        'lf-gray-600': '#3C3C3C',
        'lf-gray-400': '#6E6E6E',
        'lf-gray-300': '#CCCCCC',
        'lf-gray-200': '#E6E6E6',
        'lf-gray-100': '#F9F0F3',
      },
      borderWidth: {
        '0.25': '0.063rem',
      },
      animation: {
        'fade-in': 'fade-in 1s linear forwards',
        'expand-menu': 'expand-83 0.2s linear forwards',
        'expand-full': 'expand-100 0.3s linear forwards',
        'expand-bottom-full': 'expand-bottom-100 3s linear forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
        'expand-100': {
          '0%': {
            float: 'right',
            width: '0',
            opacity: '0',
          },
          '5%': { opacity: '1' },
          '100%': {
            float: 'right',
            width: '100%',
            opacity: '1',
          },
        },
        'expand-bottom-100': {
          '0%': {
            float: 'top',
            height: '0',
            opacity: '0',
          },
          '5%': { opacity: '1' },
          '100%': {
            float: 'top',
            height: '100%',
            opacity: '1',
          },
        },
        'expand-83': {
          '0%': {
            float: 'right',
            width: '0',
            opacity: '0',
          },
          '5%': { opacity: '1' },
          '100%': {
            float: 'right',
            width: '83.333333%',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
