import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        subtleping: {
          "75%": {
            transform: "scale(1.1)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1.1)",
            opacity: "0",
          },
        },
      },
      animation: {
        "subtle-ping": "subtleping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  important: "#__next",
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
