/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1159px' }, // Desktop wide.
      customMD: { max: '750px' },
      customSM: { min: '680px' },
      customLMD: { max: '1199px' },
      customMSM: { max: '850px' },
      customXSM: { max: '615px' },
    },
    extend: {
      fontFamily: {
        Mulish: ['Mulish'],
        Assistant: ['Assistant'],
        Raleway: 'Raleway, sans-serif',
        Montserrat: 'Montserrat',
        PTSerif: 'PTSerif',
        Rubik: 'Rubik',
        MuseoSans: 'MuseoSans',
        Helvetica: 'Helvetica',
        PTSerifI: 'PT-SerifI',
        Catamaran: 'Catamaran',
      },
      colors: {
        gray: '#EBECEF',
        lightGreen: '#65a765',
      },
    },
  },
  plugins: [],
};
