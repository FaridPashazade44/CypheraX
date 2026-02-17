import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00d4ff',
        'cyber-dark': '#0a0e27',
        'cyber-darker': '#050814',
        'cyber-light': '#1a1f3a',
        'cyber-accent': '#00ffff',
        'cyber-purple': '#8b5cf6',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 212, 255, 0.3)',
        'cyber-lg': '0 0 30px rgba(0, 212, 255, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;