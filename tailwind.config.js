/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#006494",
        secondary: "#247ba0",
        accent: "#1b98e0",
        dark: "#13293d",
        light: "#e8f1f2",
      },
      fontFamily: {
        logo: "Pixelify Sans, sans-serif",
        body: "Ubuntu Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
