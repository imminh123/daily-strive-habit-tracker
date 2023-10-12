import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple': '#734ACC',
        'purple-2': '#9972EE',
        'purple-3': '#EDD0FF',
        'blue': '#40B5F8',
        'yellow': '#F9D575',
        'black': '#1C1C1E',
        'grey': '#737373',
      },
    },
  },
  plugins: [],
} satisfies Config;
