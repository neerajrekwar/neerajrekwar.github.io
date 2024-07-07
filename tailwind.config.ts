import { nextui } from "@nextui-org/theme";
import plugin from "tailwindcss/plugin";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  darkMode:  "selector",
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/projects/kukai-art-mmkzdAN_jzQ-unsplash.jpg')",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        third: "var(--color-third)",
        four: "var(--color-four)",
        five: "var(--color-five)",
        six: "var(--color-six)",
        primaryText: "var(--color-primary-text)",
        thirdText: "var(--color-third-text)",
        secondaryText: "var(--color-secondary-text)"
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    nextui(),
    addVariablesForColors,
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          "--color-secondary": theme("colors.secondary"),
          "--color-white": theme("colors.white"),
          "--color-gray-light": theme("colors.grayLight"),
          "--color-dark": theme("colors.dark"),
        },
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            "--color-primary": theme("colors.secondary"),
            "--color-secondary": theme("colors.dark"),
            "--color-white": theme("colors.primary"),
            "--color-gray-light": theme("colors.primary"),
            "--color-dark": theme("colors.grayLight"),
          },
        },
      });
    }),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
