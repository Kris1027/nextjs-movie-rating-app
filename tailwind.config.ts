import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#12100E',
        secondary: '#3C373D',
        tertiary: '#4A4B2F',
        quaternary: '#6B654B',
        quinary: '#D4DF9E',
      },
    },
  },
  plugins: [],
};
export default config;
