module.exports = {
	plugins:
		process.env.NODE_ENV === 'production'
			? ['postcss-import', 'tailwindcss', 'autoprefixer', 'postcss-preset-env']
			: ['postcss-import', 'tailwindcss']
}
