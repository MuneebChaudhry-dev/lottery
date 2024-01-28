import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: ['"Inter"', 'sans-serif'],
    },
    extend: {
      colors: {
        'cosmic-primary': '#961A88',
        'cosmic-secondary': '#EEE1F0',
        'classic-primary': '#191978',
        'classic-secondary': '#E9EEF6',
        'atomic-primary': '#00AEB1',
        'atomic-secondary': '#EAF9F7',
      },
    },
  },
  plugins: [],
};
export default config;
