/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom theme colors
        primary: {
          dark: '#000000',
          medium: '#222222',
          light: '#1DCD9F',
          lightest: '#169976',
        },
        background: {
          main: '#000000',
          secondary: '#222222',
          card: '#222222',
        },
        text: {
          primary: '#1DCD9F',
          secondary: '#169976',
          accent: '#1DCD9F',
        },
        border: {
          primary: '#1DCD9F',
          secondary: '#222222',
        },
        button: {
          primary: {
            bg: '#1DCD9F',
            hover: '#169976',
            text: '#000000',
          },
        },
        nav: {
          text: '#1DCD9F',
          hover: '#169976',
        },
      },
      fontFamily: {
        sans: ['var(--font-sour-gummy)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
