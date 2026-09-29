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
        night: {
          950: "#030508", // Primary canvas (deep midnight / near-black)
          900: "#080B11", // Secondary surface 1
          850: "#0E121A", // Card surface 2
          800: "#141824", // Elevated surface 3
          750: "#1B2130", // Subtle border
          700: "#242C3F", // Hover border
        },
        surface: {
          1: "#080B11",
          2: "#0E121A",
          3: "#141824",
          border: "rgba(255, 255, 255, 0.06)",
          "border-hover": "rgba(212, 229, 255, 0.18)",
        },
        starlight: {
          primary: "#F0F3FA",   // High-contrast off-white
          secondary: "#9BA4B5", // Muted slate gray
          muted: "#5C657A",     // Subtle metadata
          dim: "#3A4254",       // Hairline details
        },
        moon: {
          accent: "#D4E5FF", // Cool moonlight highlight
          light: "#E8F1FF",  // Crisp moonbeam
          glow: "rgba(212, 229, 255, 0.08)",
          border: "rgba(212, 229, 255, 0.14)",
          active: "#7EAAEB", // Interactive active state
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "surface-card": "0 8px 30px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        "surface-hover": "0 12px 35px -8px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(212, 229, 255, 0.16)",
        "moon-soft": "0 0 30px -5px rgba(212, 229, 255, 0.06)",
        "moon-button": "0 0 20px -2px rgba(212, 229, 255, 0.15)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
