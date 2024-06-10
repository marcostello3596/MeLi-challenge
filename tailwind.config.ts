import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFE600',
        secondary: '#3483FA',
        black: '#333333',
        darkGray: '#666666',
        mediumGray: '#999999',
        lightGray: '#EEEEEE'
      }
    },
  },
  plugins: [],
};
export default config;
