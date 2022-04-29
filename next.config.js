const path = require('path')

const withPlugins = require('next-compose-plugins')
const nextPWA = require('next-pwa')
const reactSVG = require('next-react-svg')

module.exports = withPlugins([
	[
		reactSVG,
		{
			include: path.resolve(__dirname, 'public/svg'),
			webpack: (config, _) => {
				return config
			}
		}
	],
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
