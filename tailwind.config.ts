import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
           custom: ['Inknut Antiqua']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed:      '#A72121',
        customBlueDark: '#343E69',
        customBlue:     '#2A3288',
        coustomPurple:  '#410D3C',
      },
    },
  },
  plugins: [],
};
export default config;
