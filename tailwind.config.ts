import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B5FFF",
          blueDark: "#0A1A3C",
          blueTint: "#F3F6FF",
          blueTint2: "#E9EFFF",
          red: "#E53935",
          ink: "#10131A",
          line: "#E4E9F5",
          slate: "#5B6478",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,26,60,0.04), 0 8px 24px -8px rgba(10,26,60,0.10)",
        pop: "0 20px 60px -20px rgba(11,95,255,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
