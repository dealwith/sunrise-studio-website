import localFont from "next/font/local";

export const unbounded = localFont({
  src: [
    { path: "./Unbounded-ExtraLight.ttf", weight: "200", style: "extraLight" },
    { path: "./Unbounded-Light.ttf", weight: "300", style: "light" },
    { path: "./Unbounded-Medium.ttf", weight: "500", style: "medium" },
    { path: "./Unbounded-Bold.ttf", weight: "700", style: "bold" },
  ],
});
