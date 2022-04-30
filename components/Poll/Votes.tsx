// Component imports
import { Text } from '@utils'
import { m } from 'framer-motion'

type Props = {
	title: string
	votes: number
	totalVotes: number
}

export const Votes = (props: Props) => {
	return (
		<div>
			<Text>{props.title}</Text>

			{/* Progress bar w/vote percentage. */}
			<div className="flex items-center space-x-2">
				{/* Progress bar. */}
				<div className="relative flex-1 overflow-hidden rounded-full">
					<div className="block w-full h-1 rounded-full select-none bg-background">
						&nbsp;
					</div>
					<m.div
						transition={{
							type: 'tween',
							ease: [0.76, 0, 0.24, 1],
							duration: 1.5
						}}
						initial="hide"
						animate="show"
						variants={{
							hide: {
								x: '-100%'
							},
							show: {
								x: `${-100 + (props.votes / props.totalVotes) * 100}%`
							}
						}}
						className="absolute inset-0 rounded-full bg-primary">
						&nbsp;
					</m.div>
				</div>

				{/* Percentage. */}
				<div>
					<Text tag="p" style="tiny">
						{Math.ceil((props.votes / props.totalVotes) * 100)}%
					</Text>
				</div>
			</div>
		</div>
	)
}
