// Component imports
import { NextSeo } from 'next-seo'

interface Props {
	title: string
	path: string
	img?: {
		url: string
		alt: string
	}
	description?: string
}

/**
 * @description A component that adds all necessary SEO tags to a page.
 *
 * @requires title The page's title.
 * @requires path The page's path relative to the domain.
 * @param img The page's OpenGraph thumbnail
 * @param description The page's description.
 *
 * @example
 * <SEO title="About" path="/about" description="This is our about page"/>
 */
export const SEO = ({ title, path, img, description }: Props) => {
	return (
		<NextSeo
			title={title}
			canonical={`${process.env.WEBSITE_URL}${path}`}
			description={description}
			openGraph={{
				type: 'website',
				locale: 'en_US',
				url: `${process.env.WEBSITE_URL}${path}`,
				site_name: 'Syncore Starter Next',
				images: img && [img]
			}}
			twitter={{
				cardType: 'summary_large_image'
			}}
		/>
	)
}
