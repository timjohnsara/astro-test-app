/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			fontFamily: {
				/** Change here the font family */
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				/** Override here your primary colors */
				primary: {
					50: "#fef1f7",
					100: "#fee5f0",
					200: "#fecce3",
					300: "#ffa2cb",
					400: "#fe68a7",
					500: "#f83c86",
					600: "#e91f64",
					700: "#ca0c47",
					800: "#a70d3b",
					900: "#8b1034",
					950: "#55021a",
				},
				'dd-purple': "#724EEF",
				'dd-green': "#14D071",
				'dd-orange': "#FF635A",
				'dd-grey': "#F5F5F5",
				'airbnb': "#FF5A5F",
				'peloton': "#000",
				'evernote': "#292929",
				'samsung': "#1428A0",
				'nginx': "#00AA4E",
				'pagerduty': "#5DBD5F",
				'wholefoods': "#000",
				'att': "#00A8E0",
				secondary: {
					50: "#f4f7f7",
					100: "#e2ebeb",
					200: "#c8d9d8",
					300: "#a1bfbf",
					400: "#739c9d",
					500: "#588182",
					600: "#4c6c6e",
					700: "#425a5c",
					800: "#3b4d4f",
					900: "#354244",
					950: "#222d2f",
				},
			},
		},
	},
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require('flowbite/plugin')
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	darkMode: "class",
};
