/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			primary: '#DFEAFF',
			black: '#000000',
			white: '#ffffff',
			grey: '#3C3744',
      lightGrey: '#D9D9D9',
			blue: '#222BD6',
			lightBlue: '#3066BE',
      red: '#f00'
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
			righteous: ['Righteous', ' sans-serif'],
		},
	},
	plugins: [],
}
