import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#734ACC",
        "purple-2": "#9972EE",
        "purple-3": "#EDD0FF",
        blue: "#40B5F8",
        yellow: "#F9D575",
        black: "#1C1C1E",
        grey: "#737373",
        softGrey: "#F8FBFB",
        softTeal: "#EEF5F6",
      },
      backgroundImage: (theme) => ({
        "drink-water": "url('../assets/images/water.png')",
        "confetti": "url('../assets/images/confetti.svg')",
      }),
      backgroundSize: {
        "50%": "50%",
        "60%": "60%",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#734ACC",
          secondary: "#F9D575",
          accent: "#40B5F8",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
} satisfies Config;
