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
        primary: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DAFE',
          300: '#A3BFFA',
          400: '#7F9CF5',
          500: '#667EEA',
          600: '#2c5282',  // Main primary color
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        secondary: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
      },
    },
  },
  plugins: [],
};

export default config;
