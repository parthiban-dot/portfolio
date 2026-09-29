import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "#03040A",
          text: "#E6E6F1",
          secondary: "#B0B3C5",
          gold: "#FFEDC2",
          butter: "#FFDFAF",
          violet: "#A18AFF",
          card: "#10121B",
          border: "#3F4454",
        },
        night: {
          950: "#03040A",
          900: "#080A12",
          850: "#10121B",
          800: "#181B26",
          750: "#222736",
          700: "#3F4454",
        },
        surface: {
          1: "#080A12",
          2: "#10121B",
          3: "#181B26",
          border: "#3F4454",
          "border-hover": "#A18AFF",
        },
        starlight: {
          primary: "#E6E6F1",
          secondary: "#B0B3C5",
          muted: "#81859C",
          dim: "#4B5066",
        },
        moon: {
          accent: "#FFDFAF",
          gold: "#FFEDC2",
          violet: "#A18AFF",
          light: "#FFF6E0",
          glow: "rgba(255, 237, 194, 0.15)",
          border: "rgba(255, 237, 194, 0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
      keyframes: {
        innerOrbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        outerOrbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        counterOrbit: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
