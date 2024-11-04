module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Example color
        secondary: '#3B82F6',
        accent: '#10B981',
        background: '#F9FAFB',
        darkBackground: '#111827',
        text: '#111827',
        lightText: '#F3F4F6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
