import { AppProps, NextWebVitalsMetric } from 'next/app'

// Component imports
import { Header, Footer } from '@layout'

// Style imports
import '../styles/tailwind.css'

// Helpers

const SyncoreNextApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="flex flex-col flex-1">
					<Component {...pageProps} />
				</main>
				<Footer />
			</div>
		</>
	)
}

export default SyncoreNextApp

export { reportWebVitals } from '@helper/performance'
