module.exports = {
	plugins:
		process.env.NODE_ENV === 'production'
			? ['tailwindcss', 'autoprefixer', 'postcss-preset-env']
			: ['tailwindcss']
}
