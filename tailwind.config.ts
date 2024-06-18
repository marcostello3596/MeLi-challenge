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
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '24px': '24px',
        '28px': '28px',
        '36px': '36px',
        '46px': '46px'
      },
      width: {
        '680px': '680px',
      },
      spacing: {
        '16px': '16px',
        '32px': '32px',
      },
      fontFamily: {
        proxima: ['proxima', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
