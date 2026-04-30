/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#17202a',
        mist: '#eff6f4',
        coral: '#d95d4f',
        teal: '#1f8a7a',
        gold: '#d8a31f',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(23, 32, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
