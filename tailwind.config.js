/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If you have an HTML entry file
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JavaScript and TypeScript files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#EDF7FA",
      },
      fontFamily: {
        heebo: ["Heebo", "Atkinson Hyperlegible Mono", "Dosis", "serif"],
        Atkinson: ["Atkinson Hyperlegible Mono", "Heebo", "Dosis", "serif"],
        Dosis: ["Dosis", "Atkinson Hyperlegible Mono", "Dosis", "serif"],
      },
      screens: {
        one: "1100px",
        two: "920px",
        three: "500px",
      },
    },
  },
  plugins: [],
};
