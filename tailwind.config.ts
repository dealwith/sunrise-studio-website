import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "30": "30px",
        "60": "60px",
      },
      backgroundColor: {
        primary: "#1C1C1E",
        secondary: "#E95848",
        accent: "#E95848",
        black: "#1c1c1e",
      },
      fontFamily: {
        unbounded: "Unbounded-Light",
        unboundedMedium: "Unbounded-Medium",
        unboundedBold: "Unbounded-Bold",
      },
      colors: {
        accent: "#E95848",
        "dusky-rose": "#6e5f68",
        "muted-terracotta": "#c47971",
        "soft-blush": "#d1abb5",
        "greyish-mauve": "#967f85",
        "deep-slate-grey": "#464451",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      screens: {
        mobileM: "425px",
      },
    },
  },
  plugins: [addVariablesForColors],
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

export default config;
