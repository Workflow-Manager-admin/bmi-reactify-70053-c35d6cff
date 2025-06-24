module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#22c55e",
        accent: "#facc15",
        bmiBlue: "#2563eb",
        bmiGreen: "#22c55e",
        bmiYellow: "#facc15",
        bmiRed: "#ef4444",
      },
      fontFamily: {
        sans: ["SF Pro Text", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
