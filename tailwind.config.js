/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // espresso: "#1C0F0A",
        // brown: "#6B3F2A",
        // caramel: "#C8873A",
        // cream: "#F5F0E8",
        // latte: "#D4B896",

        jetblack: "#152925",
        darkslategrey: "#36534D",
        palmleaf: "#97A259",
        paleamber: "#D1D783",
        dustytaupe: "#9E886A",
        tan: "#D4B896",
        parchment: "#F5F0E8",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
