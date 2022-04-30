// Component imports
import { Text, Section, SEO, Container } from '@utils'
import { Poll } from '@component/Poll'

/**
 * The home page. This is a public page.
 */
const Home = () => {
	return (
		<>
			<SEO title="Pollster | Home" path="/" />

			<Section id="active-polls">
				<Container className="space-y-6">
					{/* Header. */}
					<div>
						<Text tag="h2">Active Polls</Text>
					</div>

					{/* Active polls. */}
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<Poll
							createdAt="1 hour ago"
							title="Do you like Portal 2?"
							options={[
								{ title: 'Yes', votes: 100 },
								{ title: 'No', votes: 100 }
							]}
							totalVotes={200}
						/>
						{/* <Poll />
						<Poll />
						<Poll />
						<Poll />
						<Poll />
						<Poll />
						<Poll /> */}
					</div>
				</Container>
			</Section>

			<Section id="closed-polls">
				<Container className="space-y-6">
					{/* Header. */}
					<div>
						<Text tag="h2">Closed Polls</Text>
					</div>

					{/* Closed polls. */}
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{/* <Poll />
						<Poll />
						<Poll />
						<Poll />
						<Poll />
						<Poll />
						<Poll />
						<Poll /> */}
					</div>
				</Container>
			</Section>
		</>
	)
}

export default Home
