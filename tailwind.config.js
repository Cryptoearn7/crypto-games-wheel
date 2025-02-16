/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Scans all React files
    "./public/index.html" // ✅ Ensures Tailwind works in public HTML files
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00FFFF",
        deepPurple: "#4B0082",
        darkGray: "#1A1A1A",
        arcadeYellow: "#FFD700",
      },
      fontFamily: {
        arcade: ["Press Start 2P", "cursive"],
      },
    },
  },
  plugins: [],
};
