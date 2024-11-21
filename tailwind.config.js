/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'headphone-bg': "url('./images/music-arrangement-with-black-headphones-with-copy-space.jpg')",
        'speaker-bg': "url('./images/paul-esch-laurent-YU-OA2TvQRQ-unsplash.jpg')",
        'cutted-bg': "url('/images/cutted-speaker.jpg')",
        'bottom-cutted-bg': "url('/images/bottom-cutted-speaker.jpg')",
        'orange-speaker-bg': "url('/images/orange-bgg.jpg')",
        'mk1-bg': "url('/images/mk1-earphone.jpg')",
        'header-bg': "url('/imagess/rm245-bb-06-f.jpg')",
        'header-2-bg': "url('/imagess/v688batch2-kul-09.jpg')",

      },
      colors: {
        'nice-blue': '#273a65'
      },

      fontFamily: {
        'kanit': ["Kanit", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
        'outfit': ["Outfit", "sans-serif"],
      },
      width: {
        'w%10': "10%",
        'w%20': "20%",
        'w%30': "30%",
        'w%45': "45%",
        'w%48': "48%",
      },
      height: {
        'h-10': "10%",
        'h-20': "20%",
        'h-30': "30%",
        'h-40': "40%",
        'h-50': "50%",
        'h-60': "60%",
        'h-70': "70%",
        'h-80': "80%",
        'h-90': "90%",
        'h-120': "120%",
        'h-130': "130%",
        'h-140': "140%",
        'h-150': "150%",
        'h-200': "200%",
        'h-250': "250%",
      },
      letterSpacing: {
        "letter-most": "1rem"
      },
      boxShadow: {
        'naysshadow': 'rgba(0, 0, 0, 0.15) 0px 2px 8px;'
      }
    },
  },
  plugins: [],
}