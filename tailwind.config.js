/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16498E",
        secondary: "#F4B300",
        secondaryT: "#D9A600",
        secondaryHook: "#FFD666",
        Text: "#0B2547",
        paragraph: "#4F5A69",
      },
    },
  },
  plugins: [],
};
