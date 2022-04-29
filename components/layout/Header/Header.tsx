// Component imports
import { Container } from '@utils'
import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/outline'

// Static imports
import Logo from '@svg/logo.svg'

/**
 * Renders the navbar.
 */
export const Header = () => {
	return (
		<header className="sticky z-50 inset-x-0 top-0 shadow-xl bg-dark h-[60px] lg:h-24">
			<nav className="h-full px-9">
				<Container className="flex items-center justify-between h-full justify-items-stretch">
					{/* Logo. */}
					<div className="w-[100px] lg:w-[150px]">
						<Link href="/">
							<a className="block">
								<Logo />
								<span className="sr-only">IGN</span>
							</a>
						</Link>
					</div>

					{/* Create new poll button. */}
					<div>
						<Link href="/create-poll">
							<a className="btn btn-primary">
								<PlusCircleIcon className="w-6 h-6" />
								<span>Create Poll</span>
							</a>
						</Link>
					</div>
				</Container>
			</nav>
		</header>
	)
}
