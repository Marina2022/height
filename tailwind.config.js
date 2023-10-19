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
        secondary: 'rgba(0,24,42, .6)',
        grey: 'rgba(0,24,42, 0.07)',
        borderGrey: 'rgba(0,24,42, 0.1)',
        btnBlack: 'rgba(0,0,0, 0.84)',
        greyBtnHover: 'rgba(0,0,0, 0.78)',
        greyBtn: 'rgba(0,0,0, 0.64)',
        greyBtnHoverBg: '#e4e6e7',
        borderLightGrey: '#dedfe0',
        btnBgHover: '#f5f5f5',
        lightBorder: '#f2f3f4',
        tableCellsHover: '#ebebeb',
        tableCellsBg: '#edeff0',
        tableCellsBgHover: '#dcdedf',
        tableRowHover: '#fcfcfc',
        commentText: '#9ba5ab',
        ctrlBtn: '#9d9d9d'

      },
      boxShadow: {
        "inputShadow": '0 0 0 2px #9f9fa3',
        "largeShadow": '0px 10px 60px 0px rgba(0, 0, 0, .15), 0px 15px 25px 0px rgba(0, 0, 0, .1)',
        "btnShadow": '0px .5px 0px 0px rgba(0, 0, 0, .15)',
        "btnDisabledShadow": '0px 1px 1px 0px rgba(0, 0, 0, .05)',
      }
    },
  },
  plugins: [],
}

