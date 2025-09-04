import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      tablet: "900px",
    },
    extend: {
     fontFamily: {
      prata: ["Prata", "serif"],
      outfit: ["Outfit", "sans-serif"]
     }
    },
  },
  plugins: [],
} satisfies Config;
