/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#facc15",
        dark: "#0f172a",
        secondary: "#64748b",
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
