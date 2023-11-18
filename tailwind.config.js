/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1460px",
      },
      colors: {
        transparent: "transparent",
        white: "#fff",
        primary: "#262626",
        secondary: "#E45F4E",
        lightGray: "#848484",
        bgLight: "#f4f4f4"
        

      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'security-bg': "url('./src/assets/images/security-bg.jpg')",
      }
    },
  },
  plugins: [],
};

   