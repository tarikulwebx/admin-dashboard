/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#22c55e",
				color: {
					light: "rgba(255, 255, 255, 0.87)",
					dark: "#374253",
				},
				bodyBackground: {
					light: "#f7f9fb",
					dark: "#333",
				},
			},
		},
	},
	plugins: [],
};
