module.exports = {
	content: ['./pages/**/*.tsx', './components/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				primary: '#00C999',
				secondary: '#0FAC86',
				dark: '#30353E',
				background: '#0D141F'
			},
			screens: {
				sm: '400px',
				'2xl': '1343px'
			},
			outline: {
				none: '0'
			},
			fontFamily: {
				body: ['Satoshi', 'sans-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
}
