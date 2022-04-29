const withPlugins = require('next-compose-plugins')
const nextPWA = require('next-pwa')

module.exports = withPlugins([
	[
		nextPWA,
		{
			pwa: {
				dest: 'public',
				disable: process.env.NODE_ENV === 'development'
			}
		}
	],
	{
		images: {
			deviceSizes: [400, 768, 1024, 1280, 1536]
		}
	}
])
