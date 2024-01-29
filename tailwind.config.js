  const colors = require("tailwindcss/colors");
  const defaultTheme = require("tailwindcss/defaultTheme");

  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./lib/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          gray: colors.gray // Change 'colors.neutral' to 'colors.gray'
        },
        fontFamily: {
          // to change, update font in _document.js
          sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
          serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
          stock: [...defaultTheme.fontFamily.sans] // Removed 'defaultTheme.fontFamily.sans' from array
        },
        aspectRatio: {
          "4/3": "4 / 3",
          "3/2": "3 / 2",
          "2/3": "2 / 3",
          "9/16": "9 / 16"
        }
      }
    },
    variants: {}, // Ensure variants object is defined even if empty
    plugins: [
      require("@tailwindcss/typography"),
      require("tailwindcss-animate")
    ]
  };