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
  darkMode: ["class","selector"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/projects/kukai-art-mmkzdAN_jzQ-unsplash.jpg')",
      },
      colors: {
        primary: "var(--color-primary-bg)",
        secondary: "var(--color-secondary-bg)",
        third: "var(--color-third-bg)",
        primaryText: "var(--color-primary-text)",
        thirdText: "var(--color-third-text)",
        secondaryText: "var(--color-secondary-text)",
        fourText: "var(--color-four-text)",
        pBorder: "var(--color-primary-border)",
        sBorder: "var(--color-secondary-border)",
        tBorder: "var(--color-third-border)",
        fBorder: "var(--color-four-border)",
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
          "--color-primary-bg": theme("colors.primary"),
          "--color-secondary-bg": theme("colors.secondary"),
          "--color-third-bg": theme("colors.third"),
          "--color-four-bg": theme("colors.four"),
          "--color-primary-text": theme("colors.primaryText"),
          "--color-secondary-text": theme("colors.seconadaryText"),
          "--color-third-text": theme("colors.thirdText"),
          "--color-four-text": theme("colors.fourText"),
          "--color-primary-border": theme("colors.pBorder"),
          "--color-secondary-border": theme("colors.sBorder"),
          "--color-third-border": theme("colors.tBorder"),
          "--color-four-border": theme("colors.fBorder"),
        },
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            "--color-primary-bg": theme("colors.primary"),
              "--color-secondary-bg": theme("colors.secondary"),
              "--color-third-bg": theme("colors.third"),
              "--color-four-bg": theme("colors.four"),
              "--color-primary-text": theme("colors.primaryText"),
              "--color-secondary-text": theme("colors.seconadaryText"),
              "--color-third-text": theme("colors.thirdText"),
              "--color-four-text": theme("colors.fourText"),
              "--color-primary-border": theme("colors.pBorder"),
              "--color-secondary-border": theme("colors.sBorder"),
              "--color-third-border": theme("colors.tBorder"),
              "--color-four-border": theme("colors.fBorder"),
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
