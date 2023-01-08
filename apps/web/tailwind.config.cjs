/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkCyan: '#61f3f3',
        lightCyan: '#006c9c',
        Default: '#00ab55',
        Cyan: '#078dee',
        Purple: '#7635dc',
        Blue: '#2065d1',
        Orange: '#fda92d',
        Red: '#f03030',
        White: '#ffffff',
        Dark: '#161c24',
        Light: '#d5d5d56e',
        HeaderDark: '#161c24cc',
        HeaderLight: '#ffffffcc'
      },
      backgroundImage: {
        magicalMagnetaText: 'linear-gradient(30deg, #c850c0, #ffcc70)',
        magicDefault:
          '-webkit-linear-gradient(300deg, rgb(0, 171, 85) 0%, rgb(255, 171, 0) 25%, rgb(0, 171, 85) 50%, rgb(255, 171, 0) 75%, rgb(0, 171, 85) 100%)',
        magicCyan:
          '-webkit-linear-gradient(300deg, rgb(7, 141, 238) 0%, rgb(255, 171, 0) 25%, rgb(7, 141, 238) 50%, rgb(255, 171, 0) 75%, rgb(7, 141, 238) 100%)',
        magicPurple:
          '-webkit-linear-gradient(300deg, rgb(118, 53, 220) 0%, rgb(255, 171, 0) 25%, rgb(118, 53, 220) 50%, rgb(255, 171, 0) 75%, rgb(118, 53, 220) 100%)',
        magicBlue:
          '-webkit-linear-gradient(300deg, rgb(32, 101, 209) 0%, rgb(255, 171, 0) 25%, rgb(32, 101, 209) 50%, rgb(255, 171, 0) 75%, rgb(32, 101, 209) 100%)',
        magicOrange:
          '-webkit-linear-gradient(300deg, rgb(253, 169, 45) 0%, rgb(255, 171, 0) 25%, rgb(253, 169, 45) 50%, rgb(255, 171, 0) 75%, rgb(253, 169, 45) 100%)',
        magicRed:
          '-webkit-linear-gradient(300deg, rgb(255, 48, 48) 0%, rgb(255, 171, 0) 25%, rgb(255, 48, 48) 50%, rgb(255, 171, 0) 75%, rgb(255, 48, 48) 100%)'
      },
      maxWidth: {
        '8xl': '88rem' /* 1408px */
      },
      boxShadow: {
        sectionShadowDark: '3px 2px 10px 4px #00020563',
        sectionShadowLight: '3px 2px 10px 4px #c4cbd463',
        themePanelDark: '-40px 40px 80px -8px #0000003d',
        sidebarDark: '20px 20px 80px 9px #0000003d',
        headerLight: '0px 0px 20px 11px #00000038',
        headerDark: '0px 0px 14px 7px #00000069'
      },
      zIndex: {
        60: '60'
      }
    }
  },
  plugins: []
};
