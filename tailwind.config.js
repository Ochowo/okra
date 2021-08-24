module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      avenir: ['Avenir', 'sans-serif'],
    },
    extend: {
      colors: {
        grey1: '#55585a',
        active: '#98c21d',
        grey2: '#828282',
        borderGrey: '#E5E5E5',
        sideNavBg: '#006072',
        error: '#FFECEC',
        warning: '#FFE1BF',
        success: '#EEFFE5',
        errorText: '#FF4C4C',
        warningText: '#B57B3A',
        successText: '#67C437',
        grey3: '#f2f2f2',
      },
      minHeight: {
        // Configure your color palette here
        oneTenth: '5vh',
        twenty: '20vh',
        customHeight: '80vh',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
