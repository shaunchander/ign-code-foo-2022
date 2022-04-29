import { ReactNode, ReactNodeArray } from 'react'

interface Props {
	children: ReactNode | ReactNodeArray
	className?: string
}

/**
 * @description A component that defines a flex container. By default it will define a 20px gap and be set to `display: flex;`
 *
 * @param className Optional class names to extend the component's behaviour.
 * @param children The node or nodes. They should be `divs` that define a width.
 *
 * @example
 * <Container>
 *     {children}
 * </Container>
 */
export const Container = ({ children, className = '' }: Props) => {
	return <div className={`container mx-auto ${className}`}>{children}</div>
}
