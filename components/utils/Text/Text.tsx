import { createElement } from 'react'

interface Props {
	tag?:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'p'
		| 'strong'
		| 'em'
		| 'mark'
		| 'small'
	style?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'tiny'
	className?: string | null
	children: string
}
/**
 * @description
 * Syncore's all-in-one text component. Makes re-using text styles from the mockup much easier across the website. It is considered best practice to include `tag` first then
 *
 * @example
 * <Text>Hello World</Text> renders a paragraph by default.
 *
 * @example
 * <Text tag="h1" style="h1">Hello World</Text> renders an h1 styled as an h2.
 */
export const Text = ({ tag = 'p', style, className = '', children }: Props) => {
	return createElement(
		tag,
		{
			className: `${style ? style : tag} ${className}`
		},
		children
	)
}
