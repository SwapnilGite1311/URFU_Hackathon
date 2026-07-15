import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070A",
        panel: "#0D1117",
        ion: "#4FF3C0",
        gamma: "#7C5CFF",
        warn: "#FFB020",
        primary: "#F4F6F8",
        muted: "#8A93A3",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(79,243,192,0.08), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79,243,192,0.15)",
        "glow-violet": "0 0 40px rgba(124,92,255,0.18)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(79,243,192,0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(79,243,192,0)" },
        },
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2.6s ease-out infinite",
        orbit: "orbit 40s linear infinite",
        orbitSlow: "orbit 70s linear infinite reverse",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
