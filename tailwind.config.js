module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightGrey1x':'#E6E6E6',
        'lightGrey2x':'#F9F9F9',
        'lightGrey3x':'#E4E4E4',
        'lightGrey4x':'#BDBDBD',
        'lightGrey5x':'#D9DBE1',
        'blue1x':'#23A6F0',
        'lightBlue1x':'#7BB9FC',
        'darkBlue1x':'#0A142F',
        'red1x':'#F4511E',
        'grey1x':'#F5F5F5',
        'grey2x':'#818181',
        'grey3x':'#BDBDBD',
        'grey4x':'#737373',
      },
      borderRadius:{
        four: "0.25rem",
        five: "0.3125rem",
        six: "0.375rem",
        eight: "0.5rem",
        '8point66px': '0.54125rem',
        ten: "0.625rem",
        fifteen: "0.9375rem",
        twenty: "1.25rem",
        '26.62px': "1.66375rem",
        thirty: "1.875rem",
        forty: "2.5rem",
        fifty: "3.125rem",
        fiftyPercent: "50%"
      },
      borderWidth: {
        '0.5': '0.5px'
      },
      screens:{
        'mds': {'min': '500px', 'max': '639px'},
        'xs': {'min': '200px', 'max': '300px'},
        'xsHeight': { 'raw': '(max-height:510px)'},
        'btwmdlg':'1000px'
      },
      spacing:{
        'sixPixel': "0.375rem",
        '18': '4.5rem',
        '0.75': '0.1875rem',
        'top18.5': '74px',
        '8point66px': '0.54125rem',
        '14px': '0.875rem',
        '18px': '1.125rem',
        '40px': '2.5rem',
        '45px': '2.8125rem',
        '50px': '3.125rem',
        '55px': '3.4375rem',
        '60px': '3.75rem',
        '66px': '4.125rem',
        '67px': '4.1875rem',
        '68px': '4.25rem',
        '71px': '4.4375rem',
        '76px': '4.75rem',
        '130px': '8.125rem',
        '140px': '8.75rem',
        '145px': '9.0625rem',
        '150px': '9.375rem',
        '180px': '11.25rem',
        '254': '15.875rem',
        '307': '19.1875rem',
        '322': '20.125rem',
        '350': '21.875rem',
        '380': '23.75rem',
        '410': '25.625rem',
        '500': '31.25rem',
        '618': '38.625rem',
        '700': '43.75rem',
        '70px': '4.375rem',
        navIcon: '20px',
        authWrapper: '34%',
        dashScrollableHeight: 'calc(100% - 10px)',
        icon: '20px',
        onePixel: '0.0625rem',
        threePixel: '0.150rem',
        tenPixel: '0.625rem',
        '11.9': '11.9%',
        '14.5': '14.5%',
        '16.15': '16.15%',
        '20.4': '20.4%',
        twoPointFivePercent: '2.5%',
        fivePercent: '5%',
        ninePercent: '9%',
        tenPercent: '10%',
        tenFivePercent: '10.5%',
        elevenPercent: '11%',
        elevenFivePercent: '11.5%',
        twelvePercent: '12%',
        thirteenPercent: '13%',
        fourteenPercent: '14%',
        fifteenPercent: '15%',
        fifteenOnePercent: '15.1%',
        fifteenPlusOnePercent: 'calc(15% + 1px)',
        fifteenTwoPercent: '15.2%',
        fifteenFivePercent: '15.5%',
        seventeenPercent: '17%',
        eighteenPercent: '18%',
        nineteenPercent: '19%',
        nineteenOnePercent: '19.1%',
        nineteenTwoPercent: '19.2%',
        nineteenFivePercent: '19.5%',
        twentyPercent: '20%',
        twentyTwoPercent: '22%',
        twentyFourPercent: '24%',
        twentyFivePercent: '25%',
        twentySixPercent: '26%',
        thirtyPercent: '30%',
        thirtyOnePercent: '31%',
        thirtyTwoPercent: '32%',
        thirtyThreePercent: '33%',
        thirtyFivePercent: '35%',
        thirtySixPercent: '36%',
        thirtyEightPercent: '38%',
        fortyPercent: '40%',
        fortyFivePercent: '45%',
        fortySevenPercent: '47%',
        fortyEightPercent: '48%',
        fortyNinePercent: '49%',
        fiftyPercent: '50%',
        fiftyOnePercent: '51%',
        fiftyTwoPercent: '52%',
        fiftyThreePercent: '53%',
        fiftyFourPercent: '54%',
        fiftyFivePercent: '55%',
        sixtyPercent: '60%',
        sixtyTwoPercent: '62%',
        sixtyFivePercent: '65%',
        sixtySixPercent: '66%',
        sixtySevenPercent: '67%',
        seventyPercent: '70%',
        seventyFivePercent: '75%',
        seventyEightPercent: '78%',
        eightyPercent: '80%',
        eightyOnePercent: '81%',
        eightyThreePercent: '83%',
        eightyFourPercent: '84%',
        eightyFivePercent: '85%',
        eightyEightPercent: '88%',
        ninetyPercent: '90%',
        ninetyFivePercent: '95%',
        ninetyEightPercent: '98%',
        ninetyNinePercent: '99%',
        hundredPercent: '100%',
        oneTwentyPercent: '120%',
        oneFiftyPercent: '150%'
      },
      fontSize: {
        sm: ['14px', '20px'],
        '28px': '1.75rem',
        'text6': ['6px', '12px'],
        'text10': ['10px', '14px'],
        'text15': ['15px', '20px']
      },
      ringOffsetWidth: {
        '3': '3px',
        '6': '6px',
        '10': '10px'
      },
      zIndex: {
        '70': '70',
        '80': '80',
        '100': '100',
        '110': '110',
        '120': '120',
        '130': '130',
        '150': '150',
        '180': '180',
        '200': '200',
        '250': '250'
      },
      minWidth: {
        '40px': '2.5rem',
        '350': '21.875rem',
      },
      
      maxWidth:{
        28: '7rem',
        '350': '21.875rem'
      }
    },
  },
  plugins: [],
}