module.exports = {
	content: ['./pages/**/*.tsx', './components/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				primary: '#fb3362',
				secondary: '#800b2f',
				dark: '#293045',
				background: '#202735'
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
