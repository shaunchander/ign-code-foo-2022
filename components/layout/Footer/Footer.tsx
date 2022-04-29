// Component imports
import { Container, Section, Text } from '@utils'
/**
 * Renders the footer.
 */
export const Footer = () => {
	return (
		<footer className="p-9">
			<Container className="flex flex-col space-y-10">
				{/* Divider. */}
				<div className="block h-px rounded-full select-none bg-white/10">
					&nbsp;
				</div>

				{/* Footer. */}
				<div className="flex items-center flex-1">
					{/* Left hand side. */}
					<div>
						<Text tag="p" style="tiny" className="text-white/30">
							Built by{' '}
							<a
								href="https://shaunchander.me"
								target="_blank"
								rel="noopener noreferrer nofollow"
								className="underline transition duration-300 ease-in-out hover:text-primary">
								Shaun Chander
							</a>{' '}
							for{' '}
							<a
								href="https://www.ign.com/code-foo/2022"
								target="_blank"
								rel="noopener noreferrer nofollow"
								className="underline transition duration-300 ease-in-out hover:text-primary">
								IGN Code Foo 2022
							</a>{' '}
							&bull;{' '}
							<a
								href="https://github.com/shaunchander/ign-code-foo-2022"
								target="_blank"
								rel="noopener noreferrer nofollow"
								className="underline transition duration-300 ease-in-out hover:text-primary">
								View on GitHub
							</a>
						</Text>
					</div>

					{/* Right hand side. */}
				</div>
			</Container>
		</footer>
	)
}
