import localFont from "next/font/local";

export const unbounded = localFont({
  src: [
    { path: "./Unbounded-Light.ttf", weight: "300", style: "light" },
    { path: "./Unbounded-Bold.ttf", weight: "700", style: "bold" },
  ],
});
