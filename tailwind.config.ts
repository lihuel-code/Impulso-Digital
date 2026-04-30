import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A1F44",
          50:  "#F4F7FB",
          100: "#E1E8F0",
          200: "#CBD5E1",
          300: "#94A3B8",
          400: "#64748B",
          500: "#334155",
          600: "#1E293B",
          700: "#152B5E",
          800: "#0F1F4A",
          900: "#0A1F44",
        },
        brand: {
          DEFAULT: "#1E5FD9",
          50:  "#F0F6FF",
          100: "#E3EDFC",
          200: "#C2D9F8",
          300: "#8FB7F0",
          400: "#5891E5",
          500: "#1E5FD9",
          600: "#0F3F9E",
          700: "#0B3380",
          800: "#0A2A66",
          900: "#08204D",
        },
        gold: {
          DEFAULT: "#F5B400",
          50:  "#FFF8E1",
          100: "#FFEFB3",
          400: "#F5B400",
          500: "#D89C00",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,31,68,0.04), 0 6px 24px -10px rgba(10,31,68,0.12)",
        card: "0 2px 8px rgba(10,31,68,0.06), 0 12px 40px -16px rgba(10,31,68,0.18)",
        ring: "0 0 0 1px rgba(30,95,217,0.18)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(10,31,68,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,31,68,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,95,217,0.12), transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "blink":   "blink 1.1s steps(2, end) infinite",
        "shimmer": "shimmer 2.4s linear infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        blink:   { "50%": { opacity: "0" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
    },
  },
  plugins: [],
};
export default config;
