const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        alt: token("alt"),
        card: token("card"),
        inset: token("inset"),
        line: token("line"),
        ink: token("ink"),
        copy: token("copy"),
        muted: token("muted"),
        main: token("main"),
        brand: token("brand"),
      },
      keyframes: {
        slideDown: {
          from: { opacity: 0, transform: "translate(-50%, -16px)" },
          to: { opacity: 1, transform: "translate(-50%, 0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
