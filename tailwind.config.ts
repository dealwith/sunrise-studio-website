import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			spacing: {
				"30": "30px",
				"60": "60px"
			},
			backgroundColor: {
				primary: "#1C1C1E",
				secondary: "#E95848"
			},
			fontFamily: {
				unbounded: "Unbounded-Light"
			}
		}
	},
	plugins: []
};
export default config;
