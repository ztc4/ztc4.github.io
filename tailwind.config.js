/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "pink":"#EFD4FF",
        "red":"#FF4654",
        "dark":"#333333"
      },
      fontFamily:{
        "sloth-regular":["sloth-regular"],
        "sloth-semibold":["sloth-semibold"],
        "sloth-light":"sloth-light"
      },
      fontSize: {
        "hl": "4.625rem", // 74px
        "hs": "2.5rem",   // 40px
        "ps": "0.75rem",  // 12px
        "pl": "1.375rem"  // 22px
      }, 
    },
  },
  plugins: [],
  mode: 'jit',
}
