/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/cake.jpg')",
        bg_flower: 'url(/src/assets/images/bg-flower.jpg)'
      },
      colors: {
        pink_1: '#FFEFEF',
        pink_2: '#F3D0D7',
        brown_1: '#F0EBE3',
        brown_2: '#F6F5F2'
      },
      boxShadow: {
        custom: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;'
      }
    }
  },
  plugins: []
}
