import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        search: "#d2d3d7",
        "fuzz-blue": "#2681db",
      },
      boxShadow: {
        fuzz: "0 0 5px",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }: { addBase: any; theme: any }) => {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
      });
    }),
  ],
};
export default config;
