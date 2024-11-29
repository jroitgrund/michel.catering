import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        jump: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        wobble: {
          "0%": {
            transform: "translateX(0)",
          },
          "15%": {
            transform: "translateX(-20px)",
          },
          "30%": {
            transform: "translateX(20%)",
          },
          "45%": {
            transform: "translateX(-15%)",
          },
          "60%": {
            transform: "translateX(20px)",
          },
          "75%": {
            transform: "translateX(-5%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        spinOne: "spin 2s linear infinite",
        spinTwo: "spin 4s linear infinite",
        spinThree: "spin 2.5s linear infinite",
        spinFour: "spin 4.5s linear infinite",
        jump: "jump 1s infinite",
        wobble: "wobble 1s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
