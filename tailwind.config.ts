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
          950: "#030408",
          900: "#080B12",
          850: "#0E121E",
          800: "#141A29",
          700: "#1E263B",
          600: "#2B3654",
        },
        moon: {
          glow: "#FFF5DC",
          light: "#FFEDC2",
          amber: "#FFDFAC",
          muted: "#D9C9A8",
          border: "rgba(255, 237, 194, 0.12)",
        },
        starlight: {
          primary: "#E6E8F2",
          secondary: "#9EA5C0",
          muted: "#666F8F",
          dim: "#40465E",
        },
        cyanic: {
          glow: "#64D2FF",
          accent: "#38BDF8",
        },
        violet: {
          glow: "#A18AFF",
          subtle: "#7E64E6",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "moon-subtle": "0 0 25px -5px rgba(255, 237, 194, 0.08)",
        "moon-card": "0 8px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.04)",
        "violet-card": "0 8px 30px -10px rgba(161, 138, 255, 0.1), 0 0 0 1px rgba(161, 138, 255, 0.15)",
        "glow-sm": "0 0 15px rgba(255, 237, 194, 0.15)",
      },
      backgroundImage: {
        "radial-night": "radial-gradient(circle at 50% 0%, rgba(255, 237, 194, 0.04) 0%, rgba(3, 4, 8, 1) 70%)",
        "radial-moon": "radial-gradient(circle at center, rgba(255, 239, 204, 0.08) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
