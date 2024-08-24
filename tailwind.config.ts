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
  darkMode: ["class", "selector"],
  theme: {
    extend: {
      
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 0deg, red, yellow, green, blue, purple)',
        'conic-gradient-angles': 'conic-gradient(var(--four), var(--six))',
        'custom-radial': 'radial-gradient(50% 50% at 80% 50%, var(--four) 0%, rgba(0, 0, 0, 0) 100%)',
        'custom-radial-s': 'radial-gradient(70% 120% at 100% 50%, var(--four) 0%, rgba(0, 0, 0, 0) 100%)',
        'custom-radial-sm': 'radial-gradient(33% 69% at 26% 0%, #5e716a8a 0%, rgba(0, 0, 0, 0) 100%)',
        'custom-radial-md': 'radial-gradient(33% 69% at 26% 0%, var(--four) 0%, hsla(0, 0%, 100%, .1) 100%), radial-gradient(103% 20% at 26% 0%, var(--four) 0%, hsla(0, 0%, 100%, .1) 100%)',
        'custom-radial-lg': 'radial-gradient(33% 69% at 26% 0%, hsla(14, 71%, 48%, 1) 0%, hsla(0, 0%, 100%, .1) 100%), radial-gradient(103% 69% at 26% 0%, hsla(14, 71%, 48%, 1) 0%, hsla(0, 0%, 100%, .1) 100%) ',
        'custom-gradient-bgl': 'linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%,  hsla(0, 0%, 10%, 0) 50%, hsla(0, 0%, 100%, 1) 100%)',
        'custom-gradient-bgl0': 'linear-gradient(180deg, hsla(0, 0%, 100%, 1)10%, hsla(180, 2%, 57%, 0) 50%, hsla(0, 0%, 100%, 0.5) 64%)',
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        third: "var(--color-third)",
        four: "var(--color-four)",
        five: "var(--color-five)",
        six: "var(--color-six)",
        seven: "var(--color-seven)",
        
      },
      
      animation: {
          'scroll-vertical': 'scrollVertical var(--animation-duration) linear infinite',
        "meteor-effect": "meteor 5s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 60s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scrollVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          "--color-secondary": theme("colors.secondary"),
          "--color-third": theme("colors.third"),
          "--color-four": theme("colors.four"),
          "--color-five": theme("colors.five"),
          "--color-six": theme("colors.six"),
          "--color-seven": theme("colors.seven"),
          
        },
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            "--color-primary": theme("colors.primary"),
            "--color-secondary": theme("colors.secondary"),
            "--color-third": theme("colors.third"),
            "--color-four": theme("colors.four"),
            "--color-five": theme("colors.five"),
            "--color-six": theme("colors.six"),
          "--color-seven": theme("colors.seven"),
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
