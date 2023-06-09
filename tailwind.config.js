/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#22c55e",
				color: {
					light: "#d1d5db",
					dark: "#4b5563",
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
