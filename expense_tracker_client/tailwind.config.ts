import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "var(--primary-blue)",
          pink: "var(--primary-pink)",
        },
        gray: {
          secondary: "var(--gray-secondary)",
          third: "var(--gray-third)",
          fourth: "var(--gray-fourth)",
          fifth: "var(--gray-fifth)",
          progress: "var(--gray-progress)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
