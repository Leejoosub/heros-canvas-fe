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
      colors: {
        primary: "#0C1B33",
        secondary: "#7A306C",
        accentColor: "#03B5AA",
        text: "#E6E6FA",
        emphasisColor: "#64748B",
      },
      transitionProperty: {
        collapsable: "max-height",
      },
    },
  },
  plugins: [],
};
export default config;
