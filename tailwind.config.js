const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#5F3DF7'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '350ms'
			}
		}
	},
	plugins: [
		//ком очень крутая штука чтобы не писать jc ai flex постоянно
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.flex-center-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				},
				'.flex-center-between': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}
			})
		})
	]
}
