/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				main: {
					'50': '#f3f5f6', 
					'100': '#e6ebee', 
					'200': '#c1cdd4', 
					'300': '#9bafba', 
					'400': '#517486', 
					'500': '#063852', 
					'600': '#05324a', 
					'700': '#052a3e', 
					'800': '#042231', 
					'900': '#031b28'
				}
			}
		}
	},
	plugins: []
};
