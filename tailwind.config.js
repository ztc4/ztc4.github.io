/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pink: "#EFD4FF",
        blue: "#244CB4",
        secondary: {
          light: "#000",
          dark: "#fff",
        },
        background: {
          light: "#d9d9d9",
          dark: "#111111",
        },
      },
      fontFamily: {
        "sloth-regular": ["sloth-regular"],
        "sloth-semibold": ["sloth-semibold"],
        "sloth-light": "sloth-light",
        sans: [
          "Laila",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        KyivTypeBold:["KyivTypeBold","KyivTypeBold-","KyivTypeMedium"],
        "KyivTypeBold-":["KyivTypeBold-","KyivTypeBold"],
        "KyivTypeMedium-": ["KyivTypeMedium-","KyivTypeBold"],
      },
      fontSize: {
        hl: "4.625rem", // 74px
        hs: "2.5rem", // 40px
        ps: "0.75rem", // 12px
        pl: "1.375rem", // 22px
      },
      backgroundPosition: {
        'custom-bottom': '70% -150%', // Adjust the percentage as needed
      },
      objectPosition:{
          'custom-bottom': '70% -150%'
      }
    },
  },
  plugins: [],
  mode: "jit",
};
