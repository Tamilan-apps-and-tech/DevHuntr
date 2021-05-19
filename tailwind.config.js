// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      transparent: 'transparent',
      red:{
        text: '#ff4444',
        accent:'#ff4444'
      },
      orange: {
        chip: '#FF7144',
      },
      blue:{
        chip: '#444dff',
      },
      black:{
        secondary: '#1C3E58',
        bg: '#20303C'
      },
      white:{
        secondaryText:'#ffffff',
        textField:'#ffffff'
      }
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'bold'],
        'nunito': ['"Nunito"'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}