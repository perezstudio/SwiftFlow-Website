import type { Config } from "tailwindcss";

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#ff9900',
        'custom-secondary': '#F05137',
        'custom-dark': '#1D1D1F',
        'custom-background': '#F5F5F7',
        'custom-blue': '#246DBF',
        'custom-purple': '#5655D5',
        'custom-teal': '#00B2AA'
      }
    }
  },
  plugins: [],
} satisfies Config;
