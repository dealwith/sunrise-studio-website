import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // custom
      "laptop-l": "1440px",
      "laptop-s": "1024px",
      tablet: "768px",
      "mobile-l": "640px",
      "mobile-m": "425px",
      // default
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
        unboundedLight: "Unbounded-ExtraLight",
        unbounded: "Unbounded-Light",
        unboundedMedium: "Unbounded-Medium",
        unboundedBold: "Unbounded-Bold",
        onest: "Onest-Regular",
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
        "first-infinite-scroll": "first-infinite-scroll 10s linear infinite",
        "second-infinite-scroll": "second-infinite-scroll 8s linear infinite",
        "third-infinite-scroll": "third-infinite-scroll 15s linear infinite",
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
        "first-infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 32px))" },
        },
        "second-infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 32px))" },
        },
        "third-infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 32px))" },
        },
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
