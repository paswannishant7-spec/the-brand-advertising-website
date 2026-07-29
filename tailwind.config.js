/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#101B32",
          light: "#172846",
          soft: "#46546B",
        },
        ink: "#071225",
        cream: "#FFF9EB",
        mist: "#E9EFF5",
        brand: {
          red: "#F2A900",
          rose: "#FFD166",
          deep: "#B66A00",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "chevron-fade": "linear-gradient(90deg, #FFD166 0%, #F2A900 55%, #E56B1F 100%)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.25)",
        card: "0 10px 40px -12px rgba(0,0,0,0.15)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%,100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.08)", opacity: 0.85 },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
