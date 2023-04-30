/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "t-lg": "50px 50px 0 0",
        "b-lg": "0 0 200px 200px",
      },
    },
  },
  plugins: [],
};
