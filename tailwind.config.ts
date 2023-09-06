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
        'lf-gray-200': '#E6E6E6',
        'lf-gray-300': '#CCCCCC',
        'lf-gray-100': '#F9F0F3',
      },
    },
  },
  plugins: [],
};
export default config;
