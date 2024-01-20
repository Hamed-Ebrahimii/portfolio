/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'Hero-1' : 'url("/public/img/Hero-1.png")',
        'Contact' : 'url("/public/img/Group (3).svg")',
        'skill' : 'url("/public/img/space background (1).png")'
      },
      animation : {
        'spin-slow': 'spin 10s linear infinite',
      },
      fontFamily : {
        Death : 'Death',
        'Death-outline' : 'Death-outline',
      }
    },
  },
  plugins: [],
}