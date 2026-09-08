import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070c1a",
          900: "#0b1226",
          800: "#121a33",
        },
        brand: {
          50: "#eef4ff",
          100: "#dde9ff",
          400: "#5b86f5",
          500: "#3161ee",
          600: "#1c46d1",
          700: "#1636a6",
        },
        teal: {
          50: "#e9fbf6",
          100: "#c9f6e9",
          400: "#34ddba",
          500: "#16c39e",
          600: "#0ea287",
        },
        accent: {
          50: "#fff3e8",
          100: "#ffe3c7",
          400: "#ff9a4d",
          500: "#ff7a1f",
          600: "#e35e05",
        },
        pink: {
          50: "#ffeaf4",
          100: "#ffd0e7",
          400: "#ff6bb0",
          500: "#ff3894",
          600: "#e01678",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;
