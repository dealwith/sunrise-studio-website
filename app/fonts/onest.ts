import localFont from "next/font/local";

export const onest = localFont({
	src: [
		{ path: "./Onest-Light.ttf", weight: "300", style: "light" },
		{ path: "./Onest-Regular.ttf", weight: "400", style: "normal" },
		{ path: "./Onest-Bold.ttf", weight: "700", style: "bold" }
	]
});
