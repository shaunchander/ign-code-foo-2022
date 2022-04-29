import { AppProps, NextWebVitalsMetric } from 'next/app'

// Component imports
import { Header, Footer } from '@layout'
import { LazyMotion } from 'framer-motion'

// Style imports
import '../styles/tailwind.css'

// Helpers

const SyncoreNextApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<LazyMotion
				features={() =>
					import('framer-motion').then((mod) => mod.domAnimation)
				}>
				<div className="flex flex-col min-h-screen text-white font-body bg-background">
					<Header />
					<main className="flex flex-col flex-1">
						<Component {...pageProps} />
					</main>
					<Footer />
				</div>
			</LazyMotion>
		</>
	)
}

export default SyncoreNextApp

export { reportWebVitals } from '@helper/performance'
