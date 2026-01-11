/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Slate 900
        primary: "#06b6d4", // Cyan 500
        secondary: "#64748b", // Slate 500
        accent: "#12f7ff", // Original neon cyan
        dark: "#020617", // Slate 950
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
