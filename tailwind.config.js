/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Calistoga"', "serif"],
      },

      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 10s linear infinite",
        "move-right": "move-right 10s linear infinite",
      },

      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        300: "300ms",
      },
      backdropBlur: {
        sm: "4px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            a: {
              color: "#38bdf8",
              "&:hover": {
                color: "#7dd3fc",
              },
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [],
};
