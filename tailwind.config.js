/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*{.html, .js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        primary: 'rgba(0,24,42,1)',
        secondary: 'rgba(0,24,42, 0.65)',
        grey: 'rgba(0,24,42, 0.07)',
        borderGrey: 'rgba(0,24,42, 0.1)',
        btnBlack: 'rgba(0,0,0, 0.84)',
        greyBtnHover: 'rgba(0,0,0, 0.78)',
        greyBtn: 'rgba(0,0,0, 0.64)',
        greyBtnHoverBg: '#e4e6e7',
        borderLightGrey: '#dedfe0',
        btnBgHover: '#f5f5f5',
        lightBorder: '#f2f3f4',

      },
      boxShadow: {
        "inputShadow": '0 0 0 2px #9f9fa3',
        "largeShadow": '0px 10px 60px 0px rgba(0, 0, 0, .15), 0px 15px 25px 0px rgba(0, 0, 0, .1)'
      }
    },
  },
  plugins: [],
}

