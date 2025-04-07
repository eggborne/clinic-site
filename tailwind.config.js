// tailwind.config.js
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        highlight: "#e13e20",       // orange
        offblack: "#1c1c1c",
        headline: "#ffc300",       // mustard
        gray: "#676767",
        darkgray: "#676767",
      },
    },
  },
  plugins: [],
};
