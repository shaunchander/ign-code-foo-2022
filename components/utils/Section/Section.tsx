import { ReactNode, ReactNodeArray } from 'react'

interface Props {
	id: string
	children: ReactNode | ReactNodeArray
	__dangerouslyOverridePadding?: boolean
	className?: string
}

/**
 * @description A component that defines default padding styles.
 *
 * @param id The HTML ID of this section.
 * @param children The child or children React nodes.
 * @param __dangerouslyOverridePadding Removes all padding.
 * @param className Add custom class names to extend or override the component.
 *
 * @default
 * <section id={id}>
 *     {children}
 * </<section>
 */
export const Section = ({
	id,
	children,
	__dangerouslyOverridePadding,
	className = ''
}: Props) => {
	return (
		<section
			id={id}
			className={`${
				__dangerouslyOverridePadding ? '' : 'px-9 py-16'
			} ${className}`}>
			{children}
		</section>
	)
}
