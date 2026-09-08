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
          50: "#eff8ff",
          100: "#dbeefe",
          400: "#3fa9f5",
          500: "#1c8ce3",
          600: "#0f6fc0",
          700: "#0d5896",
        },
        accent: {
          400: "#ff9c4a",
          500: "#ff7e1f",
          600: "#e8650a",
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
