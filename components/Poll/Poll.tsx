// Component imports
import { Text } from '@utils'
import Link from 'next/link'
import { Votes } from '@component/Poll/Votes'
import { EyeIcon } from '@heroicons/react/outline'
import { m } from 'framer-motion'

type Props = {
	title: string
	options: {
		title: string
		votes: number
	}[]
	totalVotes: number
	createdAt: string
}

/**
 * Renders a poll component.
 * @param props
 * @returns
 */
export const Poll = (props: Props) => {
	return (
		<Link href="/" passHref>
			<m.a
				initial="hide"
				whileHover="hover"
				whileTap="click"
				className="relative block h-full rounded-lg">
				{/* Vote card. */}
				<div className="flex flex-col p-6 space-y-4 rounded-lg bg-dark min-h-[250px]">
					{/* Title. */}
					<div>
						<Text tag="h3" className="truncate">
							{props.title}
						</Text>
					</div>

					{/* Votes. */}
					<div className="flex-1">
						{props.options.map((option, i) => (
							<Votes
								key={i}
								title={option.title}
								votes={option.votes}
								totalVotes={props.totalVotes}
							/>
						))}
					</div>

					{/* Additional options. */}
					{props.options.length > 3 && (
						<div>
							<Text tag="p" style="small" className="text-white/70">
								+ {props.options.length} options
							</Text>
						</div>
					)}

					{/* Footer w/divider. */}
					<div className="space-y-1">
						{/* Divider. */}
						<div className="block h-px rounded-full select-none bg-white/10">
							&nbsp;
						</div>

						{/* Footer. */}
						<div className="text-white/40">
							<Text tag="small" className="text-xs">
								Created {props.createdAt} &bull; {props.totalVotes} votes
							</Text>
						</div>
					</div>
				</div>

				{/* Hover/focus overlay. */}
				<m.div
					transition={{
						type: 'tween',
						duration: 0.25
					}}
					variants={{
						hide: {
							opacity: 0
						},
						hover: {
							opacity: 1
						}
					}}
					className="absolute inset-0 flex flex-col items-center justify-center rounded-lg pointer-events-none select-none bg-background/30 backdrop-blur-sm">
					<m.button
						variants={{
							hide: {
								scale: 0
							},
							hover: {
								scale: 1
							},
							click: {
								scale: 0.85
							}
						}}
						className="icon-btn icon-btn-primary">
						<EyeIcon className="w-6 h-6" />
					</m.button>
				</m.div>
			</m.a>
		</Link>
	)
}
