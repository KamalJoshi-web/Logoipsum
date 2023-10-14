/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0076CE",
        gray: "#616161",
        lightGray: "#F4F4F4",
        lightRed: "#FF6666",
      },
    },
  },
  plugins: [],
};
