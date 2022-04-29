// Component imports
import { Text, Section, SEO, Container } from '@utils'

const Home = () => {
	return (
		<>
			<SEO title="Syncore Next Starter" path="" />
			<Section id="base" className="flex items-center justify-center flex-1">
				<Container>
					<div className="w-full text-center">
						<Text className="font-bold">syncore-next-starter</Text>
						<Text className="text-xs">v3.0.0</Text>
					</div>
				</Container>
			</Section>
		</>
	)
}

export default Home
